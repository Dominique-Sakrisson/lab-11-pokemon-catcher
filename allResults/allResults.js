import pokemon from '../pokemon.js';
import {getPokeStatsAll} from '../localstorage.js';
import { makeSeenArray, makeCaughtArray, makeNameArray, makeHpArray, makeHeightArray, makeWeightArray } from '../result/mungUtils.js'; 

const LISTS = 'LISTS';
const pokestats = getPokeStatsAll();

for(let items of LISTS){
    let nameArray = items.name;
    let id = items.id;
    let seen = items.seen;
    let caught = items.caught;
    let hp = items.hp;
    let height = items.height;
    let weight = items.weight;

    console.log(nameArray);
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
                    max: 20
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

/*
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
*/
