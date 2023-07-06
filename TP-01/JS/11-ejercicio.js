/* Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 
input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7. */
let numero = parseInt(prompt("Ingrese un número entero :"));

if(isNaN(numero)){
    alert("Uups!😞te equivocaste,debes ingresar un número entero..");
}
else if(numero % 2 !== 0 && numero % 3 !== 0 && numero % 5 !== 0  && numero % 7 !== 0){
    alert(`El ${numero} NO es divisible por 2, 3, 5 y 7 `);
}
else if(numero % 2 === 0 && numero % 5 === 0 && numero % 3 === 0 && numero % 7 === 0){
        alert(`${numero} es divisible por 2, 3, 5 y 7.`);
    }else{
    if(numero % 3 === 0 && numero % 7 === 0){
        alert(`${numero} es divisible por 3 y por 7.`);
    }
    if(numero % 5 === 0 && numero % 7 === 0){
        alert(`${numero} es divisible por 5 y 7`)
    }
    if(numero % 5 === 0 && numero % 2 === 0){
        alert(`${numero} es divisible por 2 y por 5.`);
    }
}
