let dbObj = {}

dbObj.user = [
{
  name: "Alvin",
  city: "Boston"
}, {
  name: "Priya",
  city: "Paris"
}
]

dbObj.calc = {
  sum: function(a,b) {return a+b},
  sub: (a,b) => {return a-b}
}

//ES5
// module.exports = dbObj

//ES6
export default dbObj