/*icono menu*/
const navMenu = document.querySelector('.navbar__menu');
console.log(navMenu);
/*enlaces*/
const navItem = document.querySelector('.navbar__item');

/* evento click en menu hamburguesa*/
navMenu.addEventListener('click', function(){
    navItem.classList.toggle('navbar__item--on');
})