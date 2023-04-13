// crear un objeto Date para obtener la fecha actual
var fechaActual = new Date();

// obtener el año actual con el método getFullYear()
var anioActual = fechaActual.getFullYear();

function muestraAnioActual() {
    //Muestra
    document.getElementById("anio").innerHTML =anioActual;
}
alert("Si funciona!");