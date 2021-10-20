
//Question 5:
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const nameOFpeple = people.filter(name => name === "jerks")
console.log(nameOFpeple)

console.log("_______")
//Question 6
const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
];

const olderCAR = cars.find(car => car.year < 2014)
console.log(olderCAR)

console.log("_______")
//Bonus Question 1
const firstWhiteCarIdx = cars.findIndex(car => car.year < 2014)
console.log(firstWhiteCarIdx)