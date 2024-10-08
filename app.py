from flask import Flask, render_template, request
from markupsafe import Markup
import os
import requests
import time
import random
import torch
from models.experimental import attempt_load
from utils.dataloaders import IMG_FORMATS, VID_FORMATS, LoadImages, LoadScreenshots, LoadStreams
from utils.general import (
    LOGGER, Profile, check_file, check_img_size, check_imshow, check_requirements,
    colorstr, cv2, increment_path, non_max_suppression, print_args, scale_boxes,
    strip_optimizer, xyxy2xywh, set_logging
)
from ultralytics.utils.plotting import Annotator, colors, save_one_box
from utils.torch_utils import select_device, smart_inference_mode
from detectxquang import load_xray_model, predict_image
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import threading
import queue

# Khởi tạo Flask
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static'

# Initialize Limiter
limiter = Limiter(get_remote_address, app=app, default_limits=["10 per minute"])

# Dung lượng ảnh là 5MB
MAX_FILE_SIZE = 5 * 1024 * 1024

# API của virustotal
VIRUSTOTAL_API_KEY = 'da2eb95df9c2a55d5743b4ea55eddd2d7105b381373b1b60e0c9693f8a860ba1'  # API virus

# Load model from detectxquang.py
modelxquangdetect = load_xray_model()

# Load model
weights = 'runs/train/exp55/weights/best.pt'
set_logging()
device = select_device('')
half = device.type!= 'cpu'
imgsz = 640

# Load model
model = attempt_load(weights, device=device)  # load FP32 model
stride = int(model.stride.max())  # model stride
imgsz = check_img_size(imgsz, s=stride)  # check img_size
if half:
    model.half()  # to FP16

desc_file = "xray_desc.csv"
with open(desc_file, "r", encoding="utf-8") as f:
    desc = f.readlines()

dictionary = {}
for line in desc:
    dictionary[line.split('|')[0]] = line.split('|')[1]

def scan_file_with_virustotal(file_path):
    def scan_file_in_background(file_path):
        url = 'https://www.virustotal.com/api/v3/files'
        headers = {
            'x-apikey': VIRUSTOTAL_API_KEY,
        }
        files = {'file': (os.path.basename(file_path), open(file_path, 'rb'))}
        response = requests.post(url, headers=headers, files=files)
        if response.status_code == 200:
            file_id = response.json()['data']['id']
            report_url = f'https://www.virustotal.com/api/v3/analyses/{file_id}'
            while True:
                report_response = requests.get(report_url, headers=headers)
                if report_response.status_code == 200:
                    analysis_status = report_response.json()['data']['attributes']['status']
                    if analysis_status == 'completed':
                        return report_response.json()
                    else:
                        time.sleep(15)  # Chờ 15 giây trước khi kiểm tra lại
                else:
                    return None
        else:
            return None

    thread = threading.Thread(target=scan_file_in_background, args=(file_path,))
    thread.start()
    return thread

