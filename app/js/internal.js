let orderButtonInternal = document.querySelector('.content-section__content-button');
let popup = document.querySelector('.callback-popup');
let closeButton = document.querySelector('.callback__close-button');

orderButtonInternal.onclick = function () {
  popup.classList.remove('hidden');
  document.body.style.backgroundColor = "rgba(6, 6, 6, 0.5)";
}

closeButton.onclick = function (evt) {
  evt.preventDefault();
  popup.classList.add('hidden');
  document.body.style.backgroundColor = "#3B181E";
}
