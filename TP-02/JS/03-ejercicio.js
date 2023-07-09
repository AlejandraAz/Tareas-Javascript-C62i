/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let frasesCompiladas="";
let fraseIngresada;


do {
    let fraseIngresada = prompt('Ingrese una frase popular');

    if(frasesCompiladas == ""){
        frasesCompiladas+=fraseIngresada;
    }else{
        frasesCompiladas = frasesCompiladas +"-"+fraseIngresada
    }

} while (confirm('Continuar agregando frases??🤔'))
alert(frasesCompiladas)

