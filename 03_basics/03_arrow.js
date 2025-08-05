const user ={
    username: "Dhanush",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`);
        
    }
}
// user.welcomeMessage()

// user.username ="Shetty"
// user.welcomeMessage()

// function chai(){
//     let username = "Shetty"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
    let username = "Dhanush"
    console.log(this.username);
    
}
//chai()

const name = () => ({username: "Dhanush"})
console.log(name());
