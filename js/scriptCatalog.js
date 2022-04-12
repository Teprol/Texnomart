const popupBuy = document.querySelector('.modal-item-cart');
let cardBuy = document.querySelectorAll('.gods-card-buy-hidden');
const popupButClose = popupBuy.querySelector('.modal-item-cart__close');

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

for (let i = 0; i < cardBuy.length; i++) { //счетчик который присваивает каждой кнопке открыть закрыть попап
    let button = cardBuy[i];
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        popupBuy.classList.add('modal_open');
    });
};

popupButClose.addEventListener('click', function (evt) {
    popupBuy.classList.remove('modal_open');
});

popupCloseEsc(popupBuy);