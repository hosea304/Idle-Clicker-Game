let score = 0;
let name = "Bunny";

let cost = 15;
let tambah = 0;

function buyButton(){
    if(score >= cost)
    {
        score-=cost;
        tambah += 1;
        cost = Math.round(cost * 1.15);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("cost").innerHTML = cost;
        document.getElementById("tambah").innerHTML = tambah;
    }
}

function addToScore(amount){
    score+=amount;
    document.getElementById("score").innerHTML = score;
}

setInterval(function(){
    score+=tambah;
    document.getElementById("score").innerHTML = score;
},1000);