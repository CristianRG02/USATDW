$( document ).ready(function() {
    $('#myModal').modal('toggle')
});

function guardarDatos(){
    const nombre = document.getElementById("nombre").value;
    const movil = document.getElementById("movil").value;
    const email = document.getElementById("email").value;

    const datos = {
        'movil':movil,
        'email':email,
    };


    localStorage.setItem(nombre, JSON.stringify(datos))
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    actualizarDatos();
}

function recuperarDato(){
    const nombre = document.getElementById("nombre").value;
    const nombre1 = localStorage.getItem(nombre);
    const datosCom = JSON.parse(nombre1);
    document.getElementById("movil").value = datosCom.movil;
    document.getElementById("email").value = datosCom.email;

}

function eliminarDato(){
    const nombre=document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos(){
    var registro = "";
    if(localStorage.legth===0){
        registro +='<li>Vacío<li>';

    } else {
        for(var i=0;i<=localStorage.length-1;i++){
            const key = localStorage.key(i);
            const datosR = localStorage.getItem(key);
            const datosCom = JSON.parse(datosR);
            registro += '<li>' + '<span class="nom">' + key + '</span>'
            + '<span class="nom">' + datosCom.movil + '</span>' + '<span class="nom">' + datosCom.email + '</span>'+ '</li><br>';
        }

    }
    document.getElementById('contactos').innerHTML=registro;
}
