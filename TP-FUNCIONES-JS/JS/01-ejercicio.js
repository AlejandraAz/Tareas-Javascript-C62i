/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

let nroIngresado = Number(prompt('Ingrese un número entero:'))

const elnro = function(num){
    if (isNaN(num)){
        document.write("Valor ingresado incorrecto 😖.")
    }
    else if(num % 2 === 0){
        document.write(`El número: ${num} es par.`)
    }
    else{
        document.write(`El número: ${num} es impar.`)
    }   
    }

elnro(nroIngresado);

