/*Crear un objeto con datos de usuario: username, state, role. Debe tener dos funciones, una que permita cambiar el estado y otra que muestre información del usuario. */


let users = {
    username:'Ana',
    state:false,
    role:'directora',
    estado: function(){
        if(!users.state){
            console.log(users.state = true);
        }else{
            console.warn(users.state = false);
        }
    },
    infoUser: function(){
            for (const property in this) {
                if(property != "estado" && property != "infoUser"){
                console.log(`${property} : ${this[property]}`)
                }
        }
    }
};




