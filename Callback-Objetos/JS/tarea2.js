/*Crear un arreglo de objetos que contenga información de productos (por lo menos 10). Los datos que debe almacenar cada objeto son:
Nombre
Detalle
Stock
Precio unitario
Marca
Crear una función que muestre en pantalla una lista de los productos con nombre, detalle y precio.
Crear una función de búsqueda donde le pasemos como parámetro un termino y busque productos cuyo nombre coincida en parte con el termino enviado como parámetro. */

let productos = [
    {nombre:"agua mineral",
    categoria: "bebidas",
    detalle:"agua mineral sin gas baja en sodio x 6lt",
    stock:20,
    precioUnitario:"$667",
    marca:"King"},

    {nombre:"yerba mate",
    categoria: "infusiones",
    detalle:"yerba mate suave",
    stock:100,
    precioUnitario:"$1350",
    marca:"PLAYADITO"},

    {nombre:"desinfectante",
    categoria: "limpieza",
    detalle:"desinfectante de ambientes en aerosol",
    stock:200,
    precioUnitario:"$539",
    marca:"lisoform"},

    {nombre:"arroz",
    categoria: "almacén",
    detalle:"arroz integral x 1kg",
    stock:800,
    precioUnitario:"$336",
    marca:"Molinos Ala"},

    {nombre:"Shampoo",
    categoria: "cuidado capilar",
    detalle:"shampoo para la restauración capilar  x 400ml",
    stock:1000,
    precioUnitario:"$1270",
    marca:"Pantene pro-v"},

    {nombre:"difusor",
    categoria: "limpieza",
    detalle:"difusor con varillas aroma citrus 125ml",
    stock:1000,
    precioUnitario:"$1385",
    marca:"Aromass"},


    {nombre:"Queso untable",
    categoria: "frescos",
    detalle:"queso untable x 290gr",
    stock:70,
    precioUnitario:"$867",
    marca:"Finlandia"},

    {nombre:"Té ensueños",
    categoria: "infusiones",
    detalle:"té de mezclas de hierbas: tilo,cedrón y manzanilla x 25 saquitos",
    stock:100,
    precioUnitario:"$300",
    marca:"Taragui"},

    {nombre:"alimento para perros",
    categoria: "mascotas",
    detalle:"alimento nature p/razas pequeñas x 8kg",
    stock:40,
    precioUnitario:"$11990",
    marca:"Nature-Brascorp"},

    {nombre:"mermelada",
    categoria: "almacen",
    detalle:"mermelada de ciruela x 390gr",
    stock:150,
    precioUnitario:"$712",
    marca:"BC-laCampagnola"},

    {nombre:"vino tinto",
    categoria: "bebidas",
    detalle:"vino tinto cabernet-malbec x 750ml",
    stock:20,
    precioUnitario:"$3960",
    marca:"Ruttini"},

];

const mostrarProductos=function(){
    productos.forEach((producto)=>{
            document.write(`<ul><li><b><i>Producto:</b> ${producto.nombre}</i><br></li> <li><b><i>Marca:</b> ${producto.marca}</i><br></li> <li><b><i>Detalle:</b> ${producto.detalle}</i><br></li> <li><b><i>Precio:</b> ${producto.precioUnitario}</i><br></li> </ul><hr>`)
    })
};

const buscador = function(termino){
        let coincidencias = productos.filter((producto)=>{
            return producto.nombre.toLowerCase().includes(termino.toLowerCase()) || producto.marca.toLowerCase().includes(termino.toLowerCase()) || producto.categoria.toLowerCase().includes(termino.toLowerCase())
        }) 
        console.log(coincidencias)
};



