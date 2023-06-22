//1.

const countrieS = [
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
const copied = countrieS.slice();
console.log(copied, countrieS);

//2.
console.log(copied.sort(), countrieS);

//3

const webTechs_ = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack_ = ["MongoDB", "Express", "React", "Node"];
console.log(webTechs_.sort(), mernStack_.sort());

//4-8

const countrie = [
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
  "Iran",
  "New Zealand",
];

let landCountries = [];

for (let i = 0; i < countrie.length; i++) {
  if (countrie[i].includes("land")) {
    landCountries.push(countrie[i]);
  }
}
console.log(landCountries);

let countryWithMostChars = "";

for (let i = 0; i < countrie.length; i++) {
  if (countrie[i].length > countryWithMostChars.length) {
    countryWithMostChars = countrie[i];
  }
}
console.log(countryWithMostChars);

let multiWordCountries = [];

for (let i = 0; i < countrie.length; i++) {
  if (countrie[i].split(" ").length > 1) {
    multiWordCountries.push(countrie[i]);
  }
}
console.log(multiWordCountries);

let fourCharCountries = [];

for (let i = 0; i < countrie.length; i++) {
  if (countrie[i].length === 4) {
    fourCharCountries.push(countrie[i]);
  }
}

console.log(fourCharCountries);

//9

let reversed = countrie.reverse();

for (let i = 0; i < countrie.length; i++) {
  reversed[i] = reversed[i].toUpperCase();
}
console.log(reversed);
