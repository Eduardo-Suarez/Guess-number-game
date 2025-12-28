'use strict';
//variable declaration
let randomNumber = Math.floor(Math.random() * 20) + 1;
//console.log(randomNumber);
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let numberScore = Number(score.textContent);
let highScore = document.querySelector('.highscore');
let again = document.querySelector('.again');
let actualHighscore = 0;
//console.log(number)

//logic of the check buttom.
let check = document.querySelector('.check');
check.addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    //We check if the user entered empty input
    if (!guess){
        message.textContent = 'First, you need to put a number';
        message.style.color = 'red'
        return;
    }

    //The basic logic of the game
    //When players is too high
    if (guess > randomNumber){
        console.log('te pasaste')
        numberScore -= 1
        score.textContent = numberScore
        message.textContent = 'You are to high'
        console.log(score)
    //When players wins
    }else if (guess === randomNumber){
        number.textContent = randomNumber;
        message.textContent = 'Congrats, you find the correct number!!!';
        message.style.color = 'white'
        message.style.fontSize = '25px'
        highScore.textContent = score.textContent;
        document.querySelector('body').style.backgroundColor = 'green'
        console.log('le atinaste')
    //When players is too low
    }else{
        console.log('te falta we')
        numberScore -= 1
        score.textContent = numberScore
        message.textContent = 'You are far below'
        console.log(score)
    }
})

//Logic of the again bottom, here reset teh imput and the message.
again.addEventListener('click' , function () {
    //Generate a new number
    randomNumber = Math.floor(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = "#222";

    //Reset score
    numberScore = 20;
    score.textContent = numberScore;

    //Reset messagues
    message.textContent = 'Start Guessing...';
    number.textContent = '?';
    message.style.color = 'white'
    message.style.fontSize = '2rem'

    //Clean Input
    document.querySelector('.guess').value = '';
})
