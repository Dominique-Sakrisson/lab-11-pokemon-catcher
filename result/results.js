import pokemon from '../pokemon.js';
import {getPokeStats} from '../localstorage.js';
import { makeSeenArray, makeCaughtArray, makeNameArray, makeHpArray,makeHeightArray } from './mungUtils.js'; 

//get global pokestats
const pokestats = getPokeStats();
//save reference to table node
const table = document.getElementById('poke-list');
//save reference for html link node
const link = document.getElementById('go-play');
link.addEventListener('click', () =>{
    localStorage.clear();
});

//make a button, when pressed clears local storage
const clearButton = document.getElementById('clear-button');
//add event listener to the button
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
//call function to render table on Document
addToTable();
//save reference to canvas used for the chart
var ctx = document.getElementById('caught-seen-chart').getContext('2d');
//create chart on the canvas
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
//save reference to canvas for 2nd chart
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
 
//save reference to canvas for 2nd chart
var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx3, {
    type: 'bar',
    data: {

        labels: makeNameArray(pokestats),
        datasets: [
            {
            label: 'Pokemon HP',
            data: makeHeightArray(pokestats),
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
 