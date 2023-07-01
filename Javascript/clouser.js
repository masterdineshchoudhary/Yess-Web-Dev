// global scope: can be accessed from anywhere
// local scope: can be accessed within an object or function or loop

// function restricts the access or scope that is reffered as closure(here, {} makes a closure)

var a = 10
function add() {
  var b = 20;
  return a+b
}

console.log("add= ",add())
console.log("a= ",a)
// console.log("b= ",b) // not defined error (as declared locally)

// here b is accessible even though it is within the curly brackets
// but if we use 'let' instead of 'var' b cannot be accessed
// var doen't make a closure inside the for loop whereas it makes a closue inside a function

var a = 10
for(i=0;i<5;i++) {
  var b = 20;
  // let b = 20;
  console.log(a+b+i)
}

console.log("a is ", a)
console.log("b is ", b) // but not defined error when it is let
