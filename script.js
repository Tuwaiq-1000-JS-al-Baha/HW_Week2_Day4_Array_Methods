console.log("-----Q5")
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter(jerks => {
    if (jerks === "jerks") {
        return jerks
    }
})
console.log(jerks)
console.log("-----Q6")
const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
];
let notTooOldCar = cars.find(car => car.year < 2014)
console.log(notTooOldCar)
console.log("------Bonus Q1")
let notTooOldCarIndex = cars.findIndex(car => car.year < 2014)
console.log(notTooOldCarIndex)
