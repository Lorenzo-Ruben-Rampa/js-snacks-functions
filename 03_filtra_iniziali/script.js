/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let lettera = "A";

// Dichiaro la funzione qui
function filtraStringhe(nomiArray, letteraDecisa) {

// Creo un nuovo array
    const nomiFiltrati = [];

// Ciclo
    for (let i = 0; i < nomiArray.length; i++) {
        let nome = nomiArray[i];
        if (nome.charAt(0) === letteraDecisa) {
        nomiFiltrati.push(nome);
        }
    }
    return nomiFiltrati;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filtraStringhe(names, lettera));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]