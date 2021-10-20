const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks1 = people.filter(jerks => jerks== "jerks" )
console.log(jerks1)

///////////////////////////////////////////////////////////////////////////////////
const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
];
let notTooOldCar = cars.find(car => car.year < 2014)
console.log(notTooOldCar)
let notTooOldCarIndex = cars.findIndex(car1 => car1.year < 2014);
console.log(notTooOldCarIndex);
