// Block scope vs Function scope 

//let and const are block scope
//var is function scope 

// 1.Function Scope:
// In JavaScript, variables and functions declared inside a function are only accessible within that function. This means they have function scope. Here's an example:

function myFunction() {
    var x = 10;  // Function-scoped variable
    console.log(x);
  }
  
  myFunction();  // Output: 10
  console.log(x);  // Error: x is not defined
  

//   In the example above, the variable x is declared inside 
//   the myFunction() function. It is only accessible within 
//   that function. If we try to access x outside the function, we'll get an error.


// Block Scope:
//  Starting from ES6 (ECMAScript 2015), JavaScript introduced block scope with the introduction
//  of let and const keywords. Variables declared with let and const have block scope, which means
//  they are only accessible within the block where they are defined. A block is denoted by a pair of curly braces {}.

function myFunction() {
    if (true) {
      let x = 10;  // Block-scoped variable
      console.log(x);
    }
    console.log(x);  // Error: x is not defined
  }
  
  myFunction();


//   In the example above, the variable x is declared inside the if block. It is only accessible within that block. If we try to access x outside the block, we'll get an error.
// It's important to note that variables declared with var keyword do not have block scope, but rather function scope. They are accessible throughout the entire function where they are defined, regardless of blocks.
  

function myFunction() {
    if (true) {
      var x = 10;  // Function-scoped variable
      console.log(x);
    }
    console.log(x);  // Output: 10
  }
  
  myFunction();

  
//   In the example above, the variable x is declared with var inside the if block. However, since var has function scope, it is accessible throughout the myFunction() function, even outside the if block.

// In summary, function scope applies to variables and functions declared within a function, while block scope applies to variables declared with let or const within a block.