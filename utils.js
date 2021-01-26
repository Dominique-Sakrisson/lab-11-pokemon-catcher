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