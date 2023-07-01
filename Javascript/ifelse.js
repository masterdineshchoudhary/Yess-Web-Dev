// let a = 9;
// if (a % 2 == 0) {
//   console.log(`Number ${a} is even`);
// } else {
//   console.log(`Number ${a} is odd`);
// }

let name = "John";
if (name == "Dinesh") {
  console.log(`Hi ${name} you are admin`);
} else if ((name = "Dinesh")) {
  console.log(`Hi ${name} you are super admin`);
} else {
  console.log(`Hi ${name} you are unknown`);
}

// Ternary Operator (?:)\

var a = 10;
console.log(a > 9 ? "true" : "false");
console.log(a > 10 ? a + 1 : a - 1);
console.log(a > 9 ? a + 1 : a - 1);
