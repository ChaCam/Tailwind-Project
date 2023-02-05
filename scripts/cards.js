var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");
var image4 = document.getElementById("image4");
var image5 = document.getElementById("image5");
var image6 = document.getElementById("image6");

function hideCards1() {
  card2.classList.toggle("hidden");
  card3.classList.toggle("hidden");
  card4.classList.toggle("hidden");
  card5.classList.toggle("hidden");
  card6.classList.toggle("hidden");
  card1.classList.toggle("w-[1750px]");
  image1.classList.toggle("w-[500px]");
}

function hideCards2() {
  card1.classList.toggle("hidden");
  card3.classList.toggle("hidden");
  card4.classList.toggle("hidden");
  card5.classList.toggle("hidden");
  card6.classList.toggle("hidden");
  card2.classList.toggle("w-[1750px]");
  image2.classList.toggle("w-[500px]");
}

function hideCards3() {
  card1.classList.toggle("hidden");
  card2.classList.toggle("hidden");
  card4.classList.toggle("hidden");
  card5.classList.toggle("hidden");
  card6.classList.toggle("hidden");
  card3.classList.toggle("w-[1750px]");
  image3.classList.toggle("w-[500px]");
}

function hideCards4() {
  card1.classList.toggle("hidden");
  card2.classList.toggle("hidden");
  card3.classList.toggle("hidden");
  card5.classList.toggle("hidden");
  card6.classList.toggle("hidden");
  card4.classList.toggle("w-[1750px]");
  image4.classList.toggle("w-[500px]");
}

function hideCards5() {
  card1.classList.toggle("hidden");
  card2.classList.toggle("hidden");
  card3.classList.toggle("hidden");
  card4.classList.toggle("hidden");
  card6.classList.toggle("hidden");
  card5.classList.toggle("w-[1750px]");
  image5.classList.toggle("w-[500px]");
}

function hideCards6() {
  card1.classList.toggle("hidden");
  card2.classList.toggle("hidden");
  card3.classList.toggle("hidden");
  card4.classList.toggle("hidden");
  card5.classList.toggle("hidden");
  card6.classList.toggle("w-[1750px]");
  image6.classList.toggle("w-[500px]");
}
