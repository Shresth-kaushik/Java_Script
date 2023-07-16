// Ceratin string functions are there -> 
// trim()
// to Uppercase()
// tolowercase()
// slice()

let f_name = "   HarISh ";
console.log(f_name);
console.log(f_name.length);

// Use trim method to cut out the spaces :

// We must assign the value to newvariable after the method applicability 
first_name = f_name.trim();  //here "Harish"
console.log(first_name);
console.log(first_name.length);


console.log(f_name.toUpperCase());
console.log(f_name.toLowerCase());


// slice method to trim the variable :

let fi_name ="Deepashu";
// In it starting index(included ) && end_index(Exclusive);
let newstring = fi_name.slice(0,4) // it gave output as Deep
console.log(newstring);



// String concatenation :
let s1 = "17";
let s2 = "20";

s3 = s1+s2;
console.log(s3)

// If we have to add the concent of the number :
s4 = +s1 + +s2;
console.log(s4);

let str1 = "Ankit";
let str2 = "kaushik";
str3 = str1 + str2;
console.log(str3);



// Template strings :
// My name is Shresth and my age is 21 ;
let my_name = "Shresth";
let age = 21;

let about = `My name is ${my_name} and my age is ${age} `;
console.log(about);


// Bug in java script:
console.log(typeof null);
// Its shows the object but type of null is -> null itself;




// BigInt data type :
let my_number = BigInt(12);
// Saftely How long interger we can store in java script:
console.log(Number.MAX_SAFE_INTEGER);

console.log(my_number);

// BigInt performs the operation only with big int: