"use strict";

//Set is a collection of unique values
const ordersSet = new Set(["A", "B", "B", "B", "C", "D", "E"]);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has("A"), ordersSet.has("$"));
ordersSet.add("T");
console.log(ordersSet);
ordersSet.delete("A");
console.log(ordersSet);

for (const order of ordersSet) console.log(order);
