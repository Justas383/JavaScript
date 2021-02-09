//filter method- non-destructive
const scores = [10, 30, 15, 25, 50, 40, 5];

// const filtScores = scores.filter((score) => {
//    return score > 20;
// });

// console.log(filtScores);


const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: true},
    {name: 'chiun-li', premium: false},
    {name: 'bielka', premium: true}
]
const preU = users.filter(user => {
    return user.premium;
});

console.log(preU);