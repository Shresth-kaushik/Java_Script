// Arrow functions, also known as fat arrow functions,
// are a concise syntax for writing functions in JavaScript.
// They provide a shorter and more elegant way to define 
// functions compared to traditional  function expressions. 
// Arrow functions were introduced in ECMAScript 6 (ES6) and 
// have become widely adopted in modern JavaScript development.


// ==> IMPORTANT INFO <== 

// Arrow functions can have zero or more parameters, and the 
// parentheses are required when there are multiple parameters
//  or no parameters. If there is only one parameter, the
//   parentheses can be omitted.


// basic syntax for the arrow function is 
const functionName = (parameter1, parameter2,) => {
    // Function body
    // Code to be executed
    // Optional return statement
  };


  // Example of the Arraw function:
  const add_Num = ( a , b) =>{
    return a+b;
  }

  const ans = add_Num(4,5);
  console.log(ans);
  //   console.log(add_Num(4,6));


  const addNumbers = (a, b) => {
    const sum = a + b;
    return sum;
  };


  const addNumber = (a, b) => a + b;

  

  

