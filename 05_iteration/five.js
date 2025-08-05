const myNums = [1,2,3]
// const myTotal = myNums.reduce( function(acc,currval){
//     return acc + currval
// },0 )

const myTotal = myNums.reduce( (acc,curr) => (acc+curr),0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "Js course",
        price:2999
    },
    {
        itemName: "java course",
        price:1999
    },
    {
        itemName: "python course",
        price:3999
    },
    {
        itemName: "dats science course",
        price:2999
    },
]

const totalCost = shoppingCart.reduce((acc,item) =>(acc+item.price),0 )
console.log(totalCost);
