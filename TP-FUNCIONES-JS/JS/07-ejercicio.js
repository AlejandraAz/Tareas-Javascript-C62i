/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/



function tablaDeMultiplicar (
    multiplicador = parseInt(prompt('Ingrese el multiplicador de la tabla deseada')),
    multiplicando = parseInt(prompt('Ingrese el multiplicando:'))){
if(isNaN(multiplicador)){
    document.write('Ingrese solamente números <hr>')
}else{
    document.write(`<hr> Tabla del: ${multiplicador}<br> <hr>`)
    for (let i = 1; i <= multiplicando; i++) {
        document.write(` ${multiplicador} * ${i} = ${multiplicador * i} <br> <br>`)
    }
}
}









// *****************************************************************************************************
// Función flecha:

/*const tablaDeMultiplicar2 = (
    multiplicador = parseInt(prompt('Ingrese el multiplicador de la tabla deseada:')),
    multiplicando = parseInt(prompt('Ingrese el multiplicando:'))) => {
    if(isNaN(multiplicador)){
        document.write('Ingrese solamente números <hr>')
    }else{
        document.write(`<hr> Tabla del: ${multiplicador}<br> <hr>`)
        for (let i = 1; i <= multiplicando; i++) {
            document.write(` ${multiplicador} * ${i} = ${multiplicador * i} <br> <br>`)
        }
    }
    }*/
