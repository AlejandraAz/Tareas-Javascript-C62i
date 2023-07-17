/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:
input: Hola mundo
Output: oauo */


let frase = prompt("Ingrese una frase:"); 

let vocales = ""; 

if(!isNaN(frase)){
    console.error('Sólo debes ingresar palabras..')
}else{
    for (let i = 0; i < frase.length; i++) {
        let letra = frase.charAt(i).toLowerCase(); 
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            vocales += letra; 
        }
        }
        console.log("Vocales encontradas: " + vocales); 
}

// **********Practicando con funciones********************

const texto = (frase = prompt("Ingrese una frase:")) => {
    let vocales = ""; 

if(!isNaN(frase)){
    console.error('Sólo debes ingresar palabras..')
}else{
    for (let i = 0; i < frase.length; i++) {
        let letra = frase.charAt(i).toLowerCase(); 
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            vocales += letra; 
        }
        }
        console.log("Vocales encontradas: " + vocales); 
}
}