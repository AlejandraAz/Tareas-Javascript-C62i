/*Lista de tareas con eliminación:
- Mejora el ejercicio de "Lista de tareas" del nivel medio anterior.
- Agrega un botón "Eliminar" junto a cada elemento de la lista.
- Al hacer clic en el botón "Eliminar", elimina el elemento correspondiente de
la lista */

let boton = document.getElementById('btnAgregar');
let tarea = document.getElementById('laTarea');
let variastareas = JSON.parse(localStorage.getItem("tareas")) || [];
// localStorage.removeItem("tareas")

const agregarTareas = (event)=>{
    event.preventDefault();
    let tareas = tarea.value;
    variastareas.push(tareas);
    localStorage.setItem("tareas",JSON.stringify(variastareas));
    document.querySelector('form').reset();
    tarea.focus();
    laTabla();
}

const cuerpoTabla = document.querySelector('tbody');

const laTabla = () =>{
    cuerpoTabla.innerHTML = "";
    variastareas.map((tarea,index)=>{
        let fila = document.createElement('tr');
        let celda = `<td>${tarea}</td> 
        <td><button class="btn btn-danger" onclick="eliminar(${index})"><i class="bi bi-trash3-fill"></i></button></td>`
        fila.innerHTML=celda;
        cuerpoTabla.append(fila);
    })
}


const eliminar =(index)=>{
    let validar = confirm(`Desea eliminar: ${variastareas[index].toUpperCase()} de la lista?`);
    if(validar){
        variastareas.splice(index,1);
        alert('La actividad se eliminó correctamente.');
        localStorage.setItem("tareas",JSON.stringify(variastareas));
        laTabla();
    }
}
laTabla();