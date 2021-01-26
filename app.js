import pokemon from './pokemon.js';
import {findById, createRandomPoke} from './utils.js';

const PARTY = 'PARTY';


const gameBoard = document.querySelector('.container');
const pokeImg1 = document.createElement('img');
const pokeImg2 = document.createElement('img');
const pokeImg3 = document.createElement('img');

let poke1 = createRandomPoke();
let poke2 = createRandomPoke();
let poke3 = createRandomPoke();


while(poke1.id === poke2.id || poke1.id === poke3.id || poke2.id === poke3.id){
    poke1 = createRandomPoke();
    poke2 = createRandomPoke();
    poke3 = createRandomPoke();
}

pokeImg1.src = poke1.url_image;
pokeImg2.src = poke2.url_image;
pokeImg3.src = poke3.url_image;

pokeImg1.setAttribute('id', poke1.id);
pokeImg2.setAttribute('id', poke2.id);
pokeImg3.setAttribute('id', poke3.id);

pokeImg1.addEventListener('click', (e) => {
    catchPokemon(e); 
});
pokeImg2.addEventListener('click', (e) => {
    catchPokemon(e); 
});
pokeImg3.addEventListener('click', (e) => {
    catchPokemon(e); 
});


gameBoard.append(pokeImg1, pokeImg2, pokeImg3);

function catchPokemon(e){
    let caughtId = e.target.id;

    console.log(caughtId);
}