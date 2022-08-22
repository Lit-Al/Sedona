const modal = document.querySelector('.alert');
const modalClose = modal.querySelector('.alert__close');
const modalBack= modal.querySelector('.alert__background');


modalClose.addEventListener('click', function() {
  modal.classList.add('alert-hide');
});
modalBack.addEventListener('click', function() {
    modal.classList.add('alert-hide');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      modal.classList.add("alert-hide");
    }
  }
);