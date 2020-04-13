//USO OTRO NOMBRE DE VARIABLES PORQUE ABAJO LOS USO EN EL FOR
var m = 0 ; var n = 1;
//Luego cambiar img por a-entity
var huevos = document.getElementsByTagName("a-entity");
function derecha(){
    n = m + 1;
    if(n == 4){
        n = 0;
    }
    huevos[m].setAttribute("visible","false");
    huevos[n].setAttribute("visible","true");
    m++; n++; 
    if(m == 4){
        m = 0;
    }
}
function izquierda(){
    n = m - 1;
    if(n == -1){
        n = 3;
    }
    huevos[m].setAttribute("visible","false");
    huevos[n].setAttribute("visible","true");
    m--; n--;   
    if(m == -1){
        m = 3;
    }
}

var oraciones = document.getElementsByTagName("h3");


function arriba(){
    var bandera = oraciones[0].innerHTML;
    for(i = 0; i <= oraciones.length; i++){
        var j = i + 1;
        if(i != 4){
            oraciones[i].innerHTML = oraciones[j].innerHTML;
        }
        else{
            oraciones[i].innerHTML = bandera;
        }  
    } 
}

function abajo(){
    var oraciones2 = [1, 2, 3, 4, 5]; //LE ASIGNO ALGO POR DEFECTO AL VECTOR PARA QUE DESPUES SEA MODIFICADO NADA MAS
    var k = 4;
    for(i = 0; i < oraciones2.length; i++){
        oraciones2[i] = oraciones[k];
        k = k - 1;
    }
    //Hasta aca se da vuelta el vector , se tiene que hacer cada vez que se llame a la funcion porque el vector original siempre
    //esta cambiando
    var bandera = oraciones2[0].innerHTML;
    for(i = 0; i <= oraciones2.length; i++){
        var j = i + 1;
        if(i != 4){
            oraciones2[i].innerHTML = oraciones2[j].innerHTML;
        }
        else{
            oraciones2[i].innerHTML = bandera;
        }
       
    }
}

var bn = document.querySelector('#BonNegro');
var bb = document.getElementById("BonBlanco");
var ac = document.getElementById("Ac");
var am = document.getElementById("Am");
var hola = 10;

$("#next").click(function(){
    $("#pantalla1").fadeOut("slow");
    $("#scene").fadeOut("slow");
    $("#pantalla2").fadeIn("slow");   
   
});

$("#next2").click(function(){

    $("#pantalla2").fadeOut("slow");
    $("#pantalla3").fadeIn("slow");
    $("#scene").fadeIn("slow");
});

$("#next3").click(function(){
    $("#pantalla3").fadeOut("slow");
    $("#scene").fadeOut("slow");
    $("#pantalla4").fadeIn("slow");
    $("#elegida").attr("value",frase);
});

var frase;
$("#next2").click(function(){
    frase = document.getElementById("oracion3").innerHTML;
    $("#pantalla2").fadeOut("slow");
    $("#pantalla3").fadeIn("slow");
    $("#scene").fadeIn("slow");
});


$("#next4").click(function(){
    console.log("me estan presionando");
    $("#pantalla4").fadeOut("slow");
    $("#pantalla5").fadeIn("slow");
});


