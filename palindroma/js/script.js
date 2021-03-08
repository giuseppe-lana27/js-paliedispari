/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */
// 1. inizializzo le variabili
var parolaUtente = prompt("Inserisci una parola");
// 2. scrivo la funzione per verificare se la parola è palindorma
function palindroma (parola){
  if (parola == parola.split("").reverse().join("")){
    return "La parola è palindroma";
  } else {
    return "La parola non è palindroma";
  }
}
// 3. stampo in console se la parola è palindroma o meno
var palindroma = palindroma(parolaUtente);
console.log(palindroma);
