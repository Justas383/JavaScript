// const scores = [10, 30, 15, 70, 50, 40, 5, 80, 90];

// const result = scores.reduce((acc, curr) => {
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);


const scores = [
    {name: "mario", price: 20},
    {name: "yoshi", price: 40},
    {name: "Luigi", price: 30},
    {name: "mario", price: 10},
    {name: "crystal;", price: 50},
];


const marioTotal = scores.reduce((acc, curr) => {
if(curr.name === "mario"){
    acc += curr.price;
} return acc;
},0)
console.log(marioTotal);