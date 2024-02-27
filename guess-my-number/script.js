"use strict";
const initialScore = 20;
let randomNumber = generateNewRandomNumber();
const highscore = document.querySelector(".highscore");
const score = document.querySelector(".score");
const message = document.querySelector(".message");
const secretNumber = document.querySelector(".number");

score.textContent = initialScore;
highscore.textContent = 0;

document.querySelector(".again").addEventListener("click", function () {
  score.textContent = initialScore;
  setMessage("Start guessing...");
  secretNumber.textContent = "?";
  changeBackgroundColor("#222");
  document.querySelector(".guess").value = null;
  randomNumber = generateNewRandomNumber();
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  noNumberSelected(guess);

  if (guess === randomNumber) {
    generateHighScore();
    changeBackgroundColor("#60b347");
    secretNumber.textContent = randomNumber;
    setMessage("Congratulations!");
    return;
  }

  if (guess < randomNumber) setMessage("Too low...");
  if (guess > randomNumber) setMessage("Too high...");

  score.textContent -= 1;
});

function generateHighScore() {
  if (Number(highscore.textContent) < Number(score.textContent)) {
    highscore.textContent = score.textContent;
  }
}

function generateNewRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function noNumberSelected(guess) {
  if (!guess) {
    setMessage("No number selected!");
    return;
  }
}

function changeBackgroundColor(color) {
  document.querySelector("body").style.backgroundColor = color;
}

function setMessage(newMessage) {
  message.textContent = newMessage;
}
