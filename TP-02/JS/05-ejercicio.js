/*Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo: 
Input:  40773821 
Output: ‘L’*/


do {
    let dni = parseInt(prompt('Ingrese su número de DNI'));
if(isNaN(dni)){
    alert('Upps!dato ingresado incorrecto,recuerda que debes ingresar sólo números😉..')
}else{
    if(dni > 0 && dni <= 99999999){
        let resto = dni % 23;
        switch (resto) {
            case 1:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "T"`)
                break;
                case 2:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "R"`)
                break;
                case 3:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "W"`)
                break;
                case 4:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "A"`)
                break;
                case 5:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "G"`)
                break;
                case 6:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "M"`)
                break;
                case 7:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "Y"`)
                break;
                case 8:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "F"`)
                break;
                case 9:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "P"`)
                break;
                case 10:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "D"`)
                break;
                case 11:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "X"`)
                break;
                case 12:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "B"`)
                break;
                case 13:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "N"`)
                break;
                case 14:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "J"`)
                break;
                case 15:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "Z"`)
                break;
                case 16:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "S"`)
                break;
                case 17:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "Q"`)
                break;
                case 18:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "V"`)
                break;
                case 19:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "H"`)
                break;
                case 20:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "L"`)
                break;
                case 21:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "C"`)
                break;
                case 22:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "K"`)
                break;
                case 23:
                alert(`DNI ingresado : ${dni} | LETRA correspondiente : "E"`)
                break;
        }
    }
}
}while (confirm('Continuar consultando??🤔'))