var student = "Dinesh"
// console.log(student.toUpperCase())
// console.log(student.toLowerCase())

var a = "John"
// console.log(a.slice(1))
// console.log(a.slice(0))
// console.log(a.slice(2))
// console.log(a.slice(-1))
// console.log(a.slice(-2))

var city = "Amsterdam"
// console.log(city.slice(2,5))
// console.log(city.slice(0,4))
// console.log(city.slice(0,-1))
// console.log(city.slice(0,-2))

var village = "laTur"
// console.log(village.charAt(0).toUpperCase())
// console.log(village.charAt(2).toLowerCase())
// console.log(village.charAt(0).toUpperCase() + village.slice(1).toLowerCase())

var checkLength = " John . "
console.log(checkLength.length)
// removes space from front and behind
console.log(checkLength.trim())
console.log(checkLength.replace(" ", ""))
// removes space from between also
console.log(checkLength.replace(/ /g, ""))

 var text = "I am learning Javascript"
 console.log(text.replace("Javascript","JS"))
 
 var text2 = "I am learning Javascript and Javascript Concepts"
 console.log(text2.replace("Javascript","JS"))
 console.log(text2.replace(/Javascript/g,"JS"))
 console.log(text2.replaceAll("Javascript","JS"))


