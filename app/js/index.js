let menuBurger = document.querySelector('.header__menu-burger');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.main-menu');
let orderButton = document.querySelector('.button-js');
let popup = document.querySelector('.callback-popup');
let closeButton = document.querySelector('.callback__close-button');

/* Menu-burger */
menuBurger.onclick = function () {
  header.classList.toggle('header--active');
  mainMenu.classList.toggle('hidden');
}

/* Popup */
orderButton.onclick = function () {
  popup.classList.remove('hidden');
  document.body.style.backgroundColor = "rgba(6, 6, 6, 0.5)";
}

closeButton.onclick = function (evt) {
  evt.preventDefault();
  popup.classList.add('hidden');
  document.body.style.backgroundColor = "#3B181E";
}