//for 

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

const arr = [1,2,3,4,5]

// for(const num of arr){
//     console.log(num);
    
// }

const greeting = "Hello world"

// for(const greet of greeting){
//     console.log(greet);
    
// }

//Maps

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

// for(const key of map){
//     console.log(key); 
// }

for(const [key, value] of map){
    console.log(key + ' :- '+value); 
}

const myObject = {
    'game1': 'NFS',
    'game2': 'SpiderMan'
}
//does not work on objects
for(const [key,values] of myObject){
    console.log(key, ':-' ,values); 
}

