// Rest parameters in JavaScript allow you to represent an indefinite number of 
// arguments as an array. They are denoted by three consecutive dots 
// (...), followed by the parameter name.

// Here's an example of using rest parameters in a function:

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
      result += number;
    }
    return result;
  }
  
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  
//   The rest parameter numbers captures all the arguments passed to the function as an array. 

// IMPORTANCE:=> 

// Rest parameters are useful when you want to pass a variable number
//  of arguments to a function without explicitly specifying each
//   argument. They provide flexibility and convenience in handling 
//   functions with an unknown number of parameters.

// NOTE : The rest parameter must be the last parameter as it collects the all rest/ left out arguments .
