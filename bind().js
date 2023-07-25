// bind() is also similar to the call(), and apply method but have a little difference , 
// bind() -> here the retrun type is function.

function about(hobby , favactor){
    console.log(this.firstname , this.age , `player of `,hobby ,`like the actor`, favactor);
}

const user1 ={
    firstname : "Shresth",
    age : 21,
}

const user2 = {
    firstname : "Ankit", 
    age : 22 
}

const fun = about.bind(user2 ,"Volleyball " , " Monaj Sir");
fun();

