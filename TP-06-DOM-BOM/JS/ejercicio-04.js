/*Reloj digital:
- Crea un párrafo en tu HTML con un ID único.
- Utilizando JavaScript, actualiza el contenido del párrafo para mostrar la
hora actualizada cada segundo. */


let reloj = document.getElementById("reloj");
let relojCompleto = "";

const mostrarReloj = ()=>{
    let fecha = new Date()
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    
    if(minutos < 10){
        minutos = "0"+ minutos;
    }
    if(segundos < 10){
        segundos = "0" + segundos
    }

    let sufijo = "a.m";
    if(hora > 12){
        hora = hora - 12;
        sufijo = "p.m";
    }

    let relojCompleto = `0${hora}:${minutos}:${segundos} ${sufijo}`
    reloj.innerHTML = relojCompleto
}

setInterval(() => {
    mostrarReloj();
}, 1000)