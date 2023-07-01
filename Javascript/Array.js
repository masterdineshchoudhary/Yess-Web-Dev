// Array is a collection of homogenous as well as heterogenious data type

//Homogeneous
// let x = ["Hi", "Hello", "Text"] // Array of string
// let x = [4,67,124,3.5] // Array of numbers
// let x = [true, false, false, true, true] // Array of boolean

//Heterogenous
// let d = ["dinesh", 34, true, false]

let cities = ["Delhi", "Pune", "Mumbai", "Nashik"];
console.log(typeof cities);
console.log(cities.length);
console.log(cities[0]);
console.log(cities[2]);

// Array Operations
// 1. Push => add value in the end of the array
// 2. Pop => remove last value of the array
// 3. Unshift => add value in the first of the array
// 4. Shift => remove first value of the array
// all the above methods will affect the original array

cities.push("Latur");
console.log(cities);

cities.pop();
// cities.pop(3) // indexing doesn't work in js for pop() it will remove last only
console.log(cities);

cities.shift();
// cities.shift(3) // indexing doesn't work in js for shift() it will remove first only
console.log(cities);

cities.unshift("Dubai");
console.log(cities);

let suburban = ["Hadapsar", "London", "Delhi", "Pune", "Mumbai", "Nashik"];
console.log(suburban.slice(3));
console.log(suburban.slice(1, 6));
console.log(suburban.slice(0, -1));

// splice(start, deletecount, value)
console.log(suburban.splice(2, 2));
console.log(suburban.splice(3, 0, "Boston", "Germany"));
console.log(suburban.splice(1, 1, "London"));
console.log(suburban);

// indexOf
console.log(suburban.indexOf("London"));
console.log(suburban.indexOf("Germany"));
console.log(suburban.indexOf("England"));

console.log(suburban[3]);

var a1 = ["a", "b", "g", 4];
var a2 = [1, "m", "d", 4, "z"];
console.log(a1 + a2);
console.log(a1.concat(a2));

var b1 = "Hii";
var b2 = ["a", "lmn", 4];
console.log(Array.isArray(b1));
console.log(Array.isArray(b2));

let area = [
  "Hadapsar",
  "London",
  ["Delhi", ["Pune", "Mumbai"], "Rani", "Nashik"],
  "Kolhapur",
  "Bihar",
];
console.log(area[1]);
console.log(area[2]);
console.log(area[2][1]);
console.log(area[2][1][0]);
