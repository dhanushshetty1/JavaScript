const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const prog = ["js","rb","py","java"]

for (const key in prog) {
    //console.log(key);
    console.log(prog[key]);
    
}

// prog.forEach( function (item) {
//     console.log(val);
    
// })

 prog.forEach( (item) => {
    console.log(item);
 })

 function printMe(item){
    console.log(item);
    
 }

 prog.forEach(printMe())

 prog.forEach( (item,index,arr) => {
    console.log(item,index,arr);
 } )

 const myCode = [
    {
        lang: "Java",
        langfile: "java"
    },
    {
        lang: "JavaScript",
        langfile: "js"
    },
    {
        lang: "Python",
        langfile: "py"
    }
 ]

 myCode.forEach( (item) => {
    console.log(item.lang);
    
 } )