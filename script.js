const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const jerks = people.filter(function (jerk) {
    return jerk === 'jerks'
})

console.log(jerks)