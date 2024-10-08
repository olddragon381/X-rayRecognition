$(document).ready(function () {
  $("#upload_button").click(function () {
    $("#fileinput").trigger("click");
  });

  $("#fileinput").change(function () {
    const file = $("#fileinput")[0].files[0];
    if (file.size > MAX_FILE_SIZE) {
      alert(
        "File có kích thước vượt quá giới hạn cho phép (5 MB). Vui lòng chọn file khác."
      );
    } else {
      $("#form").submit();
      $("#upload_hint").text("Đang tải file " + file.name + " lên server...");
    }
  });

  $(".header").click(function () {
    $(".header").css("animation", "none");
  });

  const STAR_COLOR = "#fff";
  const STAR_SIZE = 3;
  const STAR_MIN_SCALE = 0.2;
  const OVERFLOW_THRESHOLD = 50;
  const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

  const canvas = document.querySelector("canvas"),
    context = canvas.getContext("2d");

  let scale = 1,
    width,
    height;

  let stars = [];

  let pointerX, pointerY;

  let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

  let touchInput = false;

  generate();
  resize();
  step();

  window.onresize = resize;
  canvas.onmousemove = onMouseMove;
  canvas.ontouchmove = onTouchMove;
  canvas.ontouchend = onMouseLeave;
  document.onmouseleave = onMouseLeave;

  function generate() {
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      });
    }
  }

  function placeStar(star) {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }

  function recycleStar(star) {
    let direction = "z";
    let vx = Math.abs(velocity.x),
      vy = Math.abs(velocity.y);

    if (vx > 1 || vy > 1) {
      let axis;

      if (vx > vy) {
        axis = Math.random() < vx / (vx + vy) ? "h" : "v";
      } else {
        axis = Math.random() < vy / (vx + vy) ? "v" : "h";
      }

      if (axis === "h") {
        direction = velocity.x > 0 ? "l" : "r";
      } else {
        direction = velocity.y > 0 ? "t" : "b";
      }
    }

    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

    if (direction === "z") {
      star.z = 0.1;
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    } else if (direction === "l") {
      star.x = -OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === "r") {
      star.x = width + OVERFLOW_THRESHOLD;
      star.y = height * Math.random();
    } else if (direction === "t") {
      star.x = width * Math.random();
      star.y = -OVERFLOW_THRESHOLD;
    } else if (direction === "b") {
      star.x = width * Math.random();
      star.y = height + OVERFLOW_THRESHOLD;
    }
  }

  function resize() {
    scale = window.devicePixelRatio || 1;
    width = window.innerWidth * scale;
    height = window.innerHeight * scale;
    canvas.width = width;
    canvas.height = height;
    stars.forEach(placeStar);
  }

  function step() {
    context.clearRect(0, 0, width, height);
    update();
    render();
    requestAnimationFrame(step);
  }

  function update() {
    velocity.tx *= 0.96;
    velocity.ty *= 0.96;
    velocity.x += (velocity.tx - velocity.x) * 0.8;
    velocity.y += (velocity.ty - velocity.y) * 0.8;

    stars.forEach((star) => {
      star.x += velocity.x * star.z;
      star.y += velocity.y * star.z;
      star.x += (star.x - width / 2) * velocity.z * star.z;
      star.y += (star.y - height / 2) * velocity.z * star.z;
      star.z += velocity.z;

      if (
        star.x < -OVERFLOW_THRESHOLD ||
        star.x > width + OVERFLOW_THRESHOLD ||
        star.y < -OVERFLOW_THRESHOLD ||
        star.y > height + OVERFLOW_THRESHOLD
      ) {
        recycleStar(star);
      }
    });
  }

  function render() {
    stars.forEach((star) => {
      context.beginPath();
      context.lineCap = "round";
      context.lineWidth = STAR_SIZE * star.z * scale;
      context.globalAlpha = 0.5 + 0.5 * Math.random();
      context.strokeStyle = STAR_COLOR;

      context.beginPath();
      context.moveTo(star.x, star.y);

      var tailX = velocity.x * 2,
        tailY = velocity.y * 2;

      if (Math.abs(tailX) < 0.1) tailX = 0.5;
      if (Math.abs(tailY) < 0.1) tailY = 0.5;

      context.lineTo(star.x + tailX, star.y + tailY);

      context.stroke();
    });
  }

  function movePointer(x, y) {
    if (typeof pointerX === "number" && typeof pointerY === "number") {
      let ox = x - pointerX,
        oy = y - pointerY;

      velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1);
      velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1);
    }

    pointerX = x;
    pointerY = y;
  }

  function onMouseMove(event) {
    touchInput = false;
    movePointer(event.clientX, event.clientY);
  }

  function onTouchMove(event) {
    touchInput = true;
    movePointer(event.touches[0].clientX, event.touches[0].clientY, true);
    event.preventDefault();
  }

  function onMouseLeave() {
    pointerX = null;
    pointerY = null;
  }
});

