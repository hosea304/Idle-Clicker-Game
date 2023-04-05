let score = 0;
let name = "Bunny";

function addToScore(amount){
    score+=amount;
    document.getElementById("score").innerHTML = score;
}