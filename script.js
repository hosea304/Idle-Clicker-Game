let score = 0;
let name = "Bunny";

let cost = 15;
let tambah = 0;

let item1Cost = 50;
let item1Level = 0;
let item1Add = 1;

let item2Cost = 100;
let item2Level = 0;
let item2Add = 5;

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
    else
    {
        alert("Score tidak cukup untuk membeli");
        return;
    }
}

function addToScore(amount){
    score+=amount;
    document.getElementById("score").innerHTML = score;
}

function buyItem1(){
    if(score >= item1Cost)
    {
        score-=item1Cost;
        item1Level++;
        item1Add = Math.round(item1Add * 1.1);
        item1Cost = Math.round(item1Cost * 1.1);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("item1Cost").innerHTML = item1Cost;
        document.getElementById("item1Level").innerHTML = item1Level;
    }
    else
    {
        alert("Score tidak cukup untuk membeli");
        return;
    }
}

function buyItem2(){
    if(score >= item2Cost)
    {
        score-=item2Cost;
        item2Level++;
        item2Add = Math.round(item2Add * 1.1);
        item2Cost = Math.round(item2Cost * 1.1);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("item2Cost").innerHTML = item2Cost;
        document.getElementById("item2Level").innerHTML = item2Level;
    }
    else
    {
        alert("Score tidak cukup untuk membeli");
        return;
    }
}

setInterval(function(){
    score+=tambah;
    document.getElementById("score").innerHTML = score;
},1000);
