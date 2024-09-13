import { barcelona, roma, paris, londres } from './ciudades.js' // importamos del fichero ciudades

// DOM >> DOCUMENT OBJECT MODEL: Representación esctructurada de un documento HTML. Se organiza como un arbol de nodos y cada
// nodo es un elemento. este elemento es un objeta de JS que tiene sus propiedades y sus métodos con los que vamos hacer que la
// aplicación o web se vea mucho más dinámica.
// Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a') // Como no tiene id, seleccionamos de este modo todos los elementos que tiene <a>
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// Agregar un evento click a cada enlace
// Hacemos un forEach para que recorra cada uno de los 4 nodos de la variable enlaces
enlaces.forEach(function (enlace) { // cada enlace es una de las ciudades. va iterando
    enlace.addEventListener('click', function () { // como no hemos puesto onclick en HTML, lo hacemos desde JS de este modo.
        // Remover la clase 'active' de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active') // de los 4 enlace se remueven para que no estén activos
        });

        //agregar la clase 'active' al enlace actual
        this.classList.add('active') //this se refiere al click, al que seleccionamos. Estamos agregando active al enlace actual. y al pinchar aparece en verde por los css

        // Obtener el contenido correspondiente según el enlace
        let contenido = ObtenerContenido(this.textContent) // el this se refiere a lo que le hicimos click(1 de los 4) y textContent
        // sale del nodo (si pinchas una de las ciudades en la web aparece el textContent)

        // Mostrar el contenido en el DOM (escribir en el HTML)

        tituloElemento.innerHTML = contenido.titulo // titulo, subtitulo y parrafo del html
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })


})


//FUNCIÓN PARA TRAER LA INFORMACIÓN CORRECTA DESDE CIUDADES.JS
function ObtenerContenido(enlace) {  // Obtener contenido del enlace. ese enlace va a tener puntualmente algunos de los 4 String del HTML
    let contenido = {               // si el enlace es Barcelona lo que se hace es seleccionar el objeto barcelona importado
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace] // Del contenido que son 4, se va a mostrar el del enlace
}