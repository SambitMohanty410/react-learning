const arr1 = ["Sambit", 21];
const arr2 = ["Bhubaneswar"];

const combined = [...arr1, ...arr2]; // no nested array element , both array elements in single array

console.log(combined);




const obj1 = { name: "Sambit", age: 21 };
const obj2 = { city: "Bhubaneswar",...obj1 }; // element of 1st object in 2nd object


console.log(obj2);