@app.route("/", methods=['GET', 'POST'])
@limiter.limit("5 per minute")  # Giới hạn 5 yêu cầu trên 1 phút
def home_page():
    detected_ids = []
    if request.method == "POST":
        try:
            image = request.files['file']
            if image:
                image.seek(0, os.SEEK_END)
                file_size = image.tell()
                image.seek(0, os.SEEK_SET)

                if file_size > MAX_FILE_SIZE:
                    return render_template('index.html', warning_text='Dung lượng file vượt quá 5MB', detected_ids=detected_ids)

                source = os.path.join(app.config['UPLOAD_FOLDER'], image.filename)
                image.save(source)

                # Kiểm tra ảnh x quang sử dụng detectxquang.py
                image_type = predict_image(source, modelxquangdetect)
                if image_type != 'xquang':
                    return render_template('index.html', warning_text='Đây không phải là ảnh X-quang', detected_ids=detected_ids)

                # Start virus scan in background
                virus_scan_thread = scan_file_with_virustotal(source)
                
                # Nếu không có virus thì xử lý tiếp
                save_img = True
                dataset = LoadImages(source, img_size=imgsz, stride=stride)

                # Get names and colors
                names = model.module.names if hasattr(model, 'module') else model.names

                # Run inference
                if device.type != 'cpu':
                    model(torch.zeros(1, 3, imgsz, imgsz).to(device).type_as(next(model.parameters())))  # run once

                conf_thres = 0.35
                iou_thres = 0.25

                extra = ""
                for data in dataset:
                    path, img, im0s, vid_cap = data[:4]

                    img = torch.from_numpy(img).to(device)
                    img = img.half() if half else img.float()  # uint8 to fp16/32
                    img /= 255.0  # 0 - 255 to 0.0 - 1.0
                    if img.ndimension() == 3:
                        img = img.unsqueeze(0)

                    # Inference
                    pred = model(img, augment=False)[0]

                    # Apply NMS
                    pred = non_max_suppression(pred, conf_thres, iou_thres, classes=None, agnostic=False)

                    # Process detections
                    for i, det in enumerate(pred):  # detections per image
                        p, s, im0, frame = path, '', im0s, getattr(dataset, 'frame', 0)
                        save_path = source
                        if len(det):
                            # Rescale boxes from img_size to im0 size
                            det[:, :4] = scale_boxes(img.shape[2:], det[:, :4], im0.shape).round()
                            # Write results
                            for *xyxy, conf, cls in reversed(det):
                                if save_img:  # Add bbox to image
                                    if 0 <= int(cls) < len(names):
                                        detected_ids.append(int(cls))  # Append detected class index
                                        if names[int(cls)] in dictionary:
                                            replaced_str = dictionary.get(names[int(cls)]).replace("\n", "")
                                            label = f'{replaced_str}-{conf:.2f}'

                                            font = cv2.FONT_HERSHEY_COMPLEX
                                            font_scale = 1.0  # Tăng kích thước chữ
                                            font_thickness = 2
                                            font_color = (255, 255, 255)  # Màu của chữ là trắng
                                            rectangle_color = (128, 0, 128)  # Màu tím

                                            # Tính kích thước của label để căn giữa trong hộp
                                            (label_width, label_height), baseline = cv2.getTextSize(label, font, font_scale, font_thickness)
                                            label_x = int(xyxy[0] + (xyxy[2] - xyxy[0] - label_width) / 2)
                                            label_y = int(xyxy[1] - 5)  # Dịch lên trên một chút để không che phủ lên hộp

                                            # Vẽ hộp và thêm nền màu
                                            cv2.rectangle(im0, (int(xyxy[0]), int(xyxy[1])), (int(xyxy[2]), int(xyxy[3])), color=rectangle_color, thickness=3)
                                            cv2.rectangle(im0, (label_x - 5, label_y - label_height - 5), (label_x + label_width + 5, label_y + 5), color=rectangle_color, thickness=cv2.FILLED)

                                            # Vẽ label với font hỗ trợ tiếng Việt
                                            cv2.putText(im0, label, (label_x, label_y), font, font_scale, font_color, font_thickness)

                                        extra += "<br>- <b>" + str(names[int(cls)]) + "</b> với độ tin cậy <b>{:.2f}% </b>".format(conf * 100)
                                    else:
                                        extra += "<br>- Lớp không hợp lệ: " + str(int(cls))

                            # Save results (image with detections)
                            if save_img:
                                if dataset.mode == 'image':
                                    cv2.imwrite(save_path, im0)

                return render_template("index.html", user_image=image.filename, rand=random.random(),
                                       msg="Hình ảnh chuẩn đoán", extra=Markup(extra), detected_ids=detected_ids)
            else:
                return render_template('index.html', msg='Hãy chọn file để tải lên', detected_ids=detected_ids)

        except Exception as ex:
            import traceback
            traceback.print_exc()
            return render_template('index.html', msg='Không nhận diện được ảnh', debug_info=str(ex), detected_ids=detected_ids)

    else:
        return render_template('index.html', detected_ids=detected_ids)

@app.route("/ratelimit")
def ratelimit():
    return render_template('ratelimit.html')

@app.errorhandler(429)
def ratelimit_handler(e):
    return render_template('ratelimit.html'), 429

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)