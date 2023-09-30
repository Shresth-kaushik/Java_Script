/*
Set is the iterable , which store the data .
Set has its own methods ... No index based excess .
Order is not guaranteed => The order in which the elements are store may change
Unique elements only(No duplicate is allowed). 
*/

const numbers = new Set() ; // Initialization  of the set 
                       // Set(inside the set write the iterable).
const num = new Set([1,5,3]);
console.log(num);
console.log(num[1]); // Undefined because index based excess is not possible 


// inside Set => String can also be there .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
const numstr = new Set("ankit");
console.log(numstr);
console.log(numstr[3]);


// ------------------------->>>    <<<----------------------
const set = new Set() ;
set.add(1);
set.add(2);
set.add(3);
console.log(set);

// if we add the duplicate in the set.
const names = ['ankit' , 'aksh' , 'amit' , 'Deepu'];

set.add(names);
set.add(names);// can not be added to the set because the duplicate are not allowed .
console.log(set);

set.add(['item1', 'item2']);
set.add(['item1', 'item2']);// Not a duplicate because the items are the same but the array address is different .

console.log(set);

// ----------------->>> has function <<<-------------
// has function return a boolean value in the java script => it is used to check wheather a particular element is prersent in the set or not .
if(set.has(1))
console.log("1 is present");
else
console.log("1 is not present ");


//If we want to remove the duplicate from the array then Set can be used :
const arr =[1,4,5,5,3,7,8,1]; // element are repeating 
const newset = new Set(arr);
console.log(newset);


