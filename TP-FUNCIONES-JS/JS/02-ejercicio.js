/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudad=prompt('Ingrese el nombre de una ciudad: ');
ciudades = [];


for (let i = 0; i < ciudad.length; i++) {
    ciudades.push(ciudad)
    
    ciudad=prompt('Ingrese el nombre de una ciudad: ')
    console.log(ciudades)
    // Mostrando la longitud del arreglo
    console.log(`La cantidad de ciudades ingresadas son: ${ciudades.length}`)

    // mostrando la primera posicion:
console.log(`La primera posicion es:${ciudades[0]} `)
// Mostrando la tercera posicion:
console.log(`La tercera posicion es: ${ciudades[2]} `)
// Mostrando la ultima posicion:
console.log( `La ultima posicion es: ${ciudades.at(-1)}`)
}
// Escribe el elemento que ocupa segunda posicion:
document.write(`La segunda posicion es: ${ciudades[1]}`)
// Cambiar el elemento de la segunda posicion:
ciudades.splice(1,0,"Barcelona") 
// Aqui podemos ver que Barcelona ya forma parte de nuestro array
console.log(ciudades)
