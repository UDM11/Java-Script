const users = [
  { name: "Hari", age: 22 },
  { name: "Sita", age: 19 },
  { name: "Ram", age: 25 }
];

const adults = users.filter(user => user.age > 20);

console.log(adults);
// [
//   { name: "Umesh", age: 22 },
//   { name: "Ram", age: 25 }
// ]
