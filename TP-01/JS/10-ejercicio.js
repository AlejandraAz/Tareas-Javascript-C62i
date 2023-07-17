/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
input: 20
Output: El 20 es divisible por 2. */
let numero = parseInt(prompt('Ingrese un número entero : '));

if(isNaN(numero)){
    alert("Dato ingresado incorrecto 😒, debes ingresar un número entero..");
}
else if(numero % 2 !== 0 &&  numero % 3 !== 0 && numero % 5 !== 0  && numero % 7 !== 0 ){
    alert(`El nro : ${numero} NO es divisible por 2, 3, 5 ni 7`);
}
// Utilizo el === para que no solo se evalue el valor,sino el tipo de dato.
else if(numero % 2 === 0){
    alert(`El nro : ${numero} es divisible por 2.`);
}
else if(numero % 3 === 0){
    alert(`El nro : ${numero} es divisible por 3.`);
}
else if(numero % 5 === 0){
    alert(`El nro : ${numero} es divisible por 5.`);
}
else if(numero % 7 === 0){
    alert(`El nro : ${numero} es divisible por 7.`);
}

// ******Practicando funciones***************
function losNrosDivisibles (numero = parseInt(prompt('Ingrese un número entero : '))){
    if(isNaN(numero)){
        alert("Dato ingresado incorrecto 😒, debes ingresar un número entero..");
    }
    else if(numero % 2 !== 0 &&  numero % 3 !== 0 && numero % 5 !== 0  && numero % 7 !== 0 ){
        alert(`El nro : ${numero} NO es divisible por 2, 3, 5 ni 7`);
    }
    // Utilizo el === para que no solo se evalue el valor,sino el tipo de dato.
    else if(numero % 2 === 0){
        alert(`El nro : ${numero} es divisible por 2.`);
    }
    else if(numero % 3 === 0){
        alert(`El nro : ${numero} es divisible por 3.`);
    }
    else if(numero % 5 === 0){
        alert(`El nro : ${numero} es divisible por 5.`);
    }
    else if(numero % 7 === 0){
        alert(`El nro : ${numero} es divisible por 7.`);
    }
}