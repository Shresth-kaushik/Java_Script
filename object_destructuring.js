
// Object destructuring in JavaScript is a feature that allows
//  you to extract individual values from an object and assign
//   them to variables in a concise and convenient way.
//    It provides a shorter syntax for accessing and working 
//    with properties of an object.


const person = {
    name_: 'John',
    age: 30,
    city: 'New York'
  };
  
  // Extracting properties using object destructuring
  const { name_, age, city } = person;
  
  console.log(name_); // Output: John
  console.log(age); // Output: 30
  console.log(city); // Output: New York
  



//   Object destructuring can also be used with function parameters. Here's an example:

function printPersonInfo({ name, age, city }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
  }
  
  const person2 = {
    name: 'Harrish',
    age: 30,
    city: 'California'
  };
  
  printPersonInfo(person2);
  














