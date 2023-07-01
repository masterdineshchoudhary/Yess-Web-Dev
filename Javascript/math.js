console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.random()*1000)

// always take towards lower side
console.log(Math.floor(10.9))
console.log(Math.floor(15.5))

// always take towards higher side
console.log(Math.ceil(10.9))
console.log(Math.ceil(15.5))

console.log(Math.random()*2500)
// if don't want in decimal, we can use floor
console.log(Math.floor(Math.random()*2500))


console.log(Math.round(10.1))
console.log(Math.round(10.4))
console.log(Math.round(10.499))
console.log(Math.round(10.501))
console.log(Math.round(10.5))
console.log(Math.round(10.6))

// want a random number in a specific range
// syntax: console.log(Math.floor(Math.random()*(max-min))+min)
console.log(Math.floor(Math.random()*(52-35))+35)

console.log(Math.sin(1))
console.log(Math.cos(1))
console.log(Math.tan(1))
console.log(Math.log(0))
console.log(Math.log(1))

// Math.pow(x,y) it returns the value of x to the power of y
console.log(Math.pow(2,3))

// sqrt() to find square root of the number
console.log(Math.sqrt(64))

// abs() returns the aboslute(positive) value of the given number
console.log(Math.abs(-5.67))

console.log(Math.max(0,150,30,20,-1, -8, -6.7))
console.log(Math.min(150,30,20,-1, -8, -6.7))

console.log(Math.E)
console.log(Math.PI)
console.log(Math.floor(Math.PI))
console.log(Math.PI.toFixed(3))