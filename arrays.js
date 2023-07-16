// Reference type :
// Array -> Ordered collection items
let fruits =["Apple" , "Mango" ,"Grapes ","Pineapple"];

// We can store any data type in the array :
let mixed =["apple" , 1,2,3.41, null, undefined];
console.log(mixed);

// To check whether the mixed is an array or not : 
console.log(Array.isArray(mixed));

// If we want to add more elements to the end of the array 
// PUSH method is used:
fruits.push("banana");
console.log(fruits);

// To remove element from the array :
console.log(fruits.pop());


// If we want to add and remove from the starting of the 
// array :
fruits.unshift("Oranges");
console.log(fruits);

console.log( "Removed fruit is" ,fruits.shift());


// Push and pop are faster than unshift and shift;
