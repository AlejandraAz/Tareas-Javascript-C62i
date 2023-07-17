/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/




const analizarCadena = function (cadena = prompt('Ingrese una cadena de texto:')) {
    if(!isNaN(cadena)){
        return 'Ingresaste un numero,debes ingresar frases,palabras,oraciones.'
    }else{
        if (cadena === cadena.toUpperCase()) {
            return "La cadena está formada solo por mayúsculas."
        } else if (cadena === cadena.toLowerCase()) {
            return "La cadena está formada solo por minúsculas."
        } else {
            return "La cadena es una mezcla de mayúsculas y minúsculas."
        }
    }
    }
    
