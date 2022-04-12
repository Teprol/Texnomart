const buttonPopup = document.querySelector('.contacts__link');
const popupFeedback = document.querySelector('.feedback');
const closeFeedback  = popupFeedback.querySelector('.feedback__close');
const loginFeedback = popupFeedback.querySelector('[name=имя]');
const mailFeedback = popupFeedback.querySelector('[name=почта]');
const formFeedback = popupFeedback.querySelector('form');

let storageSupport = true;
const storage = '';

try {
  storage = localStorage.getItem('login');
} catch {
  storageSupport = false;
}

buttonPopup.addEventListener('click', function () {
  popupFeedback.classList.add('feedback_open');
  if (storage) {
    loginFeedback.value = storage;
    mailFeedback.focus();
  } else {
    loginFeedback.focus();
  };
});

closeFeedback.addEventListener('click', function () {
  popupFeedback.classList.remove('feedback_open');
  popupFeedback.classList.remove('feedback_error');
});

formFeedback.addEventListener('submit', function (evt) {
  if (!loginFeedback.value || !mailFeedback.value) {
    evt.preventDefault();
    popupFeedback.classList.add('feedback_error');
  } else {
    if (storageSupport) {
      localStorage.setItem('login', loginFeedback.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
if (evt.keyCode === 27) {
  if (popupFeedback.classList.contains('feedback_open')) {
    evt.preventDefault();
    popupFeedback.classList.remove('feedback_open');
    popupFeedback.classList.remove('feedback_error');
  }
}
});

if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || element.value;

      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}
