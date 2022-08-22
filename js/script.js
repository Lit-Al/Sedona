const showBtn = document.querySelector('.button-show-form');
const popup = document.querySelector('.form');
const form = document.querySelector('.form-search');
const firstInp = form.querySelector('.input-date-arrival');
const secondInp = form.querySelector('.input-date-exit');
const numberInpFirst = form.querySelector('.input-decrease-increase-first');
const numberInpSecond = form.querySelector('.input-decrease-increase-second');
let isMenuShow = false;

showBtn.addEventListener("click", function() {
  if (isMenuShow ) {
    popup.classList.add('form-hide');
    popup.classList.remove('form-showed');
    isMenuShow  = false;
  }
  else {
    popup.classList.remove('form-hide');
    popup.classList.add('form-showed');
    popup.classList.remove('form-error');
    firstInp.focus();
    isMenuShow  = true;
  }
});


form.addEventListener('submit', function(evt) {
  if (!firstInp.value || !secondInp.value || !numberInpFirst.value || !numberInpSecond.value) {
    evt.preventDefault();
    popup.classList.remove('form-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("form-showed")) {
      if (isMenuShow) {}
      evt.preventDefault();
      popup.classList.add('form-hide');
      popup.classList.remove('form-showed');
      isMenuShow  = false;
    }
  }
});