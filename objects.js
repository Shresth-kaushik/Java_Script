// Objects (Reference type)
// Arrays are  not sufficent , to handle the real world 
//problem.

// For the real World data -> We uses the concept of objects
// Objects stores the (Key-value ) pair 
// Objects do not have the index;


// How to create the object;
const person = {name:"Ankit" , age:22};
console.log(person);

console.log(typeof person);

// How to excess the data from the object 
console.log(person.name);

const p1 = {
    name:"Aksh",
    age : 21,
    hobbies :["Reading " , "Writing" , "Playing"]
}

console.log(p1);

p1.gender = "male";

console.log(p1);