//Consegna:
//Scrivi un programma che stampi in console i numeri da 1 a 100,
//per i multipli di 3 stampi “Fizz” al posto del numero
//e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per un altro?
//Abbiamo visto qualcosa di particolare che possiamo usare?
//Consigli del giorno:
//Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
//La condizione non funziona? controlliamo il loro ordine.
//BONUS 1:
//Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
//BONUS 2:
//Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

// STRUMENTI DA UTLIZZARE 

// let / const
// for / loop
// if / else 
 





//Scrivi un programma che stampi in console i numeri da 1 a 100



// creaimo una variabile e selezioniamo il nostro HTML attraverso il querySelector 
const containerEl = document.querySelector(`div.container`);

// Utlizzare for per il ciclo dei numeri 


for(let i = 1; i <= 100; i++){
    const boxEl = document.createElement(`div`);
    boxEl.classList.add(`box`)


    // se i numeri sono multipli di 3 e 5 stampo in console FizzBuzz 
    if (i % 3 === 0 && i % 5 === 0){
        boxEl.append(`FizzBuzz`);
        // console.log(`FizzBuzz`);
        // stampo FizzBuzz 
        
        // se i numeri sono multipli di 3 stampo in console Fizz
    } else if (i % 3 === 0){
        boxEl.append(`Fizz`);
        // stampo Fizz
        // console.log(`Fizz`);
        
        // se i numeri sono multipli di 5 stampo in console Buzz
    } else if (i % 5 === 0){
        boxEl.append(`Buzz`);
        // stampo Buzz
        // console.log(`Buzz`);
        
        // altrimenti stampo i numeri da 0 a 100 non multilpi di 3 e 5 
    } else{
        boxEl.append(i);
        // console.log(i);
    }
    containerEl.append(boxEl);
}

//Stampiamo nella dom attraverso la funzione append



// creo un box utilizzando createElement


// appendo all'elemnto box "i"


// appendo l' elemento  boxEL a containerEl








