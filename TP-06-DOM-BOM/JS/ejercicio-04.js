/*Reloj digital:
- Crea un párrafo en tu HTML con un ID único.
- Utilizando JavaScript, actualiza el contenido del párrafo para mostrar la
hora actualizada cada segundo. */

let intervalo = null;

const fechaActual = ()=>{
    intervalo = setInterval(()=>{
        let fecha = new Date();
        document.body.innerText = "";
        document.write(`<h3>${fecha}</h3>`);
        document.write(`<button onclick="detener()">Detener</button>`);
        document.write(`<button onclick="reset()">Resetear</button>`);
    },1000)
};

const detener = ()=>clearInterval(intervalo);

const reset = ()=>{
    window.location.reload();
};