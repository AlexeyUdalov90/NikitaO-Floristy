let menuBurger = document.querySelector('.header__menu-burger');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.main-menu');
let orderButton = document.querySelector('.button-js');
let popup = document.querySelector('.callback-popup-wrapper');
let closeButton = document.querySelector('.callback__close-button');

/* Menu-burger */
menuBurger.onclick = function () {
  header.classList.toggle('header--active');
  mainMenu.classList.toggle('main-menu--active');
  if (header.classList.contains('header--active')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
}

/* Popup */
orderButton.onclick = function () {
  popup.classList.add('callback-popup-wrapper--active');
  document.body.style.overflow = "hidden";

}

closeButton.onclick = function (evt) {
  evt.preventDefault();
  popup.classList.remove('callback-popup-wrapper--active');
  document.body.style.overflow = "visible";
}