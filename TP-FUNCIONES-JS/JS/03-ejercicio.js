/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58*/

let lado_1 =Number(prompt('Ingrese el valor de un lado del rectángulo:'));
let lado_2 =Number(prompt('Ingrese el valor de un lado del rectángulo:'));

const calcularPerimetroRect = function(lado1,lado2){
    if(isNaN(lado1,lado2)){
        document.write('Sólo debes ingresar  números.')
    }else {
        let perimetro = (lado1 + lado2) * 2;
        document.write(`El perímetro es: ${perimetro}.`);
        return perimetro;
    }
    
}

calcularPerimetroRect(lado_1,lado_2);
