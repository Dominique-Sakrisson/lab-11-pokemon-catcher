import pokemon from './pokemon.js';
import {findById, createRandomPoke, setThreePokemon} from './utils.js';
import {getPokeStats, incrementSeen, setPokeStats} from './localstorage.js';

const PARTY = 'PARTY';
const noParty = [];

setThreePokemon();
/*
const gameBoard = document.querySelector('.container');
const pokeImg1 = document.createElement('img');
const pokeImg2 = document.createElement('img');
const pokeImg3 = document.createElement('img');
*/