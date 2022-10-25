"use strict";
// creo variabile playerOne
let playerOne = 4;
console.log("PlayerOne: " + playerOne);
// creo variabile playerTwo
let playerTwo = 10;
console.log("PlayerTwo: " + playerTwo);
//Creo variabile per generare numeri rundom e con "math.floor" li arrotondo
let pc = Math.floor((Math.random() * 100) + 1);
console.log(pc);
//creo la funzione per confrontare i player One-Two 
function match() {
    let diff1 = Math.abs(pc - playerOne);
    let diff2 = Math.abs(pc - playerTwo);
    if (playerOne === pc) {
        console.log("Player One WIN!!");
    }
    else if (playerTwo === pc) {
        console.log("Player Two WIN");
    }
    else if (diff1 < diff2) {
        console.log("Player One gets closer");
    }
    else if (diff1 === diff2) {
        console.log("No one comes closer");
    }
    else {
        console.log("Players Two gets closer");
    }
}
match();
