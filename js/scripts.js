//--- Código para pintar el año en el footer
// crear un objeto Date para obtener la fecha actual
var fechaActual = new Date();

// obtener el año actual con el método getFullYear()
var anioActual = fechaActual.getFullYear();

//Función para imprimir el año en el elemento con el ID "anio"
function muestraAnioActual() {
    //Muestra
    document.getElementById("anio").innerHTML =anioActual;
}
//ejecuta la función para mostrar el año
muestraAnioActual();

//--- Código del slider

// Seleccionar el elemento con la clase "slider"
const slider = document.querySelector(".slider");

// Seleccionar el botón "anterior"
const prev = document.querySelector(".prev");

// Seleccionar el botón "siguiente"
const next = document.querySelector(".next");

// Seleccionar el carrusel (contenedor de los slides)
const carousel = document.querySelector(".carousel");

// Inicializar la variable de dirección
let direction;

// Agregar un event listener al botón "anterior"
prev.addEventListener("click", function() {
// Si la dirección es -1 (es decir, hacia la izquierda)
if(direction === -1) {
// Mover el primer slide al final del carrusel
slider.appendChild(slider.firstElementChild);
// Cambiar la dirección a 1 (hacia la derecha)
direction = 1;
}

// Alinear los slides a la derecha del carrusel
carousel.style.justifyContent = "flex-end";
// Mover los slides hacia la izquierda (25% del ancho del slide)
slider.style.transform = "translateX(25%)";
})

// Agregar un event listener al botón "siguiente"
next.addEventListener("click", function() {
// Cambiar la dirección a -1 (hacia la izquierda)
direction = -1;

// Alinear los slides a la izquierda del carrusel
carousel.style.justifyContent = "flex-start";
// Mover los slides hacia la derecha (25% del ancho del slide)
slider.style.transform = "translateX(-25%)";
})

// Agregar un event listener para detectar cuando termina la transición
slider.addEventListener("transitionend", _ => {
// Si la dirección es -1 (es decir, hacia la izquierda)
if(direction === -1) {
// Mover el último slide al principio del carrusel
slider.appendChild(slider.firstElementChild);
}
// Si la dirección es 1 (es decir, hacia la derecha)
else if (direction === 1) {
// Mover el primer slide al final del carrusel
slider.prepend(slider.lastElementChild);
}

// Deshabilitar la transición temporalmente
slider.style.transition = "none";
// Restablecer la posición de los slides a su lugar original
slider.style.transform = "translate(0)";
// Habilitar la transición después de un breve tiempo
setTimeout(_ => {
slider.style.transition = "all 0.5s";
})
})