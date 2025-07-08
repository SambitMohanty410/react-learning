const password = prompt("Enter your password:");

if (password === "7777") {
  console.log("Access granted");
} else if (password === "" || password === null) {
  console.log("No password entered");
} else {
  console.log("Access denied");
}


const hobbies = ["reading", "coding", "cycling", "gaming"];

for (const hobby of hobbies) {
  console.log(hobby);
}
