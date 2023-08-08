/* Cambiar el tamaño de texto:
- Crea un párrafo en tu HTML con un ID único y dos botones: "Aumentar" y
"Disminuir".
- Al hacer clic en "Aumentar", aumenta el tamaño del texto en el párrafo.
- Al hacer clic en "Disminuir", disminuye el tamaño del texto en el párrafo. */


const aumentarLetra = ()=>{
    switch (true) {
        case (parrafo.className == "fs-6"):
            parrafo.className = "fs-5"
            break;
        case (parrafo.className == "fs-5"):
                parrafo.className = "fs-4"
                break;
        case (parrafo.className == "fs-4"):
                parrafo.className = "fs-3"
                break;
        case (parrafo.className == "fs-3"):
                parrafo.className = "fs-2"
                break;
        case (parrafo.className == "fs-2"):
                parrafo.className = "fs-1"
                break;
    }
};

const disminuirLetra=()=>{
    switch (true) {
        case (parrafo.className == "fs-1"):
            parrafo.className = "fs-2"
            break;
        case (parrafo.className == "fs-2"):
                parrafo.className = "fs-3"
            break;
        case (parrafo.className == "fs-3"):
            parrafo.className = "fs-4"
            break;
        case (parrafo.className == "fs-4"):
            parrafo.className = "fs-5"
            break;
        case (parrafo.className == "fs-5"):
            parrafo.className = "fs-6"
            break;
    }
};