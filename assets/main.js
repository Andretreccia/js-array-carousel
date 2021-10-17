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
const containerLeft = document.querySelector(".containerLeft")
const containerRight = document.querySelector(".containerRight")
//Due variabili a cui assegnare un valore nel ciclo
let imageRight = ``;
let imageLeft = ``;
//Inserisci tutte le immagini contenute nell array
for (let i = 0; i < items.length; i++) {

    imageRight += `
                <img src="./img/01.jpg" alt="" class="sideImage">
               `;


    imageLeft += `<div class="selected">
                <img class="bigImage" src="./img/02.jpg" alt="">
            </div>`;


}

containerLeft.innerHTML = imageLeft

containerRight.innerHTML = imageRight