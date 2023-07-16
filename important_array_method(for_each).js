// Here we discuss about the different array methods :

// for each  loop 
// map 
// filter
// reduce 

// 1.for each loop :  Took a function as a argument :
// Just like the callback function 

const numbers =[1,4,5,2,6];

// a = number from the array and b => index 
function fun(a , b){
    console.log(`index is ${b} and number is ${a}`);
}
numbers.forEach(fun);


// There is also a shorthand method to write this :

numbers.forEach(function(number , index){
    console.log(`index is ${index} and the number after multiplying with 2  is ${number*2}`);
})


// Realistic use of the for each loop :
// array of the objects 
const users = [
    {firstname :"Amit " , age: 21},
    {firstname :"Sahil" , age: 22},
    {firstname :"Aksh " , age: 25},
    {firstname :"Deepu" , age: 24},
]

// Printing the first name of the all the users using the for each loop:

users.forEach(function(user , index){
    console.log(user.firstname, index );
})





// ------------->> MAP METHOD <<--------------------------
// Map take callback function as a input ;
// Map function form the new array for the given operation

const num =[5,6,7,8,9];

// It's important to return anything in the callback function :=> else it shows the output as undefined

// const square = function(n){
//     return n*n;
// }
// const squareNumber = num.map(square);
// console.log(squareNumber);


// Can also be done using the arrow function :
const squareNumber = num.map((n)=>{
    // return the cube of the elements :
    return n*n*n;
});
console.log(squareNumber);




// ---------->>> FILTER METHOD <<---------------
// Create the new array with all elements that pass the certain condition :
let numbe = [1, 2, 3, 4, 5];

let evenNumbers = numbe.filter(function(numbe){
  return numbe % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]



//----------------->> REDUCE<<----------------------
// Imporatant => mostly used in the java script .
// reduce: Applies a function to an accumulator and each element in the array to reduce it to a single value.

let data = [1, 2, 3, 4, 5];

let sum = data.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);
// here 0 is defined as the initial value of the accumulator :

console.log(sum); // Output: 15


// accumulator number return 
// 0           1       0+1 = 1 
// 1           2       1+2 = 3
// 3           3       3+3 = 6 
// 6           4       6+4 = 10 
// 10          5       10+5 = 15
// here the function return the value 15 


// Example for the user cart :
const carts = [{product_id : 1 , product_name : 'mobile' , price:12000 } , 
{product_id:2 , product_name:'laptop' , price: 60000} , 
{product_id:3 , product_name:'tv' ,price :45000},            
]

let totalamt = carts.reduce((totalprice , currentprice) =>{
 return totalprice + currentprice.price ;
} , 10000  ) // 10000  is the inital value 

console.log(totalamt);

