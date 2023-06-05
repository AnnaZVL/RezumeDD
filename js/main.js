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

// перевод на русский/английский
const $en = document.querySelectorAll('.en'),
    $ru = document.querySelectorAll('.ru'),
    $btnEn = document.querySelectorAll('.btn-en'),
    $btnRu = document.querySelectorAll('.btn-ru');

    $btnEn.forEach((el) => {
        el.addEventListener('click', () => {
            console.log('en');
            $ru.forEach((el) => {            
                el.style.display = 'none';
            });
            $en.forEach((el) => {
                el.style.display = 'block';
            });
        });
    });

    $btnRu.forEach((el) => {
        el.addEventListener('click', () => {
            console.log('ru');
            $en.forEach((el) => {
                el.style.display = 'none';
            });
            $ru.forEach((el) => {
                el.style.display = 'block';
            });
        });
    });
