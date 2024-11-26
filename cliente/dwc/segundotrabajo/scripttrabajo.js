class Carta {	
    constructor(palo, valor) {
        if (palo !== "c" && palo !== "d" && palo !== "p" && palo !== "t") {
            this.palo = null;
        } else {
            this.palo = palo;
        }

        if (valor < 1 || valor > 13) {
            this.valor = null;  
        } else {
            this.valor = valor;
        }
    }

    darValor(palo1, valor1) {
        if (palo1 !== "c" && palo1 !== "d" && palo1 !== "p" && palo1 !== "t") {
            this.palo = null;
        } else {
            this.palo = palo1;
        }

        if (valor1 < 1 || valor1 > 13) {
            this.valor = null;  
        } else {
            this.valor = valor1;
        }
    } 
    
    toString() {
        let familia = "";
        let tipo = "";

        if (this.palo == "c") {
            familia = "corazones";
        } else if (this.palo == "d") {
            familia = "diamantes";
        } else if (this.palo =="p") {
            familia = "picas";
        } else if (this.palo == "t") {
            familia = "treboles";
        }

        if (this.valor == 1) {
            tipo = "As";
        } else if (this.valor ==11) {
            tipo = "Jack";
        } else if (this.valor == 12) {
            tipo = "Reina";
        } else if (this.valor == 13) {
            tipo = "Rey";
        } else {
            tipo = this.valor; 
        }

        return tipo + " de " + familia;
    } 


}


class Baraja {
 cartas = [];

    constructor(cartas) {
        for(let i=1;i<=13;i++){
             let cartascorazon = new Carta("c", i);
            let corazones = cartascorazon.toString();
            this.cartas.push(corazones);
        }

        for( let i=1;i<=13;i++){
             let cartasdiamantes = new Carta("d", i);
            let diamantes = cartasdiamantes.toString();
            this.cartas.push(diamantes);
        }

        for(let i=1;i<=13;i++){
            let cartaspicas = new Carta("p", i);
            let picas = cartaspicas.toString();
            this.cartas.push(picas);
        }

        for(let i=1;i<=13;i++){
            let cartastrboles = new Carta("t", i);
            let treboles = cartastrboles.toString();
            this.cartas.push(treboles);
        }
 
    }


     barajar() {
        //codigo copiado de: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
        for (var i = this.cartas.length - 1; i > 0; i--) { 
       
            var j = Math.floor(Math.random() * (i +1 ));
                       
            var temp = this.cartas[i];
            this.cartas[i] = this.cartas[j];
            this.cartas[j] = temp;
        }
           
        return this.cartas;
     }

    toString(){
        let texto = "";
        for (let i = 1; i < this.cartas.length; i++) { 
            texto += this.cartas[i] + " , ";
        }
        return texto;
    }
    

    reparteCarta(){
        let textoultimacarta = "";
            let numerocarta = this.cartas.length -1 ;
         textoultimacarta += this.cartas[numerocarta];
            this.cartas.splice(numerocarta , 1 );
        return textoultimacarta;


    }

}







class Jugador {


    constructor(baraja) {
        this.baraja = baraja; 
        this.mano = [];
    }

    nuevaCarta() {
        for (let i = 0; i < 5; i++) {
            const ultimacarta = this.baraja.reparteCarta();
            if (ultimacarta) {
                this.mano.push(ultimacarta);
            }
        }
    }

    toString(){

        let texto = "";
        for (let i = 0; i < this.mano.length; i++) { 
            texto += this.mano[i] + " , ";
        }
        return texto; 
    }

