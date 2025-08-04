// Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);//Object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleDateString())//1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("01-14-2023");

let myTimeStamp = Date.now()

console.log(myTimeStamp) ;
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // ms to sec

let newDate = new Date("01-14-2023");
newDate.toLocaleDateString('default', {
    weekday: "long",
    timeZone: 'Asia/Kolkata' 
})