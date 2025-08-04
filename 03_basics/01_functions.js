// console.log("D");
// console.log("H");
// console.log("A");
// console.log("N");
// console.log("U");
// console.log("S");
// console.log("H");


function sayMyName(){
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("S");
    console.log("H");
}

//sayMyName()

function add(num1,num2){
    // console.log(num1+num2);
    return num1+num2
} 

const result = add(3,4)
// console.log("Result: ", result);

function loginUserMessage(username){
    if(!(username === undefined)){
        return `${username} just logged in`
    }
    console.log("Enter a vailed username");
    
}
//console.log(loginUserMessage("Dhanush-Shetty"));

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Dhanush",
    price: 199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleobject(user)
handleobject({
    username: "Dhanush",
    price: 199
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

