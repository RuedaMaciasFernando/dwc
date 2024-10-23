 function imagenes(){
    var imagen = document.getElementById("imagen");

    var x = document.getElementById("desplegable").value;

    if(x == "Distribucion"){
        imagen.src = "distribucion.jpg"
    }else 
    if(x == "Produccion"){
        imagen.src = "produccion.jpg"
    }else{
        imagen.src = "oficina.jfif"
    }




}



function muestradescripcion(){

   var boton1 = document.getElementById("mostrardescrip");
    boton1.setAttribute("class", "oculto");

    var descripcion = document.getElementById("Descripcion");
   var parrafo = document.createElement("p");
   var contenido = document.createTextNode("Descripcion");
   parrafo.appendChild(contenido);
   descripcion.appendChild(parrafo);


   var textarea = document.createElement("textarea");
   descripcion.appendChild(textarea);



}


function validarelementos(){
    /*
123ABCD1
123ABCD2
123ABCDA
    */

    var nserie= document.getElementById("nserie");
    var enviar= document.getElementById("enviadatos");
    var textoetiqueta= document.getElementById("nserie2");
    var checkbox= document.getElementById("condiciones").checked;
    

    var patron=new RegExp("[0-9]{3}[A-Z]{4}[12A]");


   if(patron.test(nserie.value) == false && checkbox==true){
        document.getElementById("demo1").innerHTML = "El numero de serie es incorrecto";
        textoetiqueta.className="formulario";
        nserie.className="formulario";
    }else if(checkbox==false && patron.test(nserie.value) == true){
        document.getElementById("demo").innerHTML = "Necesitas marcar la casilla de las condiciones de servicio";
    }else if(patron.test(nserie.value) == false && checkbox==false){
        textoetiqueta.className="formulario";
        nserie.className="formulario";
        document.getElementById("demo").innerHTML = "Necesitas marcar la casilla de las condiciones de servicio";
        document.getElementById("demo1").innerHTML = "El numero de serie es incorrecto";
    }else{
        enviar.setAttribute("type","submit");
    }


}

function desaparecer1(){
    
    var nserie= document.getElementById("nserie");
    var textoetiqueta= document.getElementById("nserie2");

    textoetiqueta.className="";
    nserie.className="";

    document.getElementById("demo1").innerHTML = "";

    document.getElementById("demo").innerHTML = "";

}

function desaparecer2(){
    

    document.getElementById("demo").innerHTML = "";

}

