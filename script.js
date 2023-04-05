let score = 0;
let cost = 15;
let tambahClick = 1;
let tambahIdle = 0;

let item1Cost = 50;
let item1Level = 0;
let item1Add = 1;

let item2Cost = 100;
let item2Level = 0;
let item2Add = 5;

let multiplier = 0;
$(window).on("load", function(){
    score = localStorage.getItem("currScore");
    cost = localStorage.getItem("currCost");

    tambahClick = localStorage.getItem("currTambahclick");
    tambahIdle = localStorage.getItem("currTambahidle");

    item1Cost = localStorage.getItem("currItem1cost");
    item1Level = localStorage.getItem("currItem1level");
    item1Add = localStorage.getItem("currItem1add");
});



function buyButton() {
    if (score >= cost) {
        score -= cost;
        cost = Math.round(cost * 1.15);

        if (cost > 100 && cost < 1000) {
            tambahClick += 10;
        } else if (cost > 1000 && cost < 10000) {
            tambahClick += 100;
        } else if (cost > 10000 && cost < 100000) {
            tambahClick += 1000;
        } else {
            tambahClick += 1;
        }

        document.getElementById("score").innerHTML = score;
        document.getElementById("cost").innerHTML = cost;
        document.getElementById("tambah").innerHTML = tambahClick;
    } else {
        alert("Score tidak cukup untuk membeli");
        return;
    }
}

function addToScore() {
    score += tambahClick;
    document.getElementById("score").innerHTML = score;
}

function buyItem1() {
    if (score >= item1Cost) {
        score -= item1Cost;
        item1Level++;
        item1Add = Math.round(item1Add * 1.1);
        item1Cost = Math.round(item1Cost * 2);

        let add = Math.pow(2, multiplier);
        multiplier++;
        tambahClick += add;

        document.getElementById("score").innerHTML = score;
        document.getElementById("item1Cost").innerHTML = item1Cost;
        document.getElementById("item1Level").innerHTML = item1Level;
        document.getElementById("tambah").innerHTML = tambahClick;
    } else {
        alert("Score tidak cukup untuk membeli");
        return;
    }
}

function buyItem2() {
    if (score >= item2Cost) {
        score -= item2Cost;
        item2Level++;
        item2Add = Math.round(item2Add * 1.1);
        item2Cost = Math.round(item2Cost * 1.25);

        if (item2Level > 10 && item2Level < 30) {
            tambahIdle += 2;
        } else if (item2Level > 30 && item2Level < 50) {
            tambahIdle += 4;
        } else if (item2Level > 50 && item2Level < 70) {
            tambahIdle += 6;
        } else if (item2Level > 70 && item2Level < 90) {
            tambahIdle += 8;
        } else if (item2Level > 90) {
            tambahIdle += 10;
        } else {
            tambahIdle++;
        }

        document.getElementById("score").innerHTML = score;
        document.getElementById("item2Cost").innerHTML = item2Cost;
        document.getElementById("item2Level").innerHTML = item2Level;

        if (tambahIdle > 0) {
            if (document.getElementById("tambahps") === null) {
                $("#scorebar").append(
                    "<p class='card-text'>+<span id='tambahps'>1</span> per detik</p>"
                );
            }
            document.getElementById("tambahps").innerHTML = tambahIdle;
        }
    } else {
        alert("Score tidak cukup untuk membeli");
        return;
    }
}

setInterval(function () {
    score += tambahIdle;
    document.getElementById("score").innerHTML = score;
}, 1000);
