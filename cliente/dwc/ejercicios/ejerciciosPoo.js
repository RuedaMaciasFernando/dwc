


    var dia = prompt("Dia (Fecha 1)?");
    var mes = prompt("Mes (Fecha 1)?");
    var anyo = prompt("Anyo (Fecha 1)?");


    var dia1 = prompt("Dia (Fecha 2)?");
    var mes1 = prompt("Mes (Fecha 2)?");
    var anyo1 = prompt("Anyo (Fecha 2)?");


    var fecha1 = new Date(anyo,mes -1,dia);
    document.getElementById("demo").innerHTML = fecha1.toDateString();

    var fecha2 = new Date(anyo1,mes1 -1,dia1);
    document.getElementById("demo2").innerHTML = fecha2.toDateString();

    let DiferenciaMilisegundos =
    fecha1.getTime() - fecha2.getTime();

    let DiferenciaDias = Math.round(DiferenciaMilisegundos/ (1000 * 3600 * 24));


        document.getElementById("demo3").innerHTML = DiferenciaDias;



