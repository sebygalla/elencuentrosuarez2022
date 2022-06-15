/*loader*/

window.onload = function () {
    var loader = document.querySelector('.loader__contenedor');
    loader.style.display = 'none';


}





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



/*evento ocultar navbar al hacer scroll*/
let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function () {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual) {
        document.querySelector('.navbar').style.top = '0';
    } else {
        document.querySelector('.navbar').style.top = '-100px';
    }
    ubicacionPrincipal = desplazamientoActual;
}

//Scroll Efect
// navbar = document.querySelector('.navbar');
// navbarLogo = document.querySelector('.navbar__logo');

// const btn_scrolltop = document.getElementById('btn_scrolltop')
// btn_scrolltop.addEventListener('click', function () {
//     window.scrollTo(0, 0)
// })

// window.onscroll = function abajo() {

//     add_btn_scrolltop()

// };

// const add_btn_scrolltop = function () {
//     if (window.scrollY < 300) {
//         btn_scrolltop.classList.remove('btn__scrolltop--on')
//     } else {
//         btn_scrolltop.classList.add('btn__scrolltop--on')
//     }
// };




/*formulario*/
const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Enviado exitosamente!')
    }
}

/* Modal */
const btnModal = document.querySelector('.iglesia__boton');
const modal = document.querySelector('.modal');
const close = document.querySelector('.modal__cerrar');




btnModal.addEventListener('click', function () {
    modal.classList.add('modal--on');
});

close.addEventListener('click', function () {
    modal.classList.remove('modal--on');
});