const marvel_heros = ["Thor","Iron-man","Spider-man"]
const dc_heros = ["Super-man","flash","Batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
///console.log(marvel_heros[3][2]);//Batman

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const allHeros = [...marvel_heros,...dc_heros]//This spreads both arrays and merges them element-by-element: gives output same as concate but working is diffrent, 1st it splits all the element in the array as induviual elements of both array and then merge them all together
console.log(allHeros);

const another_array = [1, 2, 3, [4, 5, 6],7,[8,[9,10,11]]]
const  real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Dhanush"));
console.log(Array.from("Dhanush"));

console.log(Array.from({name : "Dhansuh"})); //[]
//Since {name: "Dhansuh"} is an object, and not iterable or array-like, it returns an empty array.
Array.from(Object.keys({name: "Dhanush"})) // ['name']


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

