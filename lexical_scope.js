// In Java Script the lexical scope is refers to the scope visibility and accessibility of variables, 
// functions, and objects based on their physical location within the source code. 
// Lexical scope is determined by the placement of variables and functions within the nested blocks or functions of the code .

//In JavaScript, each time a function is declared, a new scope is created .
//Scope determines the accessibility of the variables and functions .

// Variable and function defined within a particular scope are accessible only in
//that one or in inner scope


//Let us consider an example :
function outerFunction() {
    var outerVariable = 'I am from outer function';
// can be excessed anywhere , 
    function innerFunction() {
    var innerVariable = 'I am from inner function';
  
      console.log(outerVariable); // Accessible
      console.log(innerVariable); // Accessible
    }
  
    innerFunction();
    
    console.log(outerVariable); // Accessible
    // console.log(innerVariable); 

    // Not accessible (ReferenceError)
    //We can not excess the inner variable outside of it's block 
  }
  
  outerFunction();

  