// Find method :=> In java script find method is used to find a element with the
// specific condition in an array .It returns the first element that satisified the 
// condition else return the 'undefined' ;

// syntax of the method 
//array.find( callback (element[, index[, array]])[, thisArg] );

/*
Parameters:
callback: A function that is called for each element in the array. It takes three arguments:
element: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The array find() was called upon.
thisArg (optional): An object to which the this keyword refers inside the callback function.
The callback function should return a truthy value if the element satisfies the condition, or a falsy value otherwise.

*/

const numbers = [1, 2, 3, 4, 5];
const evenNumber = numbers.find((element) => element % 2 === 0);
console.log(evenNumber); // Output: 2


const users = [
    {user_id:1 , user_name:"Shresth" },
    {user_id:2 , user_name:"Aksh" },
    {user_id:3 , user_name:"Deepu" },
    {user_id:4 , user_name:"billa" },
    {user_id:5 , user_name:"Sahil" },
];

const answer = users.find((users) => users.user_id == 2);
console.log(answer);
//True -> present or else not 
