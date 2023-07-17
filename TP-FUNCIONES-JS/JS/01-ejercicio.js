/*Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
document.write("Meses del año: <hr>")
for (let i = 0; i < meses.length; i++) {
    document.write("<ul> <li>"+ meses[i] + "</li></ul>")
};