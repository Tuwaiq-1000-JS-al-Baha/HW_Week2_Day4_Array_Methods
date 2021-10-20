const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
// jerks equals ["jerks", "jerks"]


const jerks = people.filter(person => person === "jerks")
console.log(jerks);
//_______________//

const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
];

/*--- using an arrow function for the callback ---*/
let notTooOldCar = cars.find(car => car.year < 2014);
console.log(notTooOldCar);

//_______________//

/*--- using an arrow function for the callback ---*/
let notTooOldCarIndex = cars.findIndex(car1 => car1.year < 2014);
console.log(notTooOldCarIndex);
