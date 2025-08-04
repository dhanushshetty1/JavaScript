//const tinderUser = new Object() // single 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shetty"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    fullName :{
    userFullName:{

        firstName: "Dhanush",
        lastName: "Shetty"
        }
    }
}
//console.log(regularuser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)//{} => is used to make sure the output is mergered and its recommened to use even tho its option bcz that act as target
/* 
How Object.assign(target, ...sources) works:
It copies properties from source objects to the target object.

It returns the target.

If multiple sources have the same key, later sources override earlier ones.
*/

const obj3 ={...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "Shetty@gmail.com"
    },
    {
        id: 2,
        email: "Dhasnuh@gmail.com"
    },
    {
        id: 3,
        email: "DhasnuhShetty@gmail.com"
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//return arrays
// console.log(Object.values(tinderUser)); // retunr values
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnproperty('isLoggedIn'));

const course ={
    coursename : "JS by Shetty",
    price: "969",
    courseInstructor: "Dhansuh"
}
//course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

cons