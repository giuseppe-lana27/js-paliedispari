/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/
// 1. chiedo all'utente di scegliere pari o dispari ed inserire un numero tra 1 e 5 e
var pariDispari = prompt("scegli tra pari o dispari");
do{
  var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5"));
} while ( numeroUtente > 5);
// 2. genero numero random per computer attraverso una funzione
function numeroRandom (min, max) {
  return parseInt(Math.floor(Math.random() * 5) + 1);
}
var numeroComputer = numeroRandom(1,5);
console.log(numeroUtente);
console.log(numeroComputer);
// 3. inizializzo una funzione per la somma dei numeri e verifico se pari o dispari
var somma = 0;
function sommaNumeri (somma, risultato){
  somma = numeroUtente + numeroComputer;
  return somma;
}
// 4. controllo se la somma è pari o dispari e dichiaro il vincitore
function numeroPariDispari (risultato){
  if (somma % 2 == 0 && pariDispari == "pari" || somma % 2 != 0 && pariDispari == "dispari"){
    return "Hai vinto!";
  } else {
    return "Hai perso!";
  }
}
var sommaNumeriRandom = sommaNumeri(parseInt(somma));
var risultato = numeroPariDispari(risultato);
console.log(sommaNumeriRandom);
console.log(risultato);
