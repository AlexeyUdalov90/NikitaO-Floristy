/* Переменные */
let menuBurger = document.querySelector('.header__menu-burger');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.main-menu');
let orderButton = document.querySelector('.promo__button');
let popup = document.querySelector('.callback-popup');
let closeButton = document.querySelector('.callback__close-button');

/* Обработчик для меню */
menuBurger.onclick = function () {
  header.classList.toggle('header--active');
  mainMenu.classList.toggle('hidden');
}

/* Обработчик для Popup */
orderButton.onclick = function () {
  popup.classList.remove('hidden');
  document.body.style.opacity = "0.1";
}

closeButton.onclick = function (evt) {
  evt.preventDefault();
  popup.classList.add('hidden');
  document.body.style.opacity = "1";
}