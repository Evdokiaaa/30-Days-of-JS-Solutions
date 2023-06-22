//1.
/*
forEach
the forEach method takes in an array
and execute a function for each element in the array 
 
*/

/* map
the map method produces a new array
from the provided callback function
to be executed on each array
*/

/*filter
creates a new array that 
passes the test of the callback function provided
*/

/*reduce
this produces a single value from an array
provided it meets the callback function
*/

//2.

function callback() {}

//3-5

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
countries.forEach((country) => {
  console.log(country);
});

names.forEach((name) => {
  console.log(name);
});

numbers.forEach((num) => {
  console.log(num);
});

//6-10

const uppCaseCountries = countries.map((country) => {
  return country.toUpperCase();
});
console.log(uppCaseCountries);

const countriesLength = countries.map((country) => {
  return country.length;
});
console.log(countriesLength);

const squareNumber = numbers.map((num) => {
  return num * num;
});
console.log(squareNumber);

const namesToUpper = names.map((name) => {
  return name.toUpperCase();
});
console.log(namesToUpper);

const prices = products.map((product) => {
  return `${product.product}:${product.price}`;
});
console.log(prices);

//11-15

const countriesWithLand = countries.filter((country) => {
  return country.toLowerCase().includes("land");
});
console.log(countriesWithLand);

const countriesWith6chars = countries.filter((country) => {
  return country.length === 6;
});
console.log(countriesWith6chars);

const countriesWith6charsMore = countries.filter((country) => {
  return country.length >= 6;
});
console.log(countriesWith6charsMore);

const countriesStartingWithE = countries.filter((country) => {
  return country[0].toLowerCase() === "e";
});
console.log(countriesStartingWithE);

const pricesWithValues = products.filter((product) => {
  return product.price > 0;
});
console.log(pricesWithValues);

//16

const getStringList = (arr) => {
  let newArr = arr.filter((item) => {
    return typeof item === "string";
  });
  return newArr;
};

let x = getStringList(["b", 3, 5, "a"]);
console.log(x);

//17
console.log(numbers.reduce((a, b) => a + b));

//18

const joinCountries = countries.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(joinCountries);
//19
//every checks if all elements in an array are similar in all aspects
//some checks if some elements are elements are similar in one aspect

//20
const isSomelength6 = countries.some((country) => {
  return country.length > 6;
});
console.log(isSomelength6);
//21

const isCountryIncludesLand = countries.every((country) => {
  return country.toLowerCase().includes("land");
});
console.log(isCountryIncludesLand);

//22.

//find returns the first element which satisfies the condition
//findIndex returns the first index elemnt whic satisfiy the condition

//23

const firstCountry6Chars = countries.find((country) => {
  return country.length === 6;
});
console.log(firstCountry6Chars);

//24

const firstIndexPosCountry6Chars = countries.findIndex((country) => {
  return country.length === 6;
});
console.log(firstIndexPosCountry6Chars);

//25.

const indexOfNorway = countries.findIndex((country) => {
  return country.includes("Norway");
});
console.log(indexOfNorway);

//26

const indexOfRussia = countries.findIndex((country) => {
  return country.includes("Russia");
});
console.log(indexOfRussia);
