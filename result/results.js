import pokemon from '../pokemon.js';
import {getPokeStats} from '../localstorage.js';
import { makeSeenArray, makeCaughtArray, makeNameArray, makeHpArray, makeHeightArray, makeWeightArray } from './mungUtils.js'; 

const PARTY = 'PARTY';
//get global pokestats
const pokestats = getPokeStats();
//save reference to table node
const table = document.getElementById('poke-list');
//save reference for html link node
const link = document.getElementById('go-play');
link.addEventListener('click', () =>{
    localStorage.removeItem(PARTY);
});

//make a button, when pressed clears local storage
const clearButton = document.getElementById('clear-button');
//add event listener to the button
clearButton.addEventListener('click', () => {
    localStorage.removeItem(PARTY);
    window.location = '../index.html';
});
//structure a table row, add data to it, append row to table
function addToTable(){
    const nameArray= [];
 
    for(let i = 0; i < pokestats.length; i++){
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

function setNameArray(){
    const nameArrayObj = [];
    for(let item of dataObj){
        if(nameArrayObj.indexOf(item.name) === -1){
            nameArrayObj.push(item.name);
            console.log(item.name + ' added!');
        }
    }
    return nameArrayObj;
}

function setHpArray(){
    const hpArray =[];
    for(let item of dataObj){
        hpArray.push(item.hp);
    }
    return hpArray;
}

//save reference to canvas used for the chart
var ctx = document.getElementById('caught-seen-chart').getContext('2d');
//create chart on the canvas
var encounterChart = new Chart(ctx, {
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
var ctx2 = document.getElementById('hp-chart').getContext('2d');
//grab our string returning from makeHpArray parse it to an object
const dataObj = JSON.parse(makeHpArray(pokestats));
console.log(dataObj);
//create rules for our new chart
var hpChart = new Chart(ctx2, {
    
    type: 'bar',
    data: {

        labels: setNameArray(),
        datasets: [
            {
            label: 'HP by caught pokemon',
            data: setHpArray(),
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

//save reference to canvas used for the chart
var ctx = document.getElementById('height-chart').getContext('2d');
//create chart on the canvas
var heightChart = new Chart(ctx, {
    type: 'bar',
    data: {

        labels: makeNameArray(pokestats),
        datasets: [
            {
            label: 'Height by seen pokemon',
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
                    stepSize: 2,
                  
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
//save reference to canvas used for the chart
var ctx = document.getElementById('weight-chart').getContext('2d');
//create chart on the canvas
var heightChart = new Chart(ctx, {
    type: 'bar',
    data: {

        labels: makeNameArray(pokestats),
        datasets: [
            {
            label: 'Weight by seen Pokemon',
            data: makeWeightArray(pokestats),
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
                    stepSize:50,
                  
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