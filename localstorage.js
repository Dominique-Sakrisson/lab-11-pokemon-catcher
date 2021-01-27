import pokemon from './pokemon.js';
import {findById} from './utils.js';

const PARTY = 'PARTY';
const LISTS = 'LISTS';
const emptyParty = [];

export function getPokeStats(){
    let stats = JSON.parse(localStorage.getItem(PARTY));
    if(!stats){
        localStorage.setItem(PARTY, JSON.stringify(emptyParty));
        console.log('Initialized empty party array.');
        stats = emptyParty;
    }
    return stats;
}

export function getPokeStatsAll(){
    let stats = JSON.parse(localStorage.getItem(LISTS));
    if(!stats){
        localStorage.setItem(LISTS, JSON.stringify(emptyParty));
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
    console.log(stats);
    //is the id we passed already existant in local storage?
    const match = findById(id, stats);
    
    //if this passes we've already seen it before
    if(match) {
       
        match.seen++;
    } else {
        const currentPoke = findById(id, pokemon);
        const newStat = {
            name: currentPoke.pokebase,
            id: id,
            seen: 1,
            caught: 0,
            hp: currentPoke.hp,
            height: currentPoke.height,
            weight: currentPoke.weight,
        };
        stats.push(newStat);
    }
    setPokeStats(stats);
}

export function incrementCaught(id){
    const stats = getPokeStats();
    const poke = findById(id, stats)
    poke.caught++;
    setPokeStats(stats);
}
