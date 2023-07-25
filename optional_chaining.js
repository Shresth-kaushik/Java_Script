/*
Optional chaining is a feature in JavaScript that allows you to access properties
of an object without having to check for the existence of each property along the
chain manually. 

It helps to simplify code and prevent errors when dealing with nested objects and properties, 
especially when some of them might be undefined or null. 

The optional chaining syntax uses the (?.) operator to access properties, methods
, or elements within nested objects or arrays. 
*/

// Example : 
const user = {
    firstname : "Ankit",
    // address : {houseNo : '1234'}
}

console.log(user?.firstname);// if the firstname is present in the user object then print else return undefined.
console.log(user?.address?.houseNo);



// -------------------------------------------------------------------------------------

// Function inside the object 
const person ={
    fname : "Shresth",
    age: 21,
    about : function(){
        console.log(`Person's name is ${this.fname} and person's age is ${this.age} `)
        // this is refering to the current object (during runtime).  
    }
}
person.about();

console.log(this);



// -----------------------------------------------------------------------------
// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Deepanshu",
    age: 8,
    about: personInfo
}

const person2 = {
    firstName : "nitin",
    age: 18,
    about: personInfo
}

const person3 = {
    firstName : "aksh",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();