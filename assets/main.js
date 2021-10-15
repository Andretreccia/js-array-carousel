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

//Seleziona le colonne e crea due costanti
const containerLeft = document.getElementById("imgLeft")
const containerRight = document.getElementById("imgRight")
//Crea una variabile per le immagini della colonna di destra
let imageRight = ``;
//Inserisci tutte le immagini contenute nell array
for (let i = 0; i < items.length; i++) {

    imageRight += `<img src= "${items[i]}" alt="">`;
    console.log(imageRight)

}

containerRight.innerHTML = imageRight
