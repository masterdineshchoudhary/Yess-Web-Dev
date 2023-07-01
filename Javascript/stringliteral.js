let movie = "Avengers"
let ind = " Hollywood"
let type = "Action"
let rating = 3.8

// ES5
let a ="An "+movie+" is an "+type+" movie with rating of "+rating+" and from "+ind;
console.log(a)
// ES6
let b =`An ${movie} is an ${type} movie with rating of ${rating} and from ${ind}`;
console.log(b)