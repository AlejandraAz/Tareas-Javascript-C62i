/*Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

    do {
        let edad = parseInt(prompt('ingrese su edad'));
        if(edad >= 18){
            alert('Ya puedes conducir 💪👏😉')
        }else{
            if(edad <18){
                alert('Aún no tienes edad para conducir 😞')
            }
            if(isNaN(edad)){
                alert('Dato ingresado incorrecto,sólo debes ingresar números😓')
            }
        }
    } while (edad);

