// We can declare the function inside the function:
function myfun(){
    const myfunction  = ()=>{
        console.log("I am inside the myfun");
    }

    const add = (num1 , num2)=>{
        return (num1+num2);
    }

    const multiply = (num1,num2) =>{
        return num1*num2;
    }

    const subtract = (num1 ,num2)=>{
        if(num1 >= num2)
        return num1-num2;

        else
        return num2 - num1;
    }

    console.log("Inside the myfun above the rest function ");
    myfunction();
    console.log(add(4,5));
    console.log(multiply(4,5));

    console.log(subtract(15,10));
}

myfun();