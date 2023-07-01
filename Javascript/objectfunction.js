let calc = {
  sum: function(a,b){return a+b},
  sub: (a,b) => {return a-b},
}
console.log(calc.sum(2,5))
console.log(calc.sub(5,3))

function language(name, country) {
  this.name = name
  this.country = country
  this.greet = () => {
    return `Say Hi to ${name}`
  }
}
// constructor notation 
var Hindi = new language("Hindi", "India")
console.log(Hindi)
console.log(Hindi.greet())

var English = new language("English", "USA")
console.log(English)
console.log(English.greet())