/* Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt */
let numero1 = parseInt(prompt("Ingrese el primer número : "));
let numero2 = parseInt(prompt("Ingrese el segundo número : "));
document.write(numero1 + numero2);



// **********practicando funciones******************
const sumar = function(
    numero1 = parseInt(prompt("Ingrese el primer número : ")),
    numero2 = parseInt(prompt("Ingrese el segundo número : "))){
    document.write(`${numero1} + ` + ` ${numero2} =` + (numero1 + numero2))
}