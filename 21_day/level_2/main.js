//Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

//Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

//Set text content, id and class to each paragraph

//1 & 2
const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  if (i % 2 === 0) {
    p[i].style.background = "green";
    p[i].textContent = randomSymbols();
    p[i].setAttribute("id", "STRING2");
    p[i].classList.add("983qwe");
  } else {
    p[i].style.background = "red";
    p[i].textContent = randomSymbols();
    p[i].setAttribute("id", "STRING4");
    p[i].classList.add("123po");
  }
}
function randomSymbols() {
  const symbols = "123456qwertasd";
  let randomString = "";
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    randomString += symbols[randomIndex];
  }

  return randomString;
}
