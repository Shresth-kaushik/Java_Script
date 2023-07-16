// Object inside the array -> to store the multiple user information

const user=[
    {user_id:1 , name_:"Aksh" , age:21},
    {user_id:2 , name_:"Nitin" , age:21},
    {user_id:3 , name_:"Deepanshu" , age:22},
    {user_id:4 , name_:"Sahil" , age:22},
]

console.log(user);

for(let i of  user){
    console.log(i.name_),
    console.log(i.age)
}

// Destructuring of the array of object:
const [{name_} , , {age}] = user;
console.log(name_);
console.log(age);

