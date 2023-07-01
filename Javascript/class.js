class language {
  // all declarations defined inside the constructor, we can't define any variable inside a class
  constructor(name, country) {
    this.name = name
    this.country = country
  }
  greet = () => {return `Say hi to ${this.name}`}
}

var Hindi = new language("Hindi","India")
console.log(Hindi.greet())
console.log(Hindi.name)
console.log(Hindi.country)