/* Cambiar el estilo de un elemento con el mouse:(usar mouseover)
- Crea un párrafo en tu HTML con un ID único.
- Al pasar el mouse sobre el párrafo, cambia el color de fondo y el color del
texto del párrafo. */
let parrafo = document.querySelector('#parrafo');
let bodyU = document.querySelector('body')

parrafo.addEventListener('mouseover',()=>{
    parrafo.classList = 'text-light transition: transform 2s ease';
    bodyU.classList ='bg-dark transition: transform 2s ease';
});

parrafo.addEventListener('mouseout',()=>{
    parrafo.classList ='text-dark transition: transform 2s ease';
    bodyU.classList ='bg-light transition: transform 2s ease';
})