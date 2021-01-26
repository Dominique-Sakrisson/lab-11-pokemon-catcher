import { incrementSeen, incrementCaught,  } from './localstorage.js';
import pokemon from './pokemon.js';

export function findById(id, array){
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function createRandomPoke(){
    const randomPoke = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomPoke];
 }

let numOfTurns = 0;

export function setThreePokemon(){
    let poke1 = createRandomPoke();
    let poke2 = createRandomPoke();
    let poke3 = createRandomPoke();

    while(poke1.id === poke2.id || poke1.id === poke3.id || poke2.id === poke3.id){
        poke1 = createRandomPoke();
        poke2 = createRandomPoke();
        poke3 = createRandomPoke();
    }
    const list = document.getElementById('poke-list');
    const li = document.createElement('li');
    const pokeImg1 = renderPokeImage(poke1);
    const pokeImg2 = renderPokeImage(poke2);
    const pokeImg3 = renderPokeImage(poke3);

    pokeImg1.src = poke1.url_image;
    pokeImg2.src = poke2.url_image;
    pokeImg3.src = poke3.url_image;

    pokeImg1.setAttribute('id', poke1.id);
    pokeImg2.setAttribute('id', poke2.id);
    pokeImg3.setAttribute('id', poke3.id);

    incrementSeen(poke1.id);
    incrementSeen(poke2.id);
    incrementSeen(poke3.id);

    const gameBoard = document.querySelector('.container');
    setSpanContent(numOfTurns);
    gameBoard.textContent = '';

    gameBoard.append(pokeImg1, pokeImg2, pokeImg3);
    numOfTurns++;
}

function setSpanContent(turns){
    const span = document.getElementById('caught-span');
    if(turns === 0 ){
        span.textContent = 'You haven\'t caught any Pokemon yet!'; 
     } else {
     span.textContent = `PokeParty Members: ${turns}`;}
}

function clearLocal(){
    localStorage.clear();
}

function renderPokeImage(pokeItem){
    const img = document.createElement('img');
    img.src = pokeItem.url_image;

    img.classList.add('poke-img');
    img.addEventListener('click', () => {
        incrementCaught(pokeItem.id);

        if (numOfTurns < 10){
            setThreePokemon();
          
        } else {
            window.location = './result/index.html';
        }
    });
    return img;
}
