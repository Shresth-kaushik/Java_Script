// Computed Properties

// Computed properties, also known as computed property names, 
// are a feature in JavaScript that allows you to dynamically 
// compute the property names of an object. Instead of specifying 
// a static property name, you can use an expression enclosed in square
//  brackets [] to compute the property name at runtime.



// Example:
// const dynamicKey = 'foo';

// const obj = {
//   [dynamicKey]: 'Computed Property Value'
// };

// console.log(obj.foo); // Computed Property Value


const key1 = "Object1";
const key2 = "Object2";


const value1 ="myvalue1";
const value2 ="myvalue2";

// We have to frame like this =>
// const obj={
//     Object1:"myvalue1",
//     Object2 : "myvalue2"
// }

const obj ={
    key1 :value1,
    key2:value2

}
console.log(obj);


// 2nd method 
const obj2 ={
    [key1] :value1,
    [key2] :value2
}
console.log(obj2);



// 3rd  method  :
const obj3 ={}
obj3[key1] = value1;
obj3[key2] = value2;
console.log(obj3);

