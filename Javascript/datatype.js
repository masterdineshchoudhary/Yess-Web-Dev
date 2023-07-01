// Boolean

a=true
b=false
c=true
// true is equivalent to 1
// false is equivalent to 0
console.log(a+b)
console.log(a-b)
console.log(a+c)
console.log(10+true)
console.log(10/false)
console.log("hi"+true)
console.log("hello" + false)
console.log(true + false)
console.log(true + true)
console.log("true" + "true")
console.log(false + false)



num1 = "10"
num2 = "20"
// ES5
console.log(parseInt(num1) + parseInt(num2))
// ES6
console.log(Number(num1) + Number(num2))

num3 = "10.34"
num4 = "20.12"
// ES5
console.log(parseFloat(num3) + parseFloat(num4))
// ES6
console.log(Number(num3) + Number(num4))

var city = "London"
console.log(parseInt(city))

var bool = true
console.log(parseInt(bool))


var p1 = "10Delhi"
var p2 = "Delhi10"
var p3 = "10Delhi123"
console.log(parseInt(p1) + " " + parseInt(p2) + " " + parseInt(p3))
console.log(Number(p1) + " " + Number(p2) + " " + Number(p3))