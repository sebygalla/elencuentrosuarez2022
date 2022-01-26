/*icono menu*/
const btnMenu = document.querySelector('.navbar__menu');

/*icono menu*/
const closeMenu = document.querySelector('.navbar__close');

/*enlaces*/
const navItem = document.querySelector('.navbar__item');

/*Links*/
const menuLinks = document.querySelectorAll('.navbar__link');

/* evento click en menu hamburguesa*/
btnMenu.addEventListener('click', function () {
    navItem.classList.add('navbar__item--on');
    btnMenu.style.display = 'none';
    closeMenu.style.display = 'block';

});

/*evento click en cerrar */
closeMenu.addEventListener('click', function () {
    navItem.classList.remove('navbar__item--on');
    closeMenu.style.display = 'none';
    btnMenu.style.display = 'block';

})

navItem.addEventListener('click', function () {
    navItem.classList.remove('navbar__item--on');
    closeMenu.style.display = 'none';
    btnMenu.style.display = 'block';
});








//Scroll Efect

const btn_scrolltop = document.getElementById('btn_scrolltop')
btn_scrolltop.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

window.onscroll = function () {
    add_btn_scrolltop()
};


const add_btn_scrolltop = function () {
    if (window.scrollY < 300) {
        btn_scrolltop.classList.remove('btn__scrolltop--on')
    } else {
        btn_scrolltop.classList.add('btn__scrolltop--on')
    }
};