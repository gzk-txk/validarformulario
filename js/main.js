//VARIABLES

//EVENTOS

//FUNCIONES

function validarFormulario(){
    //definimos dos espacios en memoria para enlazarse en el DOM
    const nombre= document.getElementById("nombre").value;
    const apellido= document.getElementById("apellido").value;
    const edad= document.getElementById("edad").value;
    //condicional para el envio del formulario
    if (nombre === "" || apellido === "" || edad === ""){
        alert("Dato requerido");
        //se evita que el formulario se envíe
        return false;
    };
    console.log("Nombre y apellido bien");
        if (edad === ""){
        alert("No has introducido tu edad");
        return false
    } else if(edad < 18){
        alert("A tu casa niño a ver los lunis");
        return false
    } else{
        alert("Cuentale al tito que te ha pasado");
    }
     //indicamos que almacene los datos en localStorage
     localStorage.setItem("nombreDenunciante", nombre);
     localStorage.setItem("apellidoDenunciante", apellido);
     localStorage.setItem("edadDenunciante", edad);
     //finaliza la funcion
     return true;
};

window.onload = function(){
    const nombreGuardado = localStorage.getItem("nombreDenunciante");
    const apellidoGuardado = localStorage.getItem("apellidoDenunciante");
    const edadGuardado = localStorage.getItem("edadDenunciante");
    if (nombreGuardado){
        document.getElementById("nombre").value = nombreGuardado;
    }
    if (apellidoGuardado){
        document.getElementById("apellido").value = apellidoGuardado;
    }
    if (edadGuardado){
        document.getElementById("edad").value = edadGuardado;
    }
}