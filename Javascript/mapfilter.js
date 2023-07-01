// map is used to iterate over the array of element
// it always return same length of output array as input
// it is used to apply logics (add, sub, mult, div)
// map is function that will will take one more function which is called a call-back function

// Syntax : Map(()=>{})

var a = [4,5,9,3,23,21,34,56,76,85,5,12,47,32]
console.log(a.map((data)=>{
  return data*2
}))

console.log(a.map((data)=>{
  return data>30
}))

// filter is used to filter out the data
// it may or may not return the same length of output
// it only return those values for which condition ior output is true
console.log(a.filter((data)=>{
  return data>30
}))


var b = [-1,-2,0,1,2]
console.log(b.map((data)=>{
  return data*2
}))
// filter only return those values for which condition or output is true
console.log(b.filter((data)=>{
  return data*2
}))