    Jugada(){
        const valoresCartas = {
            'As': 1,
            'Rey': 13,
            'Reina': 12,
            'Jack': 11
        };
        const PaloCartas = {
            'treboles': "t",
            'picas': "p",
            'corazones': "c",
            'diamantes': "d"
        };
        var bandera=false;
        var bandera2=false;
        var bandera3=false;
        var bandera4=false;
        var jugada="";
        let numeroscartas = [];
        let paloscartas = [];
    let numerosContados = {};
        for (let i = 0; i < this.mano.length ; i++) { 
           var valor1 = this.mano[i].split(" ")[0]; 
           var palo1 = this.mano[i].split(" ")[2]; 
           
           if (valoresCartas[valor1] !== undefined) {
            numeroscartas.push(valoresCartas[valor1]); 
        } else {
            numeroscartas.push(parseInt(valor1)); 
        }

        if (PaloCartas[palo1] !== undefined) {
            paloscartas.push(PaloCartas[palo1]); 
        }
        }
        if (paloscartas[0] == paloscartas[1] && paloscartas[1] == paloscartas[2]
            && paloscartas[2]== paloscartas[3]&& paloscartas[3]== paloscartas[4]
        ) {
           jugada="Color";
           bandera4=true;
        }
        if (numeroscartas[1] == numeroscartas[0] + 1 && numeroscartas[2] == numeroscartas[1] + 1 
            && numeroscartas[3] == numeroscartas[2] + 1 && numeroscartas[4] == numeroscartas[3] + 1
        ) {
           jugada="Escalera";
           bandera=true;
        }
        if (numeroscartas[1] == numeroscartas[0] - 1 && numeroscartas[2] == numeroscartas[1] - 1 
            && numeroscartas[3] == numeroscartas[2] - 1 && numeroscartas[4] == numeroscartas[3] - 1
        ) {
           jugada="Escalera";
           bandera=true;
        }
        if (numeroscartas[0] == 1  && numeroscartas[1] == 13
            && numeroscartas[2] == 12  && numeroscartas[3] == 11  && numeroscartas[4] == 10
        ) {
           jugada="Escalera";
           bandera=true;
        }
        if (bandera4==true && bandera==true) {
           jugada="Escalera de color";
        }

        for (let i = 0; i < numeroscartas.length; i++) {
            const numero = numeroscartas[i];
            if (numerosContados[numero]) {
                numerosContados[numero]++;
            } else {
                numerosContados[numero] = 1;
            }
        }
        for (let num in numerosContados) {
         numerosContados[num];
       if(numerosContados[num] === 2){
            jugada="Pareja";
            bandera2=true;
        }else if(numerosContados[num] === 3){
            jugada="Trio";
            bandera3=true;
        }else if(numerosContados[num] === 4){
            jugada="Poker";
        }
           
        }
        if( bandera2==true && bandera3==true){
            jugada="Full";
        }


         var carta1 =  paloscartas[0] + numeroscartas[0] ;
        var carta2 =  paloscartas[1] + numeroscartas[1] ;
        var carta3 =  paloscartas[2] + numeroscartas[2] ;
        var carta4 =  paloscartas[3] + numeroscartas[3] ;
        var carta5=  paloscartas[4] + numeroscartas[4] ;

        
    document.getElementById("1").src="cartas/"+ carta1 + ".svg";
    document.getElementById("2").src="cartas/"+ carta2 + ".svg";
    document.getElementById("3").src="cartas/"+ carta3 + ".svg";
    document.getElementById("4").src="cartas/"+ carta4 + ".svg";
    document.getElementById("5").src="cartas/"+ carta5 + ".svg";

        return jugada;
    }


}


function mostrarcartashtml(){

    let baraja = new Baraja();
    baraja.barajar();
    baraja.reparteCarta();
    let jugador = new Jugador(baraja);
    jugador.nuevaCarta();
    jugador.Jugada();

let jugadon = jugador.Jugada();
document.getElementById("p1").innerHTML = jugadon;

    

}

/*
let carta = new Carta("d", 13);
var textocarta = carta.toString();
document.getElementById("carta1").innerHTML = textocarta;



let baraja = new Baraja();
baraja.barajar();
var textocartas1 = baraja.toString();
document.getElementById("cartaprueba").innerHTML = textocartas1;


var ultimacarta = baraja.reparteCarta();
document.getElementById("carta3").innerHTML = ultimacarta;



let jugador = new Jugador(baraja);
jugador.nuevaCarta();
var manita = jugador.toString();
document.getElementById("manojugador").innerHTML = manita;


let jugadon = jugador.Jugada();
document.getElementById("p1").innerHTML = jugadon;

*/








