/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/


// let numero = Number(prompt('Ingrese el nro de la tabla deseada'))

// function tablaDeMultiplicar (num){
// if(isNaN(num)){
//     document.write('Ingrese solamente números')
// }
// for (let i = 1; i <= 10; i++) {
//     // const element = array[i];
    
//     console.log(` ${numero} * ${i} = ${numero * i} `)
// }
// }
// tablaDeMultiplicar(numero);




do {
    let numero = Number(prompt('Ingrese un nro:'))

    const multiplicar = function(num){
        if(isNaN(num)){
                document.write('Ingrese solamente números <br> <hr>')
            }else{
                for (let i = 1; i <= 10; i++) {
                document.write(` ${numero} * ${i} = ${numero * i} <br> <hr>`)
                }
            }
    }
    multiplicar(numero);
} while (confirm('Desea continuar?? 🤓'))


