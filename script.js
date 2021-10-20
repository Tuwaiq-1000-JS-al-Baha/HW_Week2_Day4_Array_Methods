
//**Question 5:**
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"]
const newList = people.filter(function (people1) {
    if (people1 === 'jerks')
        return people1

})

console.log('jerks =', newList);


//**Question 6:**

const cars = [
    { color: 'red', make: 'BMW', year: 2001 },
    { color: 'white', make: 'Toyota', year: 2013 },
    { color: 'blue', make: 'Ford', year: 2014 },
    { color: 'white', make: 'Tesla', year: 2016 }
]

const newCarList = cars.find(function (car) {
    if (car.year < 2014)
        return car

})

let notTooOldCar = this.newCarList
console.log('notTooOldCar = ', newCarList)

//**Bonus Question 1:**

const firstCar = cars.findIndex(function (first) {
    if (first.year < 2014)
        return first
})

let notTooOldCarIndex = this.firstCar

console.log('notTooOldCarIndex = ' + firstCar)

