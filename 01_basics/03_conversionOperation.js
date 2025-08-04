let score = "33abc" //NaN => not a number

// let score = "Dhanush" //NaN
// let score = true //1
//let score = undefined //Nan
// let score = null //0
// let score = "33" //33
// let score = 33 //33
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN , check if its number or not, it will simply typecast to number even if its not a number

let num = 3;
let negnum = -num;
console.log(negnum);

console.log("1"+2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 +"2"); //32

console.log(+true);//1
console.log(+"");//0
console.log(+false);







