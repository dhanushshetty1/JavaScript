var c = 399


if(true)
{
    let a = 10
    const b = 20
    var c = 30
}

//console.log(c);//var still prints

function one(){
    const username = "Dhanush"

    function two(){
        const website = "Youtube"
        //console.log(username);
        
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username = "dhanush"
    if(username === "dhanush"){
        const website = " yt"
        //console.log(username + website);
    }
    //console.log(website);
    
}
//console.log(username);

//+++++++++++++++++++++++++++++++++++++++++++++++++//

function addone(value){
    return num +1
}

addone(5)

const addTwo = function(num){
    return num+2;
}
addTwo(5)

