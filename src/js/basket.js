

let basketBtn = document.querySelector('.header__links-basket');
let basketContent = document.querySelector('.basket');
let basketList = document.querySelector('.basket__cards');
let totalBasket = document.querySelectorAll('.total');
let percentBasket = document.querySelector('.percent');
export let basketData = [];

if (localStorage.getItem('basket') !== null) {
    basketData = JSON.parse(localStorage.getItem('basket'));
}


const setLocalStorage = () => {
    localStorage.setItem('basket', JSON.stringify(basketData));
};

export const addBasket = (product) => {
    basketData = [
        ...basketData,
       product
    ];
    setLocalStorage()
}

export const deleteBasket = (item,id) => {
    basketData = basketData.filter((el) => el.id !== +item.dataset.id);
    if (
        item.classList.contains('removeCartInBasket') &&
        !basketData.length
    ) {
        basketContent.classList.remove('show');
    }
    setLocalStorage()
}

export const getBasket = () => {
    basketList.innerHTML = '';
    basketData.forEach((item) => {
        basketList.innerHTML += `
            <div class="basket__card">
                <img src="${item.images}" alt="${item.title}" class="basket__card-img">
                <h3 class="basket__card__name">${item.title}</h3>
                <span class="basket__card__sum">${item.price} руб.</span>
                <img data-id="${item.id}" src="./src/icons/X.svg" alt="" class="basket__card__X removeCart removeCartInBasket">
              </div>
              
              <div class="basketNone__main-none">
                <img src="../images/basketNone/smile1.png" alt="Pain smile img" class="basketNone__main-none-img">
                <div class="basketNone__main-none-text">
                    <h2 class="basketNone__main-none-title">У вас нет заказов</h2>
                    <p class="basketNone__main-none-desc">Вы нищеброд? Оформите хотя бы один заказ.</p>
                    <a href="../../index.html" class="basketNone__main-none-link"><span class="basketNone__main-none-link-icon"><svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>Вернуться назад</a></div>
            </div>    
`;
    });

    Array.from(totalBasket).forEach((item) => {
        item.textContent = basketData.reduce((acc, rec) => {
            return acc + +rec.price;
        }, 0);
    });

    percentBasket.textContent =
        (basketData.reduce((acc, rec) => {
                return acc + +rec.price;
            }, 0) /
            100) *
        5;
};

getBasket();

basketBtn.addEventListener('click', () => basketContent.classList.add('show'));
document.querySelector('.basket').addEventListener('click', (e) => {
    if (e.target.classList.contains('basket')) {
        basketContent.classList.remove('show');
    }
});