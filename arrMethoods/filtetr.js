const arr = [44, 54, 5, 56, 56, 356, 56, "sdf"];
const strOfarry = [];
const numOfarry = [];

const str = arr.filter((item) => {
  if (typeof item !== "string") {
    return item;
  }
});
console.log(str);
//  -------------------------find the adult person on this arry
const persons = [
  { name: "mr x", age: 18 },
  { name: "mr s", age: 14 },
  { name: "mr f", age: 32 },
  { name: "mr gx", age: 12 },
  { name: "mr s", age: 23 },
  { name: "mr dsf", age: 34 },
  { name: "mr se", age: 4 },
];
const adultPerson = persons.filter((person) => {
  return person.age > 18;
});
console.log("adult persons", adultPerson);
//  --------------------------------testing in filter methoods
persons.filter((item, index, arr) => {
  console.log(arr, index);
});
