/*Cambiar el color de fondo de un elemento:
- Crea un botón en tu HTML con un ID único.
- Al hacer clic en el botón, cambia el color de fondo de un elemento (por
ejemplo, un párrafo) a un color aleatorio. */


const cambioColor=()=>{
    let colores = ['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9];
    let numeral = '#';
    for (let i = 0; i < 6; i++) {
        numeral+=colores[Math.ceil(Math.random()*15)]
    }
    parrafo.style.color = numeral;
}



