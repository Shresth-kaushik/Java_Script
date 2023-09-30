// Array destructuring is a feature in JavaScript that allows you to extract values from an array 
// or iterable and assign them to variables in a concise way. It provides an easy and convenient 
// method for working with arrays by unpacking their values into separate variables.

// const array = [1, 2, 3];
// const [a, b, c] = array;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3

// console.log(array);




// Here we skipped the middle index:
const array = [1, 2, 3];
const [a, , c] = array;

console.log(a); // 1
console.log(c); // 3


