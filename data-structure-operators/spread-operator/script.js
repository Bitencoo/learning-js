const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "NewItem"];
console.log(newMenu);
console.log(...newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
console.log(...mainMenuCopy);

//Merge array
const menu = [...newMenu, mainMenuCopy];
console.log(menu);
console.log(...menu);

//Works on Iterables
const myName = "Tulio";
const letters = [...myName];
console.log(letters);
console.log(...myName);

//Functions
function printNumbers(numA, numB, numC) {
  console.log(`${numA}, ${numB}, ${numC}`);
}

const nums = [1, 2, 3];
printNumbers(...nums);

const printNumbersArrow = (numA, numB, numC) => console.log(numA, numB, numC);
printNumbersArrow(...nums);

//Objects
const copyRestaurant = { ...restaurant, founder: "Tulio" };
console.log(copyRestaurant);
