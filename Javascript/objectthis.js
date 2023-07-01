// global declared var
var firstname = "Munna"
var lastname = "Micheal"
var sayHi = {
  // local declared var
  firstname: "Dinesh",
  lastname: "Choudhary",
  greet: function() {
    // return `Say hi to ${firstname} ${lastname} `// prints outer variables
    // return `Say hi to ${sayHi.firstname} ${sayHi.lastname} ` 
    // OR
    return `Say hi to ${this.firstname} ${this.lastname} `

  }
}
console.log(sayHi.greet())