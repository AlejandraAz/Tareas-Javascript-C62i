/* Cambiar el estilo de un elemento con el mouse:(usar mouseover)
- Crea un párrafo en tu HTML con un ID único.
- Al pasar el mouse sobre el párrafo, cambia el color de fondo y el color del
texto del párrafo. */
let parrafo = document.querySelector('#parrafo');
let bodyU = document.querySelector('body')

parrafo.addEventListener('mouseover',()=>{
    parrafo.style.color = 'white';
    bodyU.style.backgroundColor ='black';
});

parrafo.addEventListener('mouseout',()=>{
    parrafo.style.color ='black';
    bodyU.style.backgroundColor ='white';
})