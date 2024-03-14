"use strict";

const message = `What is your favourite programming language
0: JavaScript
1: Python
2: Rust
3: C++"`;

var pollButton = document.querySelector(".poll");

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const response = Number(prompt(message));
    if (response >= 0 && response <= 3) this.answers[response] += 1;
    this.displayResults("array");
    this.displayResults("string");
  },
  displayResults: function (type) {
    if (type === "array") {
      console.log(this.answers);
      return;
    }

    if (type === "string") {
      console.log(`Poll results are ${this.answers}`);
      return;
    }
  },
};

pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));
