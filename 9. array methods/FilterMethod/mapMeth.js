//Map method- non-destructive

const prices = [10, 30, 15, 25, 50, 40, 5, 80, 20];

const salePrices = prices.map((price) => {
return price / 2;
})

const products = [
    {name: "gold star", price: 20},
    {name: "mushroom", price: 40},
    {name: "green potato", price: 30},
    {name: "banana", price: 10},
    {name: "red shell", price: 50},
];
const saleProd = products.map((product) => {
    if (product.price > 30){
    return {name: product.name, price: product.price/2};
    }
    else {return product;}
});


console.log(salePrices);

console.log(saleProd);