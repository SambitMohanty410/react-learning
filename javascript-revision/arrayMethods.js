const hobbies = ["reading", "coding", "cycling", "gaming"];

const index = hobbies.findIndex(hobby => hobby === "cycling");
console.log(index);

const hobbyMessages = hobbies.map(hobby => "I enjoy " + hobby); // map methods are  generally use to modify the incoming value of array elements into something new
console.log(hobbyMessages);

const hobbyList = ["reading", "coding", "cycling", "gaming"];   // map method used to convert array elements to object

const hobbyObjects = hobbyList.map(hobby => ({ Hobby: hobby }));

console.log(hobbyObjects);

