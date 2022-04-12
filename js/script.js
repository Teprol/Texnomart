const buttonPopup = document.querySelector('.contacts__link');
const popupFeedback = document.querySelector('.feedback');
const closeFeedback = popupFeedback.querySelector('.feedback__close');
const loginFeedback = popupFeedback.querySelector('[name=имя]');
const mailFeedback = popupFeedback.querySelector('[name=почта]');
const submitFeedback = popupFeedback.querySelector('.feedback__form-submit input');
const textFeedback = popupFeedback.querySelector('textarea');
//переменнные для localStorage и открытия закрытия попапа
let popupCloseEsc = function (namePopup) { //функция открыть закрыть по ESC
  window.addEventListener('keydown', function (evt) { // если попап открыт то можно закрыть по esc
    if (evt.keyCode === 27) {
      if (namePopup.classList.contains('modal_open')) {
        evt.preventDefault();
        namePopup.classList.remove('modal_open');
        namePopup.classList.remove('modal_error');
      }
    }
  });
}


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
    popupFeedback.classList.remove('modal_error');
    popupFeedback.offsetWidth = popupFeedback.offsetWidth; //хак дял повтороной анимации ошибки
    popupFeedback.classList.add('modal_error');
  } else { // если все гуд то запишет логин
    if (storageSupport) { //если стораж поддерживается
      localStorage.setItem('loginFeedback', loginFeedback.value);
    }
  }
});

closeFeedback.addEventListener('click', function () {
  popupFeedback.classList.remove('modal_open');
  popupFeedback.classList.remove('modal_error');
}); // закрытие попапа и удаление всех классов с него

popupCloseEsc(popupFeedback);


const popupMap = document.querySelector('.map');
const imgMapOpen = document.querySelector('.contacts__img');
const mapClose = popupMap.querySelector('.map__close');

imgMapOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('modal_open');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.remove('modal_open');
});

popupCloseEsc(popupMap);

const popupBuy = document.querySelector('.modal-item-cart');
let cardBuy = document.querySelectorAll('.popular-goods__card');
const popupButClose = popupBuy.querySelector('.modal-item-cart__close');

for (let i = 0; i < cardBuy.length; i++) { //счетчик который присваивает каждой кнопке открыть закрыть попап
  let button = cardBuy[i];
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupBuy.classList.add('modal_open');
    popupBuy.style.left = '35%'; //переопределим стиль чтобы сместить попап чуть левее
  });
};

popupButClose.addEventListener('click', function (evt) {
  popupBuy.classList.remove('modal_open');
});

popupCloseEsc(popupBuy);