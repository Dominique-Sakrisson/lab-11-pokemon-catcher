import pokemon from './pokemon.js';
import {findById} from './utils.js';

const PARTY = 'PARTY';
const emptyParty = [];

/*
const pokestats = [
    {
    _id: 2342,
    seen: 0,
    caught: 0,
    },
];
*/
//returns


export function getPokeStats(){
    let stats = JSON.parse(localStorage.getItem(PARTY));
    if(!stats){
        localStorage.setItem(PARTY, JSON.stringify(emptyParty));
        console.log('Initialized empty party array.');
        stats = emptyParty;
    }
    return stats;
}

export function setPokeStats(obj){
    localStorage.setItem(PARTY, JSON.stringify(obj));
}

export function incrementSeen(id){
    const stats = getPokeStats();
    //is the id we passed already existant in local storage?
    console.log(id + "stats" + JSON.stringify(stats));
    const match = findById(id, stats);
    
//if this passes we've already seen it before
    if(match) {
        console.log(stats.caught + 'fdgsdfg');
        match.seen++;
    } else {
        const summin = findById(id, pokemon);
        const newStat = {
            name: summin.pokebase,
            id: id,
            seen: 1,
            caught: 0,
        };
        stats.push(newStat);
    }

    setPokeStats(stats);
}


export function incrementCaught(id){
    const stats = getPokeStats();

    console.log(id + 'id on lcick');
    const poke = findById(id, stats)
    console.log(stats + 'onclick');
    console.log(poke);

    poke.caught++;
    setPokeStats(stats);
}