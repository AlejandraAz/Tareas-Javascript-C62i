/* Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido*/


do {
    let nota = parseInt(prompt('Ingrese su última calificación 🤓:'));
    switch (true) {
        case (nota === 0 || nota <= 2):
            alert('😞El rendimiento fue : Muy deficiente😓')
            break;
            case (nota <= 4):
            alert('El rendimiento fue : Insuficiente 🫥😖')
            break;
            case (nota <= 6):
            alert('😌El rendimiento fue : Suficiente 😌')
            break;
            case (nota === 7):
            alert('😊El rendimiento fue : Bien 😉')
            break;
            case (nota <= 9):
            alert('El rendimiento fue : Notable😉👏')
            break;
            case (nota === 10):
            alert('El rendimiento fue : Sobresaliente✨💪')
            break;
            case(nota > 10):
            alert('Introduce un nro válido,recuerda que sólo puedes ingresar números de 0 a 10 🫥....')
            break;
            default:
            alert('😖Dato ingresado incorrecto,sólo debes ingresar números😖')
            break;
    }
    
} while (confirm('Deseas intentar nuevamente??😏'));