//callback
const nums = [100, 2, 5, 42, 99];
const odds = nums.filter(num => num % 2 !== 0);
console.log(odds);


//Question 5
//* Filter out all "jerks"!
//* Put them in an array called jerks
//// jerks equals ["jerks", "jerks"]
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
let jerks = people.filter(function(person) {
    return person === "jerks";
  });
  console.log(jerks);


//Q6
//* Find the first car whose year is older than 2014 and assign it to a 
//variable named `notTooOldCar`;
// notTooOldCar = {color: 'red', make: 'BMW', year: 2001}
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const older = cars.find(function (car) {
  return car.year < 2014
})

console.log(older)

//bounse
// Find the index of the first car whose year is older than 2014 and assign 
//it to a variable named `notTooOldCarIndex`;
// notTooOldCarIndex = 0
const cars1 = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];
const notTooOldCarIndex = cars1.findIndex(car => car.year < 2014)

console.log(notTooOldCarIndex)
