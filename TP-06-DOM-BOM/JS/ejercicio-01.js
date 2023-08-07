/*Cambiar el color de fondo de un elemento:
- Crea un botón en tu HTML con un ID único.
- Al hacer clic en el botón, cambia el color de fondo de un elemento (por
ejemplo, un párrafo) a un color aleatorio. */

const cambioColor = ()=>{
    let colores = 'abcdef123456789';
    let numeral = '#';
    for (let i = 0; i < 6; i++) {
        numeral+=colores[Math.ceil(Math.random()*16)]
    }
    parrafo.style.color = numeral;
}


