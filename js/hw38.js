const slider = document.querySelector(".slider");
const prevBtn = slider.querySelector(".prev");
const nextBtn = slider.querySelector(".next");
const images = slider.querySelectorAll("img");
let currentImage = 0;

function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none";
  });
  images[index].style.display = "block";

  if (currentImage === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentImage === images.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

function prevImage() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = 0;
  }
  showImage(currentImage);
}

function nextImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
}

showImage(currentImage);

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
