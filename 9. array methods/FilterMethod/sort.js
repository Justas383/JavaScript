const names = ["mario", "shaun", "lilija", "aivija", "kaziokas"];
 names.sort();
names.reverse(); //apvercia masyva, eina nuo paskutinio iki pirmo. pakeicia masyvo reiksme(destructive)
console.log(names);


const scores = [10, 50, 20, 5, 35, 70, 45];


const players = [
{names: "mario", score: 20},
{names: "luigi", score: 10},
{names: "chun-li", score: 50},
{names: "yoshi", score: 30},
{names: "shaun", score: 70},
]

players.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    } else if (b.score > a.score){
        return 1;
    } else {return 0};
});
console.log(players);