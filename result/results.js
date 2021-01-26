import pokemon from '../pokemon.js';
import {getPokeStats} from '../localstorage.js';


const pokestats = getPokeStats();
const table = document.getElementById('poke-list');
const link = document.getElementById('go-play');

link.addEventListener('click', () =>{
    localStorage.clear();
});
addToTable();

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

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});


//commented out for this part of assignemnt

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
 
