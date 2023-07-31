/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:(ver tabla)
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */
class Persona{
    constructor(nombre,apellido,edad,anioNac,DNI,peso,altura,sexo='H (Hombre) | M (Mujer)'){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.anioNac = anioNac;
        this.DNI = DNI;
        this.peso = peso;
        this.altura = altura;
        this.sexo = sexo;
    }
    mostrarGeneracion(){
        switch (true) {
            case (this.anioNac >= 1930 && this.anioNac <=1948):
                alert(`Perteneces a la silent-generation, tu rasgo es: la Austeridad 😐`)
                break;
            case(this.anioNac >= 1949 && this.anioNac<=1968):
                alert(`Perteneces a baby-boom, tu rasgo es: la Ambición 🤑`)
                break;
            case(this.anioNac >= 1969 && this.anioNac <=1980):
                alert(`Perteneces a generacion X, tu rasgo es: la obsesión por el éxito 😎`)
                break;
            case(this.anioNac >= 1981 && this.anioNac <=1993):
                alert(`Perteneces a generacion Y, tu rasgo es: la frustración 😖`)
                break;
            case(this.anioNac >= 1994 && this.anioNac <=2010):
                alert(`Perteneces a generacion Z, tu rasgo es: la Irreverencia 😋`)
                break;
            default:
                alert(`Perteneces a la generación Alfa,tu rasgo es: el manejo de la tecnología 😁`)
                break;
            }
    }
    mayorDeEdad(){
        if(this.edad >= 18){
            console.log(`Eres mayor.`)
        }else{
            console.log(`Eres menor de edad.`)
        }
    }
    mostrarDatos(){
        document.write(`<strong>------Tarjeta de presentación------</strong><br><br>`)
        document.write(`Nombre: ${this.nombre}<br>Apellido: ${this.apellido}<br>Edad: ${this.edad}<br>Año de nacimiento: ${this.anioNac}<br>DNI: ${this.DNI}<br>Peso: ${this.peso}<br>Altura: ${this.altura}<br>Sexo: ${this.sexo}<hr>`);
    }
    generaDNI(){
            document.write('----Número Aleatorio----<br><br>')
            document.write('DNI:',Math.ceil(Math.random() * 99999999),'<br><hr>');
    }    
    }

let persona1 = new Persona('Ana Maria','Díaz',50,1992,23824744,'50 kg','1.50 mtrs','M');
let persona2 = new Persona('Juan','Perez',25,2008,45357241,'70kg','1.85 mts','H')