'use strict';
// Info
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No Input
  if (!guess) {
    displayMessage('⛔ No Number');

    //Player Wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.between').style.color = 'white';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Guess different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (guess < 0 || guess > 20) {
        displayMessage('🤦‍♂️ It must be between 1 and 20');
        document.querySelector('.between').style.fontSize = '2.4rem';
        document.querySelector('.between').style.color = 'red';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess > secretNumber) {
        displayMessage('📈 Too high');
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guess < secretNumber) {
        displayMessage('📉 Too low');
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      displayMessage('❌ Game Over!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#810000';
    }
  }
});

// Restart
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.between').style.color = 'white';
  document.querySelector('.between').style.fontSize = '1.4rem';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
