/*Práctica de LocalStorage
Almacenar y recuperar un valor en localStorage Crea una página HTML con dos botones: "Guardar Valor" y "Recuperar Valor". Cuando se hace clic en "Guardar Valor", solicita al usuario que ingrese un valor y guárdalo en localStorage. Cuando se hace clic en "Recuperar Valor", muestra el valor almacenado en un elemento en la página. */
let parrafito = document.querySelector("#parrafo")
let contenedor = document.querySelector('#elContenedor');
let usuarios = JSON.parse(localStorage.getItem("usuario")) || [];



const guardar_Valor =()=>{
let usuario = prompt("Ingrese su nombre: ");
usuarios.push(usuario)
localStorage.setItem("usuario",JSON.stringify(usuarios));
}

const recuperar_Valor = ()=>{
    if(usuarios){
        alert(`Valores recuperados: ${usuarios}`);
        console.log(usuarios)
    }
}
