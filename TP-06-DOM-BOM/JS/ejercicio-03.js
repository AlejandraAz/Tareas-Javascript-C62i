/* Cambiar el estilo de un elemento con el mouse:(usar mouseover)
- Crea un párrafo en tu HTML con un ID único.
- Al pasar el mouse sobre el párrafo, cambia el color de fondo y el color del
texto del párrafo. */
let parrafo = document.querySelector('#parrafo');
let bodyU = document.querySelector('body')

parrafo.addEventListener('mouseover',()=>{
    
    parrafo.classList = 'text-light';
    parrafo.style.transition="ease-in 0.5s";
    bodyU.style.transition="ease-in 1s";
    bodyU.classList ='bg-dark';
});

parrafo.addEventListener('mouseout',()=>{
    parrafo.classList ='text-dark';
    parrafo.style.transition="ease-in 0.5s";
    bodyU.style.transition="ease-in 1s";
    bodyU.classList ='bg-light';
})