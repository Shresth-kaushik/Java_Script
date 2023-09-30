//splice() method is used to change the contents of an array by 
// removing, replacing, or adding elements at a specific index. It
//  modifies the original array in place and returns an array containing
//   the removed elements 

// Suntax : array.splice(start, deleteCount, item1, item2, ...);

// start: The index at which to start the modification. Negative values are allowed, indicating an offset from the end of the array.
// deleteCount (optional): The number of elements to remove from the array, starting from the start index. If deleteCount is 0, no elements are removed. 
// If omitted, all elements from the start index to the end of the array are removed.

// item1, item2, ... (optional): Elements to add to the array at the start index.


// Removing the elements 
let numbers = [1, 2, 3, 4, 5];
let removed = numbers.splice(2, 2);

console.log(numbers);  // Output: [1, 2, 5]
console.log(removed);  // Output: [3, 4]


//Replacing elements in the array 
let fruits = ['apple', 'banana', 'orange', 'kiwi'];
fruits.splice(1, 2, 'pear', 'grape');

console.log(fruits);  // Output: ['apple', 'pear', 'grape', 'kiwi']


//Adding the elements 
let colors = ['red', 'green', 'blue'];
colors.splice(1, 0, 'yellow', 'purple');

console.log(colors);  // Output: ['red', 'yellow', 'purple', 'green', 'blue']
