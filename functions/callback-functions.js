"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

transformer("TeStING My Test String hahaha", upperFirstWord);
transformer("TeStING My Test String hahaha", oneWord);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");

greeterHey("Tulio");

greet("Hey")("LOL");

//Using Arrow Function

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHeyArrow = greetArrow("HHIIII");

greeterHeyArrow("Tulio");

greetArrow("HIHIHIHI")("LOLOLOLOLOL");

//Another Example
const topFn = function (a) {
  return function (b) {
    return function (c) {
      console.log(`${a} +-+ ${b} +-+ ${c}`);
    };
  };
};

const topTest = topFn("One");
const topTestTwo = topTest("Two");
topTestTwo("Three");

topFn("Ten")("Nine")("Eight");

//Using Arrow Function
const topFnArrow = (a) => (b) => (c) => console.log(`${a} +-+ ${b} +-+ ${c}`);

const topTestArrow = topFnArrow("One");
const topTestTwoArrow = topTestArrow("Two");
topTestTwoArrow("Three");

topFnArrow("Ten")("Nine")("Eight");
