
const scores = [10, 30, 15, 25, 50, 40, 5, 80, 20];

const firstHS = scores.find((score) => {
    
    return score > 25;
});

console.log(firstHS);