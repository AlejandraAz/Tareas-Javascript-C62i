/*Crear un objeto con datos de usuario: username, state, role. Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario. */


let users = {
    username:'Ana',
    state:true,
    role:'directora',
    estado: function(){
        this.estado = !this.estado;
    },
    infoUser: function(){
            for (const property in this) {
                if(property != "estado" && property != "infoUser"){
                console.log(`${property} : ${this[property]}`)
                }
        }
    }
};





