let score = 0;
let name = "Bunny";

let murah = 15;
let medium = 150;
let mahal = 1500;
let tambah = 0;

function buyMurah(){
    if(score >= murah)
    {
        score-=murah;
        tambah += 1;
        murah = Math.round(murah * 1.15);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("tambah").innerHTML = tambah;
    }
}

function buySedang(){
    if(score >= medium)
    {
        score-=murah;
        tambah += 20;
        murah = Math.round(murah * 1.15);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("tambah").innerHTML = tambah;
    }
}

function buyMahal(){
    if(score >= mahal)
    {
        score-=murah;
        tambah += 100;
        murah = Math.round(murah * 1.15);
        
        document.getElementById("score").innerHTML = score;
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