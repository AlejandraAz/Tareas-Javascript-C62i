/*Contador de clics:
- Crea un botón en tu HTML con un ID único y un párrafo para mostrar el
número de clics.
- Al hacer clic en el botón, incrementa el contador y muestra el número de
clics en el párrafo. */


let parrafo = document.getElementById('parrafo');


let incrementador = 0;
const contador = ()=>{
        incrementador++
        parrafo.innerText = `Cantidad de clicks: ${incrementador}`;
}
