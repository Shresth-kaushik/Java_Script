// The call() and apply are similar but differ in how they pass the arguments to the function :

// 1. call()
// functionName.call(thisArg, arg1, arg2 ); // Syntax of the call() method 

// 2. apply():
// The apply() method is similar to call(),
// but it accepts arguments as an array or 
// an array-like object. The first argument
// is the this context, and the second argument
// is an array (or an array-like object) 
// containing the function's arguments.

// functionName.apply(thisArg, [arg1, arg2,]);// Syntax of the apply() method.

function greet(name) {
    console.log(`Hello, ${name}! I am ${this.title}.`);
  }
  
  const person = { title: 'Mr.' };
  greet.apply(person, ['Alice']);
  // Output: Hello, Alice! I am Mr.
  


