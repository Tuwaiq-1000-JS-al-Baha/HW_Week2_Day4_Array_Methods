//Question1

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter((person) => person  === "jerks")
console.log(jerks)


//Question2

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];

let notTooOldCar = cars.find((IndexoldCar) => IndexoldCar.year <= 2014)

console.log(notTooOldCar)
//Question3

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];

let notTooOldCarIndex = cars.findIndex((oldCar) => oldCar.year <= 2014)

console.log(notTooOldCarIndex)