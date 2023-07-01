// object= {}
// Array = []

// movie is an object and name, rating & type are the properties
var movie = {
  moviename: "Avengers", rating: 4.5, type: "Action"
}

console.log(typeof(movie))
console.log(movie.moviename)
console.log(movie.rating)
console.log(movie.type)

// add property
movie.lang = "English"
console.log(movie)

// update property
movie.rating = 5.7
console.log(movie)

// delete property
delete movie.lang
console.log(movie)

// accessing data
console.log(movie['moviename'])
console.log(movie['rating'])
console.log(movie['type'])

// the javascript 'for in' statement loops through the properties of an object
for(key in movie) {
  // console.log(key) // it displays only the key names
  console.log(movie[key])
}

var movies = [
  {
    "moviename": "Krish", 
    "rating": 4.7, 
    "type": "Action"
  },
  {
    "moviename": "Hulk", 
    "rating": 3.9, 
    "type": "Thriller"
  }
]

for(data of movies) {
  for(key in data) {
    console.log(data[key])
  }
}
