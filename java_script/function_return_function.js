// function returning function :

// Example : 
function myfun(){
    function hello(){
       return "Hello World ";
    }
    return hello;
}

const ans = myfun();
console.log(ans());


//------------------------->>  CHATGPT <<--------------------------------
// In java Script function can be treated as the values like the another
// data type . This means we can return the function from another function 

// EXAMPLE ::

function createMultiplier(multiplier){
    
    // Inner function that will be returned :
    function multiply(number){
        return number*multiplier;
    }
    // Outer function that will return the inner function 
    return multiply;
}

var multiplyBy4 = createMultiplier(4);
console.log(multiplyBy4(5));   // our multiplier is 4 and number is 5 ==> outout will be 20

