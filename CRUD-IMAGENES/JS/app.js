import { Imagen } from "../DATA/imagenes.js";
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
const myModal2 = new bootstrap.Modal(document.getElementById('myModal2'));

let myCarousel = document.querySelector('#myModal2')
let carousel = new bootstrap.Carousel(myModal2)


/*PRACTICA DE CRUD Y EVENTOS:
Utilizar módulos para hacer un código más prolijo
Crear un formulario para ingresar una imagen, su título y una descripción
Guardar el objeto en una lista en LocalStorage.
Crear una galería de imágenes. Si no hay imágenes cargadas en el LocalStorage, que lo indique por pantalla.
Crear un botón que elimine la imagen que se está mostrando por pantalla y otro que me permita editar solamente el título o descripción.
Modificar el código para que solo se muestre una imagen a la vez, sin su título y descripción.
Cuando hago click sobre una imagen, pasa a la siguiente.
Cuando hago doble click sobre una imagen, muestro por pantalla su título y descripción. */


let contenedor = document.getElementById("elContenedor");

const imagenes = JSON.parse(localStorage.getItem('imagenes')) ||[];

if(imagenes.length > 0){
  let aviso = document.querySelector('h5');
  aviso.classList="d-none";
}


cargarEntradas();

window.guardar_datos = (event) => {
  event.preventDefault();
  let titulo = document.getElementById("inputTitulo").value;
  let imagen = document.getElementById("inputImg").value;
  let descripcion = document.getElementById("inputDescripcion").value;
  let nuevaImg = new Imagen (titulo,imagen,descripcion);
  imagenes.push(nuevaImg);
  localStorage.setItem('imagenes',JSON.stringify(imagenes));
  window.location.reload();
  document.querySelector('form').reset();
};




function cargarEntradas () {
  contenedor.innerHTML="";

    imagenes.map((imagen, index) => {
    let col = document.createElement("div");
    col.classList = "col-12 col-md-6 col-lg-4 my-3";
    let tarjeta = `<div class="card  h-100 ">
    <img src=${imagen.imagen} class="card-img-top h-100" alt=${imagen.titulo} onclick="verCarrousel(${index})"; ondblclick="dobleClickImg(${index})" >
    <div class="card-body">
    <h5 class="card-title ">${imagen.titulo}</h5>
    <p class="card-text ">${imagen.descripcion}</p>
    <button class="btn btn-outline-danger " onclick="eliminarImg(${index})"><i class="bi bi-x-lg"></i></button>
    <button class="btn btn-outline-success  fw-bold" onclick="mostrarModal(${index})">editar</button>
    </div>
    </div>`;
    col.innerHTML = tarjeta;
    contenedor.append(col);
    });
};
cargarEntradas();

window.eliminarImg = (index)=>{
  let confirmar = confirm(`Está seguro que desea eliminar la imagen?`);
  if(confirmar){
    imagenes.splice(index,1)
      alert ('La imagen ha sido eliminada.')
      localStorage.setItem('imagenes',JSON.stringify(imagenes));
cargarEntradas()
      return imagenes;
  }
}


let posicionImg = null;
window.actualizarModal=(event)=>{
  event.preventDefault();
  imagenes[posicionImg].titulo = document.getElementById("inputModal1").value;
  imagenes[posicionImg].descripcion = document.getElementById("inputModal2").value;
    localStorage.setItem('imagenes',JSON.stringify(imagenes));
    cargarEntradas();
}

window.mostrarModal = (index) => {
  document.querySelector("#inputModal1").value = imagenes[index].titulo;
  document.querySelector("#inputModal2").value = imagenes[index].descripcion;
  posicionImg = index;
  myModal.show();
};


window.dobleClickImg=(index)=>{
  document.getElementById("inputModal1").value = imagenes[index].titulo;
  document.getElementById("inputModal2").value = imagenes[index].descripcion;
  let imgModal = document.getElementById('paisajesModal');
  imgModal.src=imagenes[index].imagen;
  let contenedorModal=document.getElementById('contenedorModal');
  contenedorModal.className="d-block";
  myModal.show();
}




// window.verCarrousel=()=>{
//   imagenes.forEach((image,index)=> {
//     let imgModal2 = document.querySelectorAll('img');
//   imgModal2.src=image[index].imagen;
//   imgModal2.alt=image[index].titulo;
//   $('.carousel').carousel();

//   });
//   myModal2.show();
// }











cargarEntradas();
// myModal.show();

