/*icono menu*/
const btnMenu = document.querySelector('.navbar__menu');

/*enlaces*/
const navItem = document.querySelector('.navbar__item');

/* evento click en menu hamburguesa*/
btnMenu.addEventListener('click', function(){
    navItem.classList.toggle('navbar__item--on');
})