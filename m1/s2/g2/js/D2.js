/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
//1-String -> "insieme di caratteri o parole racchiuse da apici singoli o doppi oppure backtick"
let string = "questa è una stringa";//virgolette
let string1 = 'questa è una stringa';//apici singoli
let string3 = `questa è una stringa`;//backtick

//2-Number -> "un qualsiasi carattere numerico che si intero o decimale"
let number1 = 5;
console.log(number1);
let number2 = 5.5;
console.log(number2);

//3-Boolean -> "un output che può essere "true" oppure "false""
let maggiorenne = true;
let centenario = false;

//4-Null -> "un output che si ottiene quando si cerca un elemento che non esiste"
let div = document.getElementById("test");
console.log(div);
//5-Undefined -> "un output che si ottiene quando una variabile non ha un valore definito"
//6-Object -> "un insieme di coppie chiave-valore che ne definisce le proprietà"
let persona = {
  nome: "Lorena",
  cognome: "Taddeo",
  età: 26,
};
//7-Array -> "una variabile speciale che può contenere più valori"
let arr = [0, 1, 2, 3, 4, 5];

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = 'Lorena';
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let a = 12;
let b = 20;
let somma = a + b;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
name = 'Taddeo';
console.log(name);

const COGNOME = 'Taddeo'
NOME = 'Tiziana';


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = 4 - x;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = 'john';
let name2 = 'John';
console.log(name1 != name2);
console.log(name1 == name2);
let lowercase1 = name1.toLowerCase();
let lowercase2 = name2.toLowerCase();
console.log(lowercase1 == lowercase2);
