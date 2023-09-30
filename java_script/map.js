/* Map() => data structure is java script is used/ allow to store the key value pair 
 and is similar to object .
but there is difference between and advantages of using a Map() over the object 

1. key : map -> key can have any data type where in object keys are automatically converted to 
the string. This means that you can use complex data types like objects or even functions as keys in a Map

2.Order of insertion: A Map preserves the order of key-value pairs based on their insertion order, while objects do not guarantee the order of their properties.

3.Size property: A Map has a built-in property called size, which makes it easy to get the number of key-value pairs in the map.

4.Iteration: Map provides convenient methods for iteration, making it easier to work with the key-value pairs.


---->>  Set method is used to insert the value in the map 
---->> get method is used to excess the value corresponding to the particular key .
---->> keys() method is used to print the all the keys of the map 
 */


// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can only have string or symbol
// as key 
// in maps you can use anything as key
// like array, number, string 




// object literal 
// key -> string 
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }



// key value pair 
// const person = new Map();
// person.set('firstName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(person.get(1));
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value)
// }



// ----------->> Storing the object as the key value pair <<---------------

const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);