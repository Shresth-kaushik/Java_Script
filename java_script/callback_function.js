// Callback Function : callback functions are the function which are passed
// as a argument in the  another function and is executed at a later point in
// time or in response to a specific event

// callback functions are commonly used in asynchronous programming where the execution of the
// does not occur in the sequential manner .

// Here is the sample Example: 


function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      var data = 'Some data';
      callback(data); // invoking the callback function with the data
    }, 2000); // a delay of 2 seconds
  }
  
  function processData(data) {
    console.log('Processing data:', data);
  }
  
  fetchData(processData); // passing the processData function as a callback

  
  // EXPLAINATION  of the above code :

//  In the example above, we have a function fetchData that simulates an asynchronous
//  operation. It takes a callback function as an argument. After a delay of 2 
//  seconds, it invokes the callback function with some data.


// The another function 'processData' is also defined and it takes the 
// data as the paremeter and the logs of message to the console .

//  When we call  "fetchData(processData)" , we're passing processData as the callback
//  function to fetchData. So when the asynchronous operation completes, fetchData
//   invokes the processData function with the retrieved data.

// Callback functions are powerful because they allow us to control the flow
//  of execution in asynchronous scenarios. They enable us to perform actions 
//  after an operation completes without blocking the main execution thread.
  




//------------------>> Sample example for understanding <<---------------------

// a can be array , variable , object , 
function myfun(a){
    console.log(a);
    console.log("Hello world");
}

// a => object
myfun({name_ : "Ankit" , age : 21});

// a can be array :
myfun([1,2,3]);

// a can be string :
myfun("Aksh");




// IF THE ARGUMENT PASSED IS AN FUNCTION : THEN 

function myfunction(callback){
    console.log("Inside the ")
    // callback means that the calling of the myfunction2 
    callback("Deepanshu");

}

function myfunction2(a){

    console.log("inside the myfunc2 function ");
    console.log(`your name is ${a}`);
}

// if argument passed is an => function 
myfunction(myfunction2);



