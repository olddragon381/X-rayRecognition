import torch
from torchvision import models, transforms
from PIL import Image

# Tiền xử lý dữ liệu
data_transforms = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

class_names = ['notxquang', 'xquang']

# Sử dụng GPU nếu có
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")


def load_xray_model():
    model = models.resnet18(pretrained=True)
    num_ftrs = model.fc.in_features
    model.fc = torch.nn.Linear(num_ftrs, 2)
    model.load_state_dict(torch.load('models/detectxquang/xray_classifier.pth', map_location=torch.device('cpu')))
    model.eval()
    return model

def predict_image(image_path, model):
    model.eval()
    image = Image.open(image_path).convert('RGB') # Convert image to RGB
    image = data_transforms(image).unsqueeze(0)
    image = image.to(device)

    with torch.no_grad():
        outputs = model(image)
        _, preds = torch.max(outputs, 1)
    
    return class_names[preds[0]]