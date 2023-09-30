// The every() method in JavaScript is an array method that checks if all elements 
// in an array satisfy a specific condition. It tests whether all elements pass a
//  provided function and returns a boolean value indicating the result.



// const numbers = [2, 4, 6, 8, 10];

// const allEven = numbers.every(function(number) {
//   return number % 2 === 0;
// });

// console.log(allEven); // Output: true

const numbers = [2, 5, 6, 8, 11];

const allEven = numbers.every(function(number) {
  return numbers % 2 === 0;
});

console.log(allEven); // Output: false

