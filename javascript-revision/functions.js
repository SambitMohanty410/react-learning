function greet(name = "Guest") {  //default parameter value
  console.log("Hello, " + name + "!");
}

greet();
greet("Sambit");

const greetArrow = name => "Hello, " + name + "!";  // arrow function with one parameter value,only return line present in body so no curly braces and  no return keyword

console.log(greetArrow("Sambit"));
