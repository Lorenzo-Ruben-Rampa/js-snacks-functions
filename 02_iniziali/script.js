/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Creo un nuovo array dove metterò le iniziali di ogni parola
const finalArray = [];

// Dichiara la funzione qui.
let prelievoIniziali = names.map(function Inizialiprelevate(nome) {
    return nome[0]
});

// Inserisco le iniziali prelevate nel nuovo array
finalArray.push(prelievoIniziali);

// Invoca la funzione qui e stampa il risultato in console
console.log(finalArray);

// Dichiara la funzione qui.
function filteredArray(value, index, array) {
    return array.indexOf(value) === index;
}

let uniqueArray = finalArray.filter(filteredArray);

// Invoca la funzione qui e stampa il risultato in console
console.log(uniqueArray);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

// Altri tentativi

// let uniqueArray = finalArray.filter(function filteredArray (value, index, array) {
//     return array.indexOf(value) === index;
// });

// function removeDuplicates(finalArray) {
//     return finalArray.filter((item, index) => finalArray.indexOf(item) === index);
// }

// Rimuovo i duplicati
// let uniqueArray = removeDuplicates(finalArray);
