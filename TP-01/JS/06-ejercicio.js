/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande */

let num1 = parseInt(prompt("Ingrese el primer número : "));
let num2 = parseInt(prompt("Ingrese el segundo número : "));
if(num1 > num2){
    console.log(`El nro : ${num1} es mayor a ${num2}`);
}else{
    if(num2 > num1){
        console.log(`El nro : ${num2} es mayor a : ${num1}`);
    }
    if(num1 == num2){
        console.warn("Ambos números son iguales😒..");
    }
    if(isNaN(num1) || isNaN(num2)){
        console.error("Lo ingresado no es un número.")
    }
}


// *******Practicando funciones***************
function compararNumeros(
    num1 = parseInt(prompt("Ingrese el primer número : ")),
    num2 = parseInt(prompt("Ingrese el segundo número : "))){
        if(num1 > num2){
            console.log(`El nro : ${num1} es mayor a ${num2}`);
        }else{
            if(num2 > num1){
                console.log(`El nro : ${num2} es mayor a : ${num1}`);
            }
            if(num1 == num2){
                console.warn("Ambos números son iguales😒..");
            }
            if(isNaN(num1) || isNaN(num2)){
                console.error("Lo ingresado no es un número.")
            }
        }
    }