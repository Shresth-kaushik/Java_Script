// Certainly! Here are some commonly used array methods in JavaScript along with code examples:

// 1. Push (used to add the element at the end of the array ):
let names =["amit" , "deepu" ,"sahil" , "aksh" ];
names.push("nitin" , "Vansh");
console.log(names);


let fruits = ['apple', 'banana'];
fruits.push('orange', 'mango');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']

// 2. pop (to remove the element from the end of the array );
console.log(fruits.pop());
console.log(names.pop());



// 3. shift : (To remove the first element from the array );
console.log(fruits.shift());
console.log(names.shift());


// 4.unshift (to add one or more element at the begning of the element )
fruits.unshift("Mangoes " , "Grapes");
console.log(fruits);

names.unshift("Neeraj " , "Shivam" ,"Rohit" ,"Chillu " ,"Yash");
console.log(names);


// 5.concat = ( To join or combine two or more array )
let concated_array = fruits.concat(names);
console.log(concated_array);


let concated = names.concat(fruits);
console.log(concated);


// 6. Join (all the elements of the array joined to form a single string );

let fruit = ['apple', 'banana', 'orange'];
let fruitString = fruit.join(', ');
console.log(fruitString); // Output: 'apple, banana, orange'


