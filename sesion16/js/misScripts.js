$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora sera enviado a la pagina de la USAT");

    });
});

$("#c1b").click(function(){
$("#cont1").toggle(1500);
}, function(){
    $("#cont1").toggle(1500)
}
);