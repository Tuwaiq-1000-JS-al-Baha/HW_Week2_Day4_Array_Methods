const people = ["jerks", "nice people", "jerks", "nice people", "nice people"]

/*--- using an arrow function for the callback ---*/
const jerks = people.filter(persons => persons === "jerks")
console.log(jerks)

const cars = [
  { color: "red", make: "BMW", year: 2001 },
  { color: "white", make: "Toyota", year: 2013 },
  { color: "blue", make: "Ford", year: 2014 },
  { color: "white", make: "Tesla", year: 2016 },
]
let firstWhiteCar = cars.find(function (car) {
  return car.color === "white"
})
// firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}
let missingCar = cars.find(function (car) {
  return car.color === "black"
})
// missingCar = undefined
/*--- using an arrow function for the callback ---*/
let firstWhiteCar = cars.find(cars => cars.year === "2014")

const notoldcar = cars.find(function (car) {
  return car < 2014
})
console.log(notoldcar)

