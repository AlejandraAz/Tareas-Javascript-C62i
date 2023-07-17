/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58*/



const calcularPerimetroRect = function(
    lado1 = Number(prompt('Ingrese el valor de un lado del rectángulo:')),
    lado2 =Number(prompt('Ingrese el valor del otro lado del rectángulo:'))){
    if(isNaN(lado1,lado2)){
        return'Sólo debes ingresar  números.'
    }else {
        let perimetro = (lado1 + lado2) * 2;
        return `El perímetro es: ${perimetro}`
    }
}



