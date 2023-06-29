/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande*/
let num1 = parseInt(prompt("Ingrese el primer número : "));
let num2 = parseInt(prompt("Ingrese el segundo número : "));
let num3 = parseInt(prompt("Ingrese el tercer número : "));

if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    console.error("Usted no ha ingresado un número.")
}
if(num1 > num2 && num1 > num3){
    console.log(`El nro : ${num1}, es el mayor de los números ingresados.`);
}
if(num2 > num1 && num2 >num3){
    console.log(`El nro : ${num2}, es el mayor de los números ingresados.`);
}
if(num3 > num1 && num3 >num2){
    console.log(`El nro : ${num3}, es el mayor de los números ingresados.`);
}