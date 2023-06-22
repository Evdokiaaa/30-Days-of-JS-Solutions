let length = 10;
let result2 = "";
const charss = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i <= length; i++) {
  result2 += charss.charAt(Math.floor(Math.random() * charss.length));
}
console.log(result2);

//2.

const randomHex = "#" + Math.floor(Math.random() * 16777215).toString(16);
console.log(randomHex);

//3.
const randomRBG = `rbg(${Math.floor(Math.random() * 256)},${Math.floor(
  Math.random() * 256
)},${Math.floor(Math.random() * 256)})`;
console.log(randomRBG);

//4 & 5

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let wordLength = [];
for (let i = 0; i < countries.length; i++) {
  countries[i] = countries[i].toUpperCase();
  wordLength.push(countries[i].length);
}
console.log(countries);
console.log(wordLength);
//6.
let newArray = [];
const countryArr = [];
let lengthOfCountry;
let threeLetters;
for (country of countries) {
  lengthOfCountry = country.length;
  threeLetters = country.slice(0, 3);
  countryArr.push(country, threeLetters, lengthOfCountry);
}
newArray.push(countryArr);
console.log(newArray);

//7
const countryArray = [];
const endWithIA = [];
for (country of countries) {
  if (country.match(/land/gi)) {
    countryArray.push(country);
  }
  if (country.endsWith("IA")) {
    endWithIA.push(country);
  }
}
console.log(countryArray);
console.log(endWithIA);
//9.

const countries10 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let max = countries10[0];
for (let i = 1; i < countries10.length; i++) {
  if (max.length < countries10[i].length) {
    max = countries10[i];
  }
}
console.log(max);

//10

const fiveCharacters = [];
for (let i = 0; i < countries10.length; i++) {
  if (countries10[i].length === 5) fiveCharacters.push(countries10[i]);
}
console.log(fiveCharacters);

//11

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestWord = webTechs[0];
for (let i = 1; i < webTechs.length; i++) {
  if (webTechs[i].length > longestWord.length) {
    longestWord = webTechs[i];
  }
}
console.log(longestWord);

//12

let newWebTechs = [];
for (let i = 0; i < webTechs.length; i++) {
  newWebTechs.push([webTechs[i], webTechs[i].length]);
}
console.log(newWebTechs);

//13.

const mernStack = ["MongoDb", "Express", "React", "Node"];
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i].slice(0, 1);
}
console.log(mern);

//14

const techs = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];
for (let i = 0; i < techs.length; i++) {
  console.log(techs[i]);
}
for (let tech of techs) {
  console.log(tech);
}

//15.

let fruits = ["banana", "orange", "mango", "lemon"];
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

//16.

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (item of fullStack) {
  for (i of item) {
    console.log(i);
  }
}
