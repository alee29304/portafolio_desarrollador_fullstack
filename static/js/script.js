
const secciones = document.querySelectorAll(
    "#inicio, #sobre-mi, #habilidades, #proyectos, #contacto"
);

const enlaces = document.querySelectorAll(".menu a");

function actualizarMenu() {
    let actual = "";

    secciones.forEach(seccion => {
        const posicion = seccion.getBoundingClientRect().top;

        if (posicion <= 150) {
            actual = seccion.id;
        }
    });

    const llegoAlFinal =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

    if (llegoAlFinal) {
        actual = "contacto";
    }

    enlaces.forEach(enlace => {
        enlace.classList.remove("activo");

        if (enlace.getAttribute("href") === `#${actual}`) {
            enlace.classList.add("activo");
        }
    });
}

window.addEventListener("scroll", actualizarMenu);
window.addEventListener("load", actualizarMenu);
window.addEventListener("resize", actualizarMenu);

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        enlaces.forEach(item => item.classList.remove("activo"));
        enlace.classList.add("activo");
    });
});
