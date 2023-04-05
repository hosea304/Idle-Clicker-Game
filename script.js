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
        document.getElementById("murah").innerHTML = murah;
        document.getElementById("tambah").innerHTML = tambah;
    }
}

function buySedang(){
    if(score >= medium)
    {
        score-=medium;
        tambah += 20;
        medium = Math.round(medium * 1.5);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("medium").innerHTML = medium;
        document.getElementById("tambah").innerHTML = tambah;
    }
}

function buyMahal(){
    if(score >= mahal)
    {
        score-=mahal;
        tambah += 100;
        mahal = Math.round(mahal * 1.75);
        
        document.getElementById("score").innerHTML = score;
        document.getElementById("mahal").innerHTML = mahal;
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