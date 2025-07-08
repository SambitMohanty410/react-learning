const person = {
  name: "Sambit",
  age: 21,
  greet() {
    console.log(this.age);  // this is used here to access other attributes  of its parent object
  }
};

person.greet();


const getPerson = () => ({ name: "Sambit" }); // way to create object onside single line arrow function 

console.log(getPerson());

class User {
  constructor(name, age) {    
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("Sambit", 21);
console.log(user1);

