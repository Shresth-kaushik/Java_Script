// Most useful in the React ;

// Parameter destructuring in JavaScript is a feature that allows you to extract individual values from objects or 
// arrays and assign them to variables in a concise and convenient 
// way. It is a shorthand syntax that simplifies the process of extracting values and can make your code more readable.

// Parameter destructuring can be used in function parameter lists, enabling you to directly access the properties of an object passed as an argument. Here's an example:

function printUserDetails({ name, age }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
  }
  
  const user = { name: 'John Doe', age: 25 };
  printUserDetails(user);
  