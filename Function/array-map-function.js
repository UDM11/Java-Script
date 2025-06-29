const users = [
  { name: "Hari", age: 22 },
  { name: "Sita", age: 19 },
  { name: "Ram", age: 25 }
];

const namesOnly = users.map(user => user.name);
const ageOnly = users.map(user => user.age);
console.log(namesOnly); // ["Umesh", "Sita", "Ram"]
console.log(ageOnly); // [22, 19, 25]