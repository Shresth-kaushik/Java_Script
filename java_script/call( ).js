// call method is a inbuilt function available on all function objects . 
// It allows you to invoke a function with a specified this value and arguments provided individually.
// Syantx : FunctionName.call(this.argument , arg , arg, ... );s

// functionName: The name of the function you want to call.

// thisArg: The value to be passed as the this parameter to the function when it is executed. 
// This determines the context in which the function will be executed. If you pass null or undefined,
//  the global object (e.g., window in a browser) will be used as the this value.

// arg1, arg2, ...: Optional arguments to be passed individually to the function being called.


const person = {
    name: "John Doe",
    greet: function (greeting) {
      console.log(greeting + ", I'm " + this.name);
    },
  };
  
  const anotherPerson = {
    name: "Alice",
  };
  
  person.greet.call(anotherPerson, "Hello"); // Output: Hello, I'm Alice 


  
//  ------------------------------------->> EXAMPLE  : 
const user1 ={
    firstname : "Ankit",
    age : 5,
    about : function(dost1 ,dost2){
        console.log(this.firstname , this.age , dost1,dost2);
    }
} 

const user2 ={
    firstname : "Shresth",
    age: 14
}

user1.about.call(user2); // here we pass the user2 as the current object ,
// calling the about function of the user1 for the current object 2;


user1.about.call(); // o/p will be  name-> undefined and age-> undefined 

// we can also pass the other argument . 
user1.about.call(user2,"aksh bhai","sahil mittr ");
