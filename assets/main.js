/* Array  */
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//costante per selezionare il container
/* const containerLeft = document.querySelector(".containerLeft") */
const containerRight = document.querySelector(".containerRight")
//Due variabili a cui assegnare un valore nel ciclo
let imageRight = ``;
let imageLeft = ``;
//ciclo per stampare tutta la lista dell array
for (let i = 0; i < items.length; i++) {

    imageRight += `
                <img src="${items[i]}" alt="" class="sideImage">
               `;


    /* imageLeft += `<div class="selected">
                <img class="bigImage" src="${items[i]}" alt="">
            </div>`; */


}
//inserisci le immagini nel html
/* containerLeft.innerHTML = imageLeft */
containerRight.innerHTML = imageRight
//definire una variabile per selezionare l indice
let indice = 0;
//aggiungere una classe all elemento quando è selezionato
/* document.getElementsByClassName("selected")[indice].classList.add("imgSelectedBig"); */
document.getElementsByClassName("sideImage")[indice].classList.add("imgSelectedSmall");