var popup = document.querySelector('.modal-search');

popup.classList.add('modal-hide');

var open = document.querySelector('.btn-search');

open.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.toggle('modal-hide');
});
