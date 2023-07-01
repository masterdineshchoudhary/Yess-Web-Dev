// for, while, do-while, for of, for in

// for = iterate over the array as well as print the array
let city = ["Hadapsar", "London", "Delhi", "Pune", "Mumbai", "Nashik"]
// for(i=0;i<5;i++) {
//   console.log(i)
// }
for(i=0;i<city.length;i++) {
  console.log(city[i])
}
for(i=0;i<city.length;i++) {
  console.log(`<li>${city[i]}</li>`)
}

let area = [
  "Hadapsar",
  "London",
  ["Pune", "Rani", "Nashik"],
  "Kolhapur",
  "Bihar",
];
for(i=0;i<area.length;i++) {
  if(Array.isArray(area[i])) {
    for(j=0;j<area[i].length;j++) {
      console.log(area[i][j])
    }
  } else {
    console.log(area[i])
  }
}

// first it will check 
var i = 10;
while(i<5) {
	console.log(i);
	i++;
}

var i = 10;
do {
	console.log(i);
	i++;
}while(i<5);

//ES6
// for of 

var city1 = ["pune", "mumbai", "london", "delhi"]
for(mycity1 of city1) {
	console.log(mycity1)
}

var city2 = ["pune", "mumbai", ["red", "yellow", "green"], "delhi", "amsterdam"]
for(mycity2 of city2) {
	if(Array.isArray(mycity2)) {
		for(mycolor2 of mycity2) {
			console.log(mycolor2)
		}
	} else {
		console.log(mycity2)
	}
}