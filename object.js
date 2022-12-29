const object = {
  name: "Mehedi",
  phone: "o54065065",
  man: false,
  sayPhone: function () {
    console.log(this.phone);
  },
};
object.sayPhone();

console.log(object["man"]);
// object is not etriable . we can modify an object by key value
object.age = 23; //we can add an key and valu in object

delete object.age; // we can delete any key using delete
// console.log(object);
