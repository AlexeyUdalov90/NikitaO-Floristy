let menuBurger = document.querySelector('.header__menu-burger');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.main-menu');

menuBurger.onclick = function () {
  header.classList.toggle('header--active');
  mainMenu.classList.toggle('hidden');
}