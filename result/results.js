import pokemon from '../pokemon.js';
import {getPokeStats} from '../localstorage.js';
import { makeSeenArray, makeCaughtArray, makeNameArray, makeHpArray } from './mungUtils.js'; 


const pokestats = getPokeStats();

const table = document.getElementById('poke-list');
const link = document.getElementById('go-play');
link.addEventListener('click', () =>{
    localStorage.clear();
});

//make a button, when pressed clears local storage
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});

//structure a table row, add data to it, append row to table
function addToTable(){
    const nameArray= [];
 
    for(let i = 0; i< pokestats.length; i++){
        let tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdSeen = document.createElement('td'); 
        const tdCaught = document.createElement('td');
       
            
        tdName.textContent = pokestats[i].name;
        tdCaught.textContent = pokestats[i].caught;
        tdSeen.textContent = pokestats[i].seen;
        tr.append(tdName, tdCaught, tdSeen);
        tdSeen.classList.add('center');
        tdCaught.classList.add('center');
        
        table.append(tr);
    }

}

addToTable();

console.log(makeSeenArray(pokestats));


//commented out for this part of assignemnt

var ctx = document.getElementById('caught-seen-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {

        labels: makeNameArray(pokestats),
        datasets: [
            {
            label: '# of Catches',
            data: makeCaughtArray(pokestats),
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: '# of Encounters',
            data: makeSeenArray(pokestats),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',        
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
        ]
    },
    options: {
        
        scales:  {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    max: 10
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1

                }
            }]
        }
    }
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {

        labels: makeNameArray(pokestats),
        datasets: [
            {
            label: 'Pokemon HP',
            data: makeHpArray(pokestats),
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales:  {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                    max: 100
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
            
                }
            }]
        }
    }
});
 
