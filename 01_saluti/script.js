/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
let sceltaNomeUtente = prompt("Inserisci un nome");

// Dichiara la funzione qui.
function sceltaNome(stringa) {
    return "ciao " + stringa;

}
// Invoca la funzione qui e stampa il risultato in console
console.log(sceltaNome(sceltaNomeUtente));

//Risultato atteso se si passa 'Mario': // ciao Mario


