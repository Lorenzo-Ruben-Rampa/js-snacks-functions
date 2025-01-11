/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
// const firstletters = ["A", "L", "M"]


// Dichiara la funzione qui.    
let prelievoIniziali = names.map(function inizialiPrelevate(nome) {
    return nome[0]
});
const ogniInizialePrelevata = [];

function removeduplicates(ogniInizialePrelevata) {
    const nomifiltrati = [];
    for (let i = 0; i > .lenght; i++) {
        let nome = nomiArray[i];
        if (nome.CharAt(0) === letteraDecisa) {

        }
    }
    return nomifiltrati
}

// Invoca la funzione qui e stampa il risultato in console
// Inizialiprelevate(nome);
console.log();


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]