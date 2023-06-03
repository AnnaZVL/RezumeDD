// Бургер-меню
const $burger = document.querySelector('.burger'),
    $menu = document.querySelector('.menu__list'),
    $menuLink = document.querySelectorAll('.menu__link');

$burger.addEventListener('click', () => {
    $burger.classList.toggle('open');
    $menu.classList.toggle('menu__list--active');
});

$menuLink.forEach((el) => {
    el.addEventListener('click', () => {
        $menu.classList.toggle('menu__list--active');
    });
});

const $en = document.querySelectorAll('.en'),
    $ru = document.querySelectorAll('.ru'),
    $btnEn = document.querySelector('.btn-en'),
    $btnRu = document.querySelector('.btn-ru');

    $btnEn.addEventListener('click', () => {
        $ru.forEach((el) => {
            console.log('object');
            el.style.display = 'none';
        });
    });

    $btnRu.addEventListener('click', () => {
        $en.forEach((el) => {
            el.style.display = 'none';
        });
        $ru.forEach((el) => {
            el.style.display = 'block';
        });
    });
