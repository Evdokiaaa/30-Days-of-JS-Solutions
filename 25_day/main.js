const btn_pop = document.querySelector(".btn__population");
const btn_lang = document.querySelector(".btn__language");
const dash = document.querySelector(".dash");
const country = document.querySelector(".countries");
const graph = document.querySelector(".graph");
const stats = document.querySelector(".stats");
const childd1 = country.children; //country
const childd2 = graph.children; //graph
const childd3 = stats.children; //number
let i, rdm, temp;

function showpop() {
  dash.innerText = "10 Most populated countries in the world.";

  for (i = 0; i < childd1.length; i++) {
    childd1[i].innerText = `country number: ${i + 1}`;
  }

  for (i = 0; i < childd3.length; i++) {
    rdm = Math.floor(Math.random() * 1000000);
    childd3[i].innerText = `${rdm}`;
    temp = Math.floor(rdm / 10000);
    childd2[i].style.width = `${temp}%`;
    childd2[i].classList.add("fillin");
  }
}

function showlang() {
  dash.innerText = "10 Most spoken languages in the world.";

  for (i = 0; i < childd1.length; i++) {
    childd1[i].innerText = ` ${i + 1} language`;
  }

  for (i = 0; i < childd3.length; i++) {
    rdm = Math.floor(Math.random() * 100);
    childd3[i].innerText = `${rdm}`;
    // temp = Math.floor(rdm/10000);
    childd2[i].style.width = `${rdm}%`;
    childd2[i].classList.add("fillin");
  }
}

btn_pop.addEventListener("click", showpop);
btn_lang.addEventListener("click", showlang);