// JavaScript để mở hình ảnh phóng to
function openImage(img) {
  var expandedImg = document.getElementById("expandedImg");
  expandedImg.src = img.src;
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

// JavaScript để đóng hình ảnh phóng to
function closeImage() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

// JavaScript để hiển thị và đóng popup khi click vào div có class "result_part"
document.addEventListener("DOMContentLoaded", function () {
  var resultPartDiv = document.querySelector(".result_part");
  var popup = document.getElementById("popup");

  resultPartDiv.addEventListener("click", function () {
    popup.style.display = "block";
  });
});

// Function để đóng popup
function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Đọc văn bản
var speechSynthesis = window.speechSynthesis;
var speech = null;
var isSpeaking = false;
var currentCharIndex = 0;

var voiceButton = document.getElementById("voiceButton");

voiceButton.addEventListener("click", function () {
  if (!isSpeaking) {
    startSpeaking();
  } else {
    stopSpeaking();
  }
});

function startSpeaking() {
  var contentElement = document.getElementById("dataxquang");
  if (!contentElement) {
    console.log("Không tìm thấy phần tử với id 'dataxquang'");
    return;
  }

  var content = contentElement.innerText.trim();
  if (content === "") {
    console.log("Nội dung rỗng hoặc không hợp lệ");
    return;
  }

  speech = new SpeechSynthesisUtterance(content.slice(currentCharIndex));
  speech.lang = "vi-VN"; // Thiết lập ngôn ngữ đọc là tiếng Việt, có thể thay đổi

  speech.onstart = function () {
    console.log("Bắt đầu đọc");
  };

  speech.onend = function () {
    console.log("Kết thúc đọc");
    isSpeaking = false;
    currentCharIndex = 0; // Reset chỉ số ký tự hiện tại khi đọc xong
    updateIcon();
  };

  speech.onerror = function (event) {
    console.log("Lỗi: ", event.error);
    isSpeaking = false;
    updateIcon();
  };

  speech.onboundary = function (event) {
    if (event.name === "word") {
      currentCharIndex += event.charLength; // Cập nhật chỉ số ký tự hiện tại
      console.log("Vị trí từ: ", currentCharIndex);
    }
  };

  speechSynthesis.speak(speech);
  isSpeaking = true;
  updateIcon();
}

function stopSpeaking() {
  if (speech !== null) {
    speechSynthesis.cancel();
    isSpeaking = false;
    updateIcon();
  }
}

function updateIcon() {
  if (isSpeaking) {
    // Đang đọc, chuyển biểu tượng sang biểu tượng dừng
    voiceButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M12 3a9 9 0 0 0-9 9c0 4.96 4.04 9 9 9s9-4.04 9-9a9 9 0 0 0-9-9zm2 13h-1V8h1v8zm-4 0H9V8h1v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
  } else {
    // Không đọc, chuyển biểu tượng sang biểu tượng đọc
    voiceButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';

  }
}
