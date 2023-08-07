/*Lista de tareas:
- Crea un formulario con un campo de texto y un botón en tu HTML.
- Al hacer clic en el botón, agrega el contenido del campo de texto como un
nuevo elemento de lista <li> a una lista <ul> existente en la página. */

let tarea = document.querySelector('#input1');
let lista = document.querySelector('#laLista');


let tareas = [];

const guardarTareas = (event)=>{
    event.preventDefault();
    const nuevaTarea = tarea.value;
    tareas.push(nuevaTarea);
    document.querySelector('form').reset()
    tarea.focus()

    const li = document.createElement('li');
    li.innerText=nuevaTarea;
    lista.appendChild(li)
}
