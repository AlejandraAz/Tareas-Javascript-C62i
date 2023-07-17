/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/



const elnro = function(num = Number(prompt('Ingrese un número entero:'))){
    if (isNaN(num)){
        return"Valor ingresado incorrecto 😖."
    }
    if(num % 2 === 0){
        return`El número: ${num} es par.`
    }
    else{
        return`El número: ${num} es impar.`
    }   
    }

