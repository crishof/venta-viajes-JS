import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

// Agregar un evento CLICK a cada enlace

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //Remover Activo

    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //Agregar active  al enlace actual
    this.classList.add("active");

    // Obtener el contenido correspondiente según el enlace

    let contenido = obtenerContenido(this.textContent);

    // Mostrar el contenido en el DOM

    tituloElemento.innerHTML = contenido.titulo;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

// Funcion para traer la info correcta desde ciudades.js

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londes: londres,
  };
  return contenido[enlace];
}
