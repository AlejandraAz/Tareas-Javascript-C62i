/*Cuenta bancaria - Dificultad:  🟢🟡
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

class Cuenta{
    constructor(titular='Alex',saldo=0){
        this.titular = titular;
        this.saldo = saldo;
    }
    ingresarDinero(valor){
        if(valor > 0){
            this.saldo += valor;
        }else{
            console.error('Monto ingresado inválido')
        }
        this.informar();
    }
    extraerDinero(valor){
        if(valor > this.saldo || valor < 0){
            console.warn(`Su saldo es insuficiente ó ingresaste un valor inválido`)
        }else{
            this.saldo-=valor;
        }
        this.informar();
    }
    informar(){
        console.log('------ESTADO DE LA CUENTA------');
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo disponible: ${this.saldo}`);
    }
}

let cuenta1 = new Cuenta ();
let cuenta2 = new Cuenta ('Tino',2000);