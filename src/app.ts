import { shuffleCups } from '../src/utils';
const button = document.getElementById('shuffle'); 
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const cup = document.querySelector('input:checked');
const userChoice = cup.textContent;


let winTally = 0;
let lossTally = 0;
let ball = 0;

button.addEventListener('click', () => {
  ball = Math.ceil(Math.random() * 3);
});

if(userChoice === shuffleCups(ball)) {
  winTally++;
} else {
  lossTally++;
}

wins.textContent = winTally.toString();
losses.textContent = lossTally.toString();
