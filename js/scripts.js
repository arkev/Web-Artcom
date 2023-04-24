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
// Variables del primer slider
const slider = document.querySelector("#slider .slider");
const prev = document.querySelector("#slider .prev");
const next = document.querySelector("#slider .next");
const carousel = document.querySelector("#slider .carousel");

// Variables del segundo slider
const sliderE = document.querySelector("#sliderE .slider");
const prevE = document.querySelector("#sliderE .prev");
const nextE = document.querySelector("#sliderE .next");
const carouselE = document.querySelector("#sliderE .carousel");

// Inicializar la variable de dirección
let direction;

// botón "anterior" del primer slider
prev.addEventListener("click", function() {
if(direction === -1) {
slider.appendChild(slider.firstElementChild);
direction = 1;
}
carousel.style.justifyContent = "flex-end";
slider.style.transform = "translateX(25%)";
})

// botón "anterior" del segundo slider
prevE.addEventListener("click", function() {
    if(direction === -1) {
    sliderE.appendChild(sliderE.firstElementChild);
    direction = 1;
    }
    carouselE.style.justifyContent = "flex-end";
    sliderE.style.transform = "translateX(25%)";
    })

// botón "siguiente" del primer slider
next.addEventListener("click", function() {
direction = -1;
carousel.style.justifyContent = "flex-start";
slider.style.transform = "translateX(-25%)";
})

// botón "siguiente" del segundo slider
nextE.addEventListener("click", function() {
    direction = -1;
    carouselE.style.justifyContent = "flex-start";
    sliderE.style.transform = "translateX(-25%)";
})

//listener para detectar cuando termina la transición del primer slider
slider.addEventListener("transitionend", _ => {
if(direction === -1) {
slider.appendChild(slider.firstElementChild);
}
else if (direction === 1) {
slider.prepend(slider.lastElementChild);
}
slider.style.transition = "none";
slider.style.transform = "translate(0)";
setTimeout(_ => {
slider.style.transition = "all 0.5s";
})
})

//listener para detectar cuando termina la transición del SEGUNDO slider
sliderE.addEventListener("transitionend", _ => {
    if(direction === -1) {
    sliderE.appendChild(sliderE.firstElementChild);
    }
    else if (direction === 1) {
    sliderE.prepend(sliderE.lastElementChild);
    }
    sliderE.style.transition = "none";
    sliderE.style.transform = "translate(0)";
    setTimeout(_ => {
    sliderE.style.transition = "all 0.5s";
    })
    })