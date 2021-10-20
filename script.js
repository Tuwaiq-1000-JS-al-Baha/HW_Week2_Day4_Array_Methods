//Question 5:
//Filter out all "jerks"!
//Put them in an array called jerks

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const people2=people.filter( people=> people==="jerks")
console.log(people2)

//Question 6:
//Find the first car whose year is older than 2014 and assign it to a variable named notTooOldCar;
const cars = [
  { color: 'red', make: 'BMW', year: 2001 },
  { color: 'white', make: 'Toyota', year: 2013 },
  { color: 'blue', make: 'Ford', year: 2014 },
  { color: 'white', make: 'Tesla', year: 2016 }
];

let notTooOldCar = cars.find(cars => cars.year < 2014)
console.log(notTooOldCar);

//Find the index of the first match
let notTooOldCarIndex = cars.findIndex(cars => cars.year < 2014)
console.log(notTooOldCarIndex);