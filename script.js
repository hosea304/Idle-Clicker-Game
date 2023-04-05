let score = 0;
let cost = 15;

let tambahClick = 1;
let tambahIdle = 0;

let charlvl = 1;
let item1Cost = 50;
let item1Level = 0;

let item2Cost = 100;
let item2Level = 0;

let multiplier = 0;

$(window).on("load", function () {
  if (
    "currCharlvl" in localStorage != null ||
    "currCharlvl" in localStorage != NaN
  ) {
    charlvl = parseInt(localStorage.getItem("currCharlvl"));
    score = parseInt(localStorage.getItem("currScore"));
    cost = parseInt(localStorage.getItem("currCost"));

    tambahClick = parseInt(localStorage.getItem("currTambahclick"));
    tambahIdle = parseInt(localStorage.getItem("currTambahidle"));

    item1Cost = parseInt(localStorage.getItem("currItem1cost"));
    item1Level = parseInt(localStorage.getItem("currItem1level"));

    item2Cost = parseInt(localStorage.getItem("currItem2cost"));
    item2Level = parseInt(localStorage.getItem("currItem2level"));

    multiplier = parseInt(localStorage.getItem("currMultiplier"));
  } else {
    charlvl = 1;

    score = 0;
    cost = 15;
    tambahClick = 1;
    tambahIdle = 0;

    item1Cost = 50;
    item1Level = 0;

    item2Cost = 100;
    item2Level = 0;

    multiplier = 0;
  }

  document.getElementById("lvl").innerHTML = "Click Level " + charlvl;

  document.getElementById("score").innerHTML = score;
  document.getElementById("cost").innerHTML = cost;
  document.getElementById("tambah").innerHTML = tambahClick;

  document.getElementById("item1Cost").innerHTML = item1Cost;
  document.getElementById("item1Level").innerHTML = item1Level;
  document.getElementById("tambah").innerHTML = tambahClick;

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
});

function buyButton() {
  if (score >= cost) {
    charlvl++;
    score -= cost;
    cost = Math.round(cost * 1.15);

    if (cost > 100 && cost < 1000) {
      tambahClick += 10;
    } else if (cost > 1000 && cost < 10000) {
      tambahClick += 100;
    } else if (cost > 10000 && cost < 100000) {
      tambahClick += 1000;
    } else if (cost > 100000 && cost < 1000000) {
      tambahClick += 10000;
    } else if (cost > 1000000) {
      tambahClick += 100000;
    } else {
      tambahClick += 1;
    }

    document.getElementById("lvl").innerHTML = "Click Level " + charlvl;
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
    item1Cost = Math.round(item1Cost * 2);

    multiplier++;
    let add = Math.pow(2, multiplier);
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
    item2Cost = Math.round(item2Cost * 1.25);

    tambahIdle += item2Level;

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

$(window).on("beforeunload", function () {
  localStorage.setItem("currCharlvl", charlvl);

  localStorage.setItem("currScore", score);
  localStorage.setItem("currCost", cost);
  localStorage.setItem("currTambahclick", tambahClick);
  localStorage.setItem("currTambahidle", tambahIdle);

  localStorage.setItem("currItem1cost", item1Cost);
  localStorage.setItem("currItem1level", item1Level);

  localStorage.setItem("currItem2cost", item2Cost);
  localStorage.setItem("currItem2level", item2Level);

  localStorage.setItem("currMultiplier", multiplier);
});

function resetValues() {
  charlvl = 1;
  score = 0;
  cost = 15;
  tambahClick = 1;
  tambahIdle = 0;

  item1Cost = 50;
  item1Level = 0;

  item2Cost = 100;
  item2Level = 0;

  multiplier = 0;

  localStorage.removeItem("currCharlvl");
  localStorage.removeItem("currScore");
  localStorage.removeItem("currCost");
  localStorage.removeItem("currTambahclick");
  localStorage.removeItem("currTambahidle");
  localStorage.removeItem("currItem1cost");
  localStorage.removeItem("currItem1level");
  localStorage.removeItem("currItem2cost");
  localStorage.removeItem("currItem2level");
  localStorage.removeItem("currMultiplier");

  document.getElementById("lvl").innerHTML = "Click Level " + charlvl;
  document.getElementById("score").innerHTML = score;
  document.getElementById("cost").innerHTML = cost;
  document.getElementById("tambah").innerHTML = tambahClick;
  document.getElementById("item1Cost").innerHTML = item1Cost;
  document.getElementById("item1Level").innerHTML = item1Level;
  document.getElementById("item2Cost").innerHTML = item2Cost;
  document.getElementById("item2Level").innerHTML = item2Level;
  document.getElementById("tambahps").innerHTML = "";
}
