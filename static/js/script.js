/* NAVEGACION ACTIVA */
const secciones = document.querySelectorAll("main section[id]");
const enlacesMenu = document.querySelectorAll(".menu a");

function actualizarMenu() {

    let seccionActual = "";

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect();

        if (posicion.top <= 180 && posicion.bottom > 180) {
            seccionActual = seccion.id;
        }

    });

    enlacesMenu.forEach(enlace => {

        enlace.classList.remove("activo");

        if (enlace.getAttribute("href") === `#${seccionActual}`) {
            enlace.classList.add("activo");
        }

    });

}

window.addEventListener("scroll", actualizarMenu);
window.addEventListener("load", actualizarMenu);
window.addEventListener("resize", actualizarMenu);

/* NAVEGACION POR ENLACES */

enlacesMenu.forEach(enlace => {

    enlace.addEventListener("click", () => {

        enlacesMenu.forEach(item => {
            item.classList.remove("activo");
        });

        enlace.classList.add("activo");

    });

});
