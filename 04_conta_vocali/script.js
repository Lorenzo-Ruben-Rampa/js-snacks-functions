/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
function contavocali(stringa) {
    // variabile vocali
    let vocali = 0;
    // ciclo
    for (let i = 0; i < stringa.lenght; i++) {
    // prendo il carattere iesimo
        let carattere = stringa.charAt(1);
    // se il carattere è una vocale
        if (["a", "e", "i", "o","u"].includes(carattere)) {
            vocali += 1;
        }
    }
    return vocali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log("Le vocali sono: ", contavocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)