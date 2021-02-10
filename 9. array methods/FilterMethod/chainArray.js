const products = [
    {name: "gold star", price: 20},
    {name: "mushroom", price: 40},
    {name: "green potato", price: 30},
    {name: "banana", price: 10},
    {name: "red shell", price: 50},
];


// const filtered = products.filter(product => product.price > 20);
// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`
// });

const promos = products
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
