const wrapper = document.querySelector(".wrapper");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const ul = document.querySelector("u");
const lis = document.querySelectorAll("li");
h1.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020<span>`;
h2.style.textDecoration = "underline";
h2.style.fontWeight = 400;
let year = document.querySelector("#year");
year.style.fontSize = "64px";

const randomColor = () => {
  const random1 = Math.floor(Math.random() * 255);
  const random2 = Math.floor(Math.random() * 255);
  const random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  year.style.color = color;
};
setInterval(randomColor, 1000);

console.log(h1);
// let yearDate = year.slice(year.indexOf("2020"));

console.log(randomColor());
const getDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const month = date.getMonth();
  const monthName = months[month];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const timestamp = `${monthName} ${day.toString().padStart(2, "0")} ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  console.log(timestamp);
  return timestamp;
};
const div = document.createElement("div");
div.className = "date";
div.textContent = getDate();
div.style.fontSize = "24px";

h2.insertAdjacentElement("afterend", div);
setInterval(() => {
  div.textContent = getDate();
}, 1000);
const randomColor2 = () => {
  const random1 = Math.floor(Math.random() * 255);
  const random2 = Math.floor(Math.random() * 255);
  const random3 = Math.floor(Math.random() * 255);
  color = `rgb(${random1},${random2},${random3})`;
  div.style.color = color;
};
setInterval(randomColor2, 1000);

wrapper.style.textAlign = "center";
lis.forEach((li) => {
  li.style.fontSize = "20px";
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.paddingLeft = "20px";
  li.style.listStyle = "none";
  li.style.margin = "0 auto";
  li.style.width = "650px";
  li.style.height = "40px";
  li.style.border = "solid";
  if (li.textContent.toLowerCase().includes("done")) {
    li.style.backgroundColor = "green";
  } else if (li.textContent.toLowerCase().includes("ongoing")) {
    li.style.backgroundColor = "yellow";
  } else {
    li.style.backgroundColor = "red";
  }
});
