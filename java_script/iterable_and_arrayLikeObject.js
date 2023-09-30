// In java script the iterable are the object that can be iterated over , we can loop through the elements one by one .
// An array-like object => is an object that has indexed elements and a length property like an array, but may not have all the methods and properties that an array has.

const iterable = [1, 2, 3];

for (const element of iterable) {
  console.log(element);
}

// array-like objects => these objects have indexed elements and a length 
// property, but they may not have all the array methods like push(), 
// pop(), or forEach(). However, you can still access their elements 
// using numeric indices .


// array like object 
const arrayLike = { 0: 'apple', 1: 'banana', 2: 'orange', length: 3 };

for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}


