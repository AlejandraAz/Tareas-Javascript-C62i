/*Crear un objeto con datos de usuario: username, state, role. Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario. */


let users = {
    username:'Ana',
    state:true,
    role:'directora',
    cambiarEstado: function(){
        this.state = !this.state;
        console.log(this.state)
    },
    infoUser: function(){
            for (const property in this) {
                if(property != "cambiarEstado" && property != "infoUser"){
                console.log(`${property} : ${this[property]}`)
                }
        }
    }
};





