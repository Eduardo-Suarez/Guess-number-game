'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
//console.log(randomNumber);
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let numberScore = Number(score.textContent);
let highScore = document.querySelector('.highscore');
let again = document.querySelector('.again');
console.log(number)

let check = document.querySelector('.check');
check.addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess){
        message.textContent = 'First, you need to put a number';
        message.style.color = 'red'
        return;
    }

    if (guess > randomNumber){
        console.log('te pasaste')
        numberScore -= 1
        score.textContent = numberScore
        message.textContent = 'You are to high'
        console.log(score)
    }else if (guess === randomNumber){
        number.textContent = randomNumber;
        message.textContent = 'Congrats, you find the number';
        message.style.color = 'green'
        message.style.fontSize = '25px'
        highScore.textContent = score.textContent;
        console.log('le atinaste')
    }else{
        console.log('te falta we')
        numberScore -= 1
        score.textContent = numberScore
        message.textContent = 'You are far below'
        console.log(score)
    }
})


again.addEventListener('click' , function () {
    //Generate a new number
    randomNumber = Math.floor(Math.random() * 20) + 1;

    //Reset score
    numberScore = 20;
    score = numberScore;

    //Reset messagues
    message.textContent = 'Start Guessing...';
    number.textContent = '?';
    message.style.color = 'white'
    message.style.fontSize = '2rem'

    //Clean Input
    document.querySelector('.guess').value = '';
})
