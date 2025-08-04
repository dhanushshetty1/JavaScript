
// object litrals

const mysm = Symbol("key1")


const JsUser = {
    name: "Dhansuh",
    "Full name" : "Dhanush Shetty",
    [mysm] : "myKey1",
    age: 18,
    location : "Mysore",
    email: "dhasnuhshetty@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mysm]);

JsUser.email = "shetty@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "dhansuh@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS users");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS users ${this["Full name"]}`);
    
}

console.log("hello "+ JsUser.greeting());
console.log("hello "+ JsUser.greetingTwo());
