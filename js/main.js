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
