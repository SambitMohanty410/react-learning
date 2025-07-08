const { name: firstName, age }  = { // using alias of name as firstName 
  name: "Sambit",
  age: 21
};



console.log(firstName);  
console.log(age);       

const  [AfirstName, lastName]  = ["Sambit", "Mohanty"];



console.log(AfirstName); 
console.log(lastName);  


function greet({ name: firstName, age }) {   // destructuring of object that are passed as function argument
  console.log("First Name: " + firstName);
  console.log("Age: " + age);
}

const person = { name: "Sambit", age: 21 };

greet(person);


