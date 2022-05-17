const prevImg = document.querySelector('#previous-image');
const nextImg = document.querySelector('#next-image');
const caraImage = document.querySelector('#image');
const caraCircles = document.querySelectorAll('.fa-circle');
const imageLib = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];
let libCounter = 0;
let intervalID = setInterval(nextImage, 3000);

prevImg.addEventListener('click', previousImage);
nextImg.addEventListener('click', nextImage);

function nextImage() {
  if (libCounter === imageLib.length - 1) {
    libCounter = 0;
  } else {
    libCounter++;
  }
  caraImage.setAttribute('src', imageLib[libCounter]);
  circleControl();
  clearInterval(intervalID);
  intervalID = setInterval(nextImage, 3000);
}

function previousImage() {
  if (libCounter === 0) {
    libCounter = imageLib.length - 1;
  } else {
    libCounter--;
  }
  caraImage.setAttribute('src', imageLib[libCounter]);
  circleControl();
  clearInterval(intervalID);
  intervalID = setInterval(nextImage, 3000);
}

function circleControl() {
  for (let i = 0; i < caraCircles.length; i++) {
    if (i === libCounter) {
      caraCircles[i].setAttribute('class', 'fas fa-circle');
    } else if (i !== libCounter) {
      caraCircles[i].setAttribute('class', 'far fa-circle');
    }
  }
}

for (let circleIndex = 0; circleIndex < imageLib.length; circleIndex++) {
  caraCircles[circleIndex].addEventListener('click', event => {
    libCounter = circleIndex - 1;
    caraCircles[circleIndex].setAttribute('class', 'fas fa-circle');
    nextImage();
  }
  );
}
