/*Galería de imágenes:
- Crea una galería de imágenes en tu HTML con miniaturas de imágenes.
- Al hacer clic en una miniatura, muestra la imagen completa en un cuadro
modal.
- Permite al usuario navegar entre las imágenes utilizando botones "Anterior"
y "Siguiente" en el cuadro modal */
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
let contenedor = document.getElementById("contenedor-imgs");
let images = document.querySelectorAll('img');
let modalImg = document.querySelector('#img-modal');
let anterior = document.getElementById('anterior');
let siguiente = document.getElementById('siguiente');
let modal = document.querySelector('#myModal');
let inicioImg = 0;


const clickImg = (index)=>{
    modalImg.src = images[index].src;
    inicioImg = index;
    myModal.show(index)
}

images.forEach(function(image, index) {
    image.addEventListener('click', function() {
        modalImg.src = images[index].src;
        myModal.show()
    });
});

const anteriorImg = ()=>{
    inicioImg--;
    if (inicioImg < 0) {
        inicioImg = images.length - 1;
        }
        modalImg.src = images[inicioImg].src;
}

const siguienteImg = ()=>{
    inicioImg++;
    if (inicioImg >= images.length) {
        inicioImg = 0;
        }
        modalImg.src = images[inicioImg].src;
}

    

