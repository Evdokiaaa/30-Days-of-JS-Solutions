const products2 = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

//1

const totalPrice = products2
  .map((product) => {
    return product.price;
  })
  .filter((price) => {
    return price > 0;
  })
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
console.log(totalPrice);

//2
const sumOfPrices = products2.reduce((acc, curr) => {
  if (typeof curr.price === "number" && !isNaN(curr.price)) {
    return acc + curr.price;
  } else {
    return acc;
  }
}, 0);

console.log(sumOfPrices); // Output: 27

//3

const countries2 = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "RUSSIA",
  "Sweden",
];

const categorizeCountries = (countries) => {
  let country = countries.filter((country) => {
    return (
      country.toLowerCase().includes("ia") ||
      country.toLowerCase().includes("island") ||
      country.toLowerCase().includes("land") ||
      country.toLowerCase().includes("stan")
    );
  });
  return country;
};
console.log(categorizeCountries(countries2));

//4

const frequencyByFirstLetter = (countries) => {
  const frequencies = {};

  countries.forEach((country) => {
    let firstLetter = country.charAt(0).toLowerCase();
    if (frequencies[firstLetter]) {
      frequencies[firstLetter]++;
    } else {
      frequencies[firstLetter] = 1;
    }
  });

  let result = [];

  for (let letter in frequencies) {
    result.push({ letter, count: frequencies[letter] });
  }

  return result;
};

//5
const getFirstTenCountries = (countries) => {
  let firstTen = [];
  firstTen = countries.map((country) => {
    return country;
  });
  return firstTen;
};

console.log(getFirstTenCountries(countries2));

//6.

const getLastTenCountries = (countries) => {
  const lastIndex = countries.length - 1;
  const startIndex = lastIndex - 9 < 0 ? 0 : lastIndex - 9;
  return countries.slice(startIndex, lastIndex + 1);
};
console.log(getLastTenCountries(countries2));

//7
const findMostFrequentLetter = (countries) => {
  const firstLetters = countries.map((country) =>
    country.charAt(0).toLowerCase()
  );
  const letterCounts = {};
  for (const letter of firstLetters) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }
  let mostFrequentLetter = "";
  let highestCount = 0;
  for (const letter in letterCounts) {
    if (letterCounts[letter] > highestCount) {
      highestCount = letterCounts[letter];
      mostFrequentLetter = letter;
    }
  }
  return mostFrequentLetter;
};
console.log(findMostFrequentLetter(countries2));
