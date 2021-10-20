
/****filter*********** */
const people = ["jerks", "nice people", "jerks",
 "nice people", "nice people"];
 const valueRemove = "jerks";
 const filteredItems = people.filter(function(item) {
   return item == valueRemove
 })
 console.log(filteredItems)
