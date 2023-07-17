/*Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 
input: Coder 
Output: Hola Coder*/

let nombreUsuario = prompt("Ingrese su nombre y apellido.").toUpperCase();
document.write(`Hola! ${nombreUsuario} 😉,cómo estás??`);

