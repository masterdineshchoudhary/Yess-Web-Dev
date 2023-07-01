// ES5
// prototype refers to the inheritance
// with the help of protype we can be able to access other object properties in our object

function human(name, city) {
  this.name = name
  this.city = city
}

function robot(name) {
  this.name = name
  this.legs = 2
  this.age = 10
}

var John = new human("John","USA")
console.log(John)
console.log(John.name)
console.log(John.city)
console.log(John.legs)

var Pepper = new robot("Pepper")
console.log(Pepper)
console.log(Pepper.name)
console.log(Pepper.legs)
console.log(Pepper.age)

// Prototype -> Inheritance
console.log(human.prototype = new robot())
var Mike = new human("Mike","Russia")
console.log(Mike)
console.log(Mike.legs)
console.log(Mike.age)



// ES6 
class geo {
  constructor() {
    this.lat = 43.22
    this.long = 32.98
  }
}

class language extends geo {
  constructor(lang, country) {
    super()
    this.lang = lang
    this.country = country
  }
  greet = () => {return `Say hi to ${this.lang}`}
}

var Hindi = new language("Hindi", "India")
console.log(Hindi.greet())
console.log(Hindi.lang)
console.log(Hindi.country)
console.log(Hindi.lat)
console.log(Hindi.long)