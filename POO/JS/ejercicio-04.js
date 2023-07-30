/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto{
    constructor(nombre,codigo,precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.precio = precio;
    }
    imprimirDatos(){
        document.write(`<ul><u>Producto</u><li>Nombre: ${this.nombre}</li><li>Código: ${this.codigo}</li><li>Precio: ${this.precio}</li></ul><hr>`);
    }
}

let prod1 = new Producto('celular Samsung Galaxy ZFold4',77896352441,'$342.000');
let prod2 = new Producto('Tv Smart Noblex 32"',996325874,'$70.000');
let prod3 = new Producto('pava eléctrica Philips',569872314,'$27.499');

let productos = [prod1,prod2,prod3];
productos.forEach(producto => {
    return producto.imprimirDatos()
});


