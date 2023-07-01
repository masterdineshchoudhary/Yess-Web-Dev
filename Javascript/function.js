// ES5

function nameOfFunction(parameter) {
  return output
}

// function add(a,b) {
//   return a+b
// }
// console.log(add(10,20))
// console.log(add('10','20'))

// function add(a,b,c) {
//   return a+b+c
// }
// console.log(add(10,20,30))
// console.log(add('10','20','30'))

function isEven(num) {
  if(num%2==0 ){
    console.log(`number ${num} is even`)
  } else {
    console.log(`number ${num} is odd`)
  }
}
isEven(10)
isEven(9)

// ES6
let add = (a,b) => {return a+b}
console.log(add(5,3))

let isOdd = (num) => {
  if(num%2!=0) {console.log('odd')}
  else {console.log('even')}
}
isOdd(7)