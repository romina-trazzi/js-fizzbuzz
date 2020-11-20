
/*=============================================
=            CODICE JS FIZZBUZZ            =
==============================================*/

/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero 
e per i multipli di 5 stampi Buzz. 
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

var i;
var numero = 0;

// Creiamo un ciclo for che stampi i numeri da 1 a 100 
for (i = 0; i < 100; i++) {
    numero = numero + 1;
    /* selezioniamo 3 e i multipli di 3 grazie all'operazione modulo con
    risultato pari a 0 e scriviamo fizz */
    if (numero % 3 === 0) {   
        console.log("fizz");
    } 
    /* selezioniamo 5 e i multipli di 5 grazie all'operazione modulo con
    risultato pari a 0 e scriviamo buzz */
    if (numero % 5 === 0) { 
        console.log("buzz");
    } 
    /* se l'operazione modulo nei casi 3 e 5 dà come risultato un numero
    diverso da zero, scriviamo semplicemente i numeri */
    if (numero % 3 !== 0 && numero % 5 !== 0) {
        console.log(numero);
    } 
}





