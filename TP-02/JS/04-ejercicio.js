/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/


let inicio = 1;
let suma = 0;

while(inicio <= 3){
    let numeroUsuario = parseInt(prompt('Ingrese un numero entero 🤓:'));
    if(!isNaN(numeroUsuario)){
        suma+=numeroUsuario;
    }
    else if(isNaN(numeroUsuario)){
        alert('Dato ingresado incorrecto,debes ingresar sólo números 😓')
    }
    inicio++;
}
alert(`El resultado total de la suma es : ${suma} ✨`);