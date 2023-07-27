/*
The behavious of the `this` keyword is different as compared to the regular 
function . In Arrow 'this' is lexically scoped , which means it retains value
of this from surrrounding code . 
*/

// Regular function
function regularFunction() {
    console.log(this);
  }
  
  // Example 1: Calling the regular function in the global context
  regularFunction(); // 'this' refers to the global object (e.g., window in browsers)
  
  // Example 2: Calling the regular function as a method of an object
  const obj = {
    method: regularFunction
  };
  obj.method(); // 'this' refers to the 'obj' object
  
  // Example 3: Using 'bind' to set the value of 'this'
  const boundFunction = regularFunction.bind({ name: 'Bound Object' });
  boundFunction(); // 'this' refers to the object passed to 'bind'
  


// Arrow function
const arrowFunction = () => {
    console.log(this);
  };
  
  // Example 1: Calling the arrow function in the global context
  arrowFunction(); // 'this' retains the value of the outer scope (could be the global object or 'undefined' in strict mode)
  
  // Example 2: Calling the arrow function as a method of an object
  const obje = {
    method: arrowFunction
  };
  obje.method(); // 'this' retains the value of the surrounding lexical scope (outer scope), not the 'obj' object
  
  // Example 3: Using 'bind' has no effect on arrow functions
  const boundArrowFunction = arrowFunction.bind({ name: 'Bound Object' });
  boundArrowFunction(); // 'this' still retains the value from the outer scope
  
//   Keep in mind that arrow functions do not have their own this context and will
//    always inherit the value of this from the enclosing (surrounding) scope. This
//     makes them useful when you want to preserve the context of this without 
//     worrying about changes due to different function call patterns.