//Hoisting is the behaviour in the JavaScript where the variable 
//and the function are moved to the top of the their 
//containing scope during the compilation phase,before the code is executed 
//This means that you can use variables and call functions before they are actually declared in the code


// Variable hoisting  :

// When the variable is declared using the 'var' keyword , 
//ts declaration is hoisted to the top of the scope.
// For example:

console.log(x);  // Output: undefined
var x = 5;

// => Explanation <= 

// In the above code, even though the console.log statement appears 
//  before the variable x is declared, it doesn't throw an error. 
//  Instead, x is hoisted to the top of the scope, and its value 
//  is undefined at that point. This is because the initialization
//   (x = 5) is not hoisted.



//Function Hoisting:
// Function declarations are also hoisted to the top of the scope. 
// This means that you can call a function before it is defined in 
// the code. For example:


helloWorld();

function helloWorld(){
    console.log("Say Hello World");
}


// it's important to note that hoisting behaves differently for variables 
// declared with let and const keywords. Unlike var, variables declared with 
// let and const are not hoisted to the top of the scope. Instead, they are
// hoisted to the top of their block scope (within the nearest curly braces).
// However, they are not accessible before their declaration, resulting in a
// ReferenceError if you try to access them before their initialization.


// Means to say that if a variable is declared with let/const 
// are not hoisted to the top of the scope rather hoisted at the 
// top of their block :
