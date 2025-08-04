//primitive

// 7-types : String,number,boolean,null,undefined,symbol(unquie),BigInt

//js is dynamic type
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

const bigNumber = 43738462783256354236452n


// reference type  or non primitive

// arrays,objects,fuctions

const heros = ["Shetty","Dhanush","brumbrum"]
let myObj = {
    name : "Dhanssuh",
    age : 21
}

/* 
typeof=>
    null = objects

*/

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); //functions

// for non primitive the return type is object 
// Stack memory => copy is sent
// heap memory => reference is sent

let myYt = "Dhansuh Shetty"
let anotherName = myYt
anotherName = "Shetty"

console.log(myYt);
console.log(anotherName); //bcz it is primetive and a new copy is created

let userOne = {
    email : "dhanushshetty@gmail.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "shetty@gmail.com"

console.log(userOne);
console.log(userTwo);



