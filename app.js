var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

var x = document.querySelector('#score-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. Random number
    var dice = Math.floor(Math.random()*6) + 1;

    // 2. Display the result
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
});