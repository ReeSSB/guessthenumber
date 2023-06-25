'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highScore = 0;
let attempt = 0;
let played = 0;
// let a, b, c, d, e;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const currentScore = function (curScore) {
  document.querySelector('.score').textContent = curScore;
};

document.querySelector('.reload').addEventListener('click', function () {
  location.reload();
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  attempt++;
  document.querySelector('.attempt').textContent = attempt;
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
    // when guess is correct
  } else if (guess === secretNumber) {
    displayMessage('🍕 Correct Number! 🎆💐👏😀');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score;
    currentScore(score);
    highScore += score;
    document.querySelector('.highscore').textContent = highScore;
    played++;
    document.querySelector('.played').textContent = played;

    // when guess is wrong and still score is available
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? displayMessage('📈 Number is High!')
        : displayMessage('📉 Number is Low!');

      if (guess > secretNumber || guess < secretNumber) score--;
      currentScore(score);
    } else {
      displayMessage('💥🤯 You lost the Game!');
      currentScore(0);
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Number is High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥🤯 You lost the Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //when guess is lower than secret number and still score is available
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Number is Low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥🤯 You lost the Game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // played++;
  // document.querySelector('.played').textContent = played;
  if (attempt === 0 && highScore === 0) {
    played = 0;
    document.querySelector('.played').textContent = played;
  }
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#efcc00';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
