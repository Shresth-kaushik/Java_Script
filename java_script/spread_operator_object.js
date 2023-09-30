// In JavaScript, the spread operator (...) can be 
// used with objects to create new object literals or
//  to merge multiple objects into one. It allows you 
//  to easily copy properties from one object to another
//   or create new objects with additional properties. 
//   The spread operator works with both shallow and
//    deep copies of objects.




// 1. Copying properties from one object to another


// const obj1 = { name: 'John', age: 25 };
// const obj2 = { ...obj1 }; // Creates a shallow copy of obj1
// console.log(obj2); // { name: 'John', age: 25 }



// 2. Merging multiple objects into one:

const obj1 = { name: 'John' };
const obj2 = { age: 25 };
const obj3 = { city: 'New York' };

const mergedObj = { ...obj1, ...obj2, ...obj3 };
console.log(mergedObj); // { name: 'John', age: 25, city: 'New York' }


//3. Adding additional properties to an object:

// const obj1 = { name: 'John', age: 25 };
// const obj2 = { ...obj1, city: 'New York' };
// console.log(obj2); // { name: 'John', age: 25, city: 'New York' }




// It's important to note that the spread operator creates a shallow copy 
// of an object. If the object contains nested objects or 
// arrays, those nested references will be copied instead
//  of creating new instances. To perform a deep copy, you 
//  would need to use additional techniques such as recursion
//   or libraries that support deep cloning.

