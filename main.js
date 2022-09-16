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



/* Scrolltop */
const irArriba = document.querySelector('.btn__scrolltop');
irArriba.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        irArriba.classList.add('btn__scrolltop--on');
    } else {
        irArriba.classList.remove('btn__scrolltop--on');
    }
});



/*evento ocultar navbar al hacer scroll*/
// let ubicacionPrincipal = window.pageYOffset;

// window.onscroll = function () {
//     let desplazamientoActual = window.pageYOffset;
//     if (ubicacionPrincipal >= desplazamientoActual) {
//         document.querySelector('.navbar').style.top = '0';
//     } else {
//         document.querySelector('.navbar').style.top = '-100px';
//     }
//     ubicacionPrincipal = desplazamientoActual;

    /*paralax banner*/
    // var posicion = window.pageYOffset || documentElement.scrollTop;
    // var elementoTitulo = document.getElementById("bannerTitulo");
    // elementoTitulo.style.bottom = ubicacionPrincipal * .2 + "px";

// }




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

const iglesiaContenedor = document.querySelector('.iglesia__contenedor');
const iglesiaModal = document.getElementById('iglesiaModal')

// variables de parrafos y titulos
const modalTitulo = document.querySelector('.iglesia__modal__titulo');
const modalParrafo = document.querySelector('.iglesia__modal__parrafo');




iglesiaContenedor.addEventListener('click', (e) => {
    const btnClick = e.target.classList[1];

    //Creamos la funcion abrir y cerrar modal
    function abrirCerrarModal() {

        iglesiaModal.classList.add('iglesia__modal--active');
        const btnCerrar = document.querySelector('.iglesia__btn__cerrar');

        btnCerrar.addEventListener('click', () => {
            iglesiaModal.classList.remove('iglesia__modal--active');
        });

    }

    //Condicional para agregar el texto correspondiente a la Card
    if (btnClick == 'iglesia__ninios') {

        // funcion abrir y cerrar modal
        abrirCerrarModal();
        // reemplazamos el titulo
        modalTitulo.innerHTML = 'Niños! 👦👧';
        // reemplazamos el parrafo
        modalParrafo.innerHTML = `Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo.
        Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que
        sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el
        potencial
        que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad.
        Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás.
        Horario de reunion:
        Todos los sábados a las 20hs.`

    } else if (btnClick == 'iglesia__preadolescentes') {

        // funcion abrir y cerrar modal
        abrirCerrarModal();
        // reemplazamos el titulo
        modalTitulo.innerHTML = 'Preadolescentes! 🧒​🤳​​';
        // reemplazamos el parrafo
        modalParrafo.innerHTML = `Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo.
        Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que
        sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el
        potencial
        que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad.
        Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás.
        Horario de reunion:
        Todos los sábados a las 20hs.`

    } else if (btnClick == 'iglesia__jovenes') {

         // funcion abrir y cerrar modal
         abrirCerrarModal();
         // reemplazamos el titulo
         modalTitulo.innerHTML = 'Jovenes! 🧑​👩​';
         // reemplazamos el parrafo
         modalParrafo.innerHTML = `Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo.
         Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que
         sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el
         potencial
         que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad.
         Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás.
         Horario de reunion:
         Todos los sábados a las 20hs.`

    } else if(btnClick =='iglesia__matriJovenes'){

         // funcion abrir y cerrar modal
         abrirCerrarModal();
         // reemplazamos el titulo
         modalTitulo.innerHTML = 'Matrimonios Jovenes! 👩‍❤️‍👨';
         // reemplazamos el parrafo
         modalParrafo.innerHTML = `Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo.
         Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que
         sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el
         potencial
         que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad.
         Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás.
         Horario de reunion:
         Todos los sábados a las 20hs.`

    } else if(btnClick =='iglesia__matriAdultos'){

        // funcion abrir y cerrar modal
         abrirCerrarModal();
         // reemplazamos el titulo
         modalTitulo.innerHTML = 'Matrimonios Adultos! ​👫​';
         // reemplazamos el parrafo
         modalParrafo.innerHTML = `Un espacio donde cientos de chicos y chicas descubren su propósito divino para nunca más soltarlo.
         Cada sábado nos juntamos para acercarnos al corazón de nuestro Creador; para disfrutar de amistades que
         sacan lo mejor de nosotros, para soñar, reír y llorar juntos. Anhelamos que cada joven descubra el
         potencial
         que Dios depósito en él, que sueñe en grande y que deje huella en nuestra sociedad.
         Somos jóvenes con propósito, que desarrollan su potencial, predican a Jesús y sirven a los demás.
         Horario de reunion:
         Todos los sábados a las 20hs.`
    }
});