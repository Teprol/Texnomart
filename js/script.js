const buttonPopup = document.querySelector('.contacts__link');
const popupFeedback = document.querySelector('.feedback');
const closeFeedback  = popupFeedback.querySelector('.feedback__close');
const loginFeedback = popupFeedback.querySelector('[name=имя]');
const mailFeedback = popupFeedback.querySelector('[name=почта]');
const submitFeedback = popupFeedback.querySelector('.feedback__form-submit input');
const textFeedback = popupFeedback.querySelector('textarea');
//переменнные для localStorage и открытия закрытия попапа

let storageSupport = true;
let storage;
//нужны для проверки на ошибки

try {
  storage = localStorage.getItem('loginFeedback');
} catch {
  storageSupport = false;
}
// проверка на поддержку localStorage, елси фолс то дальше запись не сделается в ключ

buttonPopup.addEventListener('click', function () {
  popupFeedback.classList.add('modal_open'); // откроет попап
  if (storage) {
    loginFeedback.value = storage;
    mailFeedback.focus();  //если запись в логине есть то кинет фокус на мыло
  } else {
    loginFeedback.focus(); //если логина нет, то на него фоку
  };
});

submitFeedback.addEventListener('click', function () {
  if (!loginFeedback.value || !mailFeedback.value || !textFeedback.value) { // провекрка на незаполнение логина и мыла если не заполнено то присвоет анимацтю покачивания попапа
    popupFeedback.classList.add('modal_error');
  } else { // если все гуд то запишет логин
    if (storageSupport) { //если стораж поддерживается
      localStorage.setItem('loginFeedback', loginFeedback.value);
    }
  }
});

popupFeedback.addEventListener("animationend", AnimationHandler, false); //удаляет класс анимации после завершения ее
function AnimationHandler () {
  // Удаляем класс с анимацией
  popupFeedback.classList.remove('modal_error');
};

closeFeedback.addEventListener('click', function () {
  popupFeedback.classList.remove('modal_open');
  popupFeedback.classList.remove('modal_error');
}); // закрытие попапа и удаление всех классов с него

window.addEventListener('keydown', function (evt) { // если попап открыт то можно закрыть по esc
if (evt.keyCode === 27) {
  if (popupFeedback.classList.contains('modal_open')) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal_open');
    popupFeedback.classList.remove('modal_error');
  }
}
});

