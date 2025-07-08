setTimeout(() => {                     // function is just passed not executed executed after given time
  console.log("Hello");    
}, 2000);





function greeting(greetFunction) {
  greetFunction();
}

greeting(()=>console.log("Hi"));
