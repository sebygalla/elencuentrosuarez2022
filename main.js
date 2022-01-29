/*icono menu*/
const btnMenu = document.querySelector('.navbar__menu');

/*enlaces*/
const navItem = document.querySelector('.navbar__item');

/*Links*/
const menuLinks = document.querySelectorAll('.navbar__link');

/* evento click en menu hamburguesa*/
btnMenu.addEventListener('click', function () {
    navItem.classList.toggle('navbar__item--on');

});

/*evento click en cerrar al tocar cualquier parte la pantalla*/
navItem.addEventListener('click', function () {
    navItem.classList.remove('navbar__item--on');
});








//Scroll Efect

navbar = document.querySelector('.navbar');
navbarLogo = document.querySelector('.navbar__logo');




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

