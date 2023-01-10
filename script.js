'use strict';

let magicNumber = Math.trunc(Math.random() * 20) + 1;
let scoreTotal = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no guess / input
  if (!guess) {
    displayMessage('🛑 No Number entered');

    // When the player wins
  } else if (magicNumber === guess) {
    document.querySelector('.number').textContent = magicNumber;
    displayMessage('Correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoreTotal > highScore) {
      highScore = scoreTotal;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is different
  } else if (magicNumber !== guess) {
    displayMessage(guess > magicNumber ? 'Too high' : 'Too low');
    scoreTotal--;
    document.querySelector('.score').textContent = scoreTotal;
  } else {
    displayMessage('GAME OVER');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  magicNumber = Math.trunc(Math.random() * 20) + 1;
  scoreTotal = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreTotal;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

console.log(magicNumber);
