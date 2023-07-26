const p1 = document.querySelector("#p1");
console.log(p1);

//2.

const one = document.querySelector("#p1");
const two = document.querySelector("#p2");
const three = document.querySelector("#p3");
const four = document.querySelector("#p4");
console.log(one);
console.log(two);
console.log(three);
console.log(four);
//3
const allP = document.querySelectorAll("p");
console.log(allP);
//4
allP.forEach((item) => console.log(item));
//5.
four.textContent = "Fourth Paragraph";

//6.

allP[0].className = "first-pararaph";
allP[0].id = "first";
//setAttribute
allP[1].setAttribute("class", "second");
allP[1].setAttribute("id", "second");
//adding a class to another class
allP[2].classList.add("title", "third");
