/*
Clone using object.assign

*/

const obj1 = {
    key1:"value1",
    key2 :"value2"
}

// cloning the object 1 in other object :
const obj2 = obj1; // In the heap memory both the object are pointing towards the same memory location 
// i.e If we add new key value pair to the obj1 it will also be added to the obj 2.
obj1.key3 = "value3";
console.log(obj2);
console.log(obj1);

//------------>> Copying using the {... } spread  operator <<-------------
/*
The spread operator is used for creating the shallow copying of the object 

Object.assign()=>  it only creates a shallow copy of the object, and nested objects or
 arrays are still referenced in the cloned object. For deep cloning, other methods 
 like JSON.parse(JSON.stringify()) or external libraries are necessary.
*/


// Source object
const originalObject = { a: 1, b: 2, c: 3 };

// Clone the object using the spread operator
// const clonedObject = { ...originalObject };

// shallow copying using the assign operator.
const clonedObject = Object.assign({},originalObject);

console.log(clonedObject); // Output: { a: 1, b: 2, c: 3 }

originalObject.d = 4;
console.log(originalObject);
console.log(clonedObject); // d value can't be added to the clonedObject because 
// spread operator perform only the shallow copying;


