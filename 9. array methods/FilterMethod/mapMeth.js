//Map method- non-destructive

const prices = [10, 30, 15, 25, 50, 40, 5, 80, 20];

const salePrices = prices.map((price) => {
return price / 2;
})

console.log(salePrices);