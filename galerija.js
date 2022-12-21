const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');

const offset = 50;

menBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
});

window.addEventListener("scroll", () => {
  if (pageYOffset > offset) {
    navbar.classList.add('navbar-active');
  } else {
    navbar.classList.remove('navbar-active');
  }
});

const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const mainImg = document.querySelector('.lightbox img');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');

let imgIndex = 0;

images.forEach(img => {
  img.addEventListener('click', e => {
    mainImg.src = e.target.src;
    imgIndex = [...images].indexOf(img);

    lightbox.style.display = "flex";

    setTimeout(() => {
      lightbox.style.opacity = "1";
    }, 10);
  });
});

window.addEventListener('click', e => {
  if(e.target.classList.contains('lightbox')) {

    lightbox.style.opacity = "0";

    setTimeout(() => {
      lightbox.style.display = "none";
    }, 350);
  }
});

arrLeft.addEventListener('click', () => {

  imgIndex--;

  if(imgIndex < 0) {

    imgIndex = images.lenght - 1;
  }

  mainImg.src = images[imgIndex].src;
});

arrRight.addEventListener('click', () => {

  imgIndex++;

  if(imgIndex > images.length - 1) {

    imgIndex = 0;
  }

  mainImg.src = images[imgIndex].src;
});