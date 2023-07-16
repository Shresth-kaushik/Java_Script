// In JavaScript, default parameters allow you to specify default values for 
// function parameters. If a parameter is not provided or is explicitly set to
//  undefined, the default value will be used instead. This feature helps to make
//   functions more flexible and reduces the need for excessive parameter checking.

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
  }
  greet(); // Output: Hello, Guest!
  greet("John"); // Output: Hello, John!
  

//   In the above code, we have a greet function that takes a name parameter. 
//   The default value of name is set to "Guest". If no argument is provided
//    when calling the greet function, it will use the default value and output 
//    "Hello, Guest!". If an argument is passed, it will use the provided value and output "Hello, {name}!".



// function multiply(a,b){
//     if( typeof b === 'undefined'){
//         b==2;
//     }
//     return a*b;
// }

function multiply(a, b = 2) {
    return a * b;
  }
  
  console.log(multiply(5)); // Output: 10
  console.log(multiply(5, 3)); // Output: 15
  