/* Cambiar el tamaño de texto:
- Crea un párrafo en tu HTML con un ID único y dos botones: "Aumentar" y
"Disminuir".
- Al hacer clic en "Aumentar", aumenta el tamaño del texto en el párrafo.
- Al hacer clic en "Disminuir", disminuye el tamaño del texto en el párrafo. */


const aumentarLetra = ()=>{
    switch (true) {
        case (parrafo.classList == "fs-6"):
            parrafo.classList = "fs-5"
            break;
        case (parrafo.classList == "fs-5"):
                parrafo.classList = "fs-4"
                break;
        case (parrafo.classList == "fs-4"):
                parrafo.classList = "fs-3"
                break;
        case (parrafo.classList == "fs-3"):
                parrafo.classList = "fs-2"
                break;
        case (parrafo.classList == "fs-2"):
                parrafo.classList = "fs-1"
                break;
    }
};

const disminuirLetra=()=>{
    switch (true) {
        case (parrafo.classList == "fs-1"):
            parrafo.classList = "fs-2"
            break;
        case (parrafo.classList == "fs-2"):
                parrafo.classList = "fs-3"
            break;
        case (parrafo.classList == "fs-3"):
            parrafo.classList = "fs-4"
            break;
        case (parrafo.classList == "fs-4"):
            parrafo.classList = "fs-5"
            break;
        case (parrafo.classList == "fs-5"):
            parrafo.classList = "fs-6"
            break;
    }
};