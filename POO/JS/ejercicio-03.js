/*Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
    calcularAreaYPerimetro(){
        if(!isNaN(this.alto) && !isNaN(this.ancho)){
            console.log(`El perímetro del rectángulo es: `,(this.alto+this.ancho)*2);
            console.log(`El área del rectángulo es: `,this.ancho*this.alto);
        }else{
            console.error('No ingresaste números.');
        }
    }
    cambiarAltura(modAlto){
        this.alto = modAlto;
        this.mostrarRectangulo();
    }
    cambiarAncho(modAncho){
        this.ancho = modAncho
        this.mostrarRectangulo();
    }
    mostrarRectangulo(){
        console.log(`-----Medidas del Rectángulo-----`);
        console.log(`Alto: ${this.alto}`);
        console.log(`Ancho: ${this.ancho}`);
        this.calcularAreaYPerimetro();
    }
}

let rectangulo1 = new Rectangulo(35,90);
let rectangulo2 = new Rectangulo(150,300);


