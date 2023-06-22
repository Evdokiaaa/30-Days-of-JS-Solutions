const countries2 = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    languages: ["Armenian", "Russian"],
    population: 2994400,
    flag: "https://restcountries.eu/data/arm.svg",
    currency: "Armenian dram",
  },
  {
    name: "Aruba",
    capital: "Oranjestad",
    languages: ["Dutch", "(Eastern) Punjabi"],
    population: 107394,
    flag: "https://restcountries.eu/data/abw.svg",
    currency: "Aruban florin",
  },
  {
    name: "Australia",
    capital: "Canberra",
    languages: ["English"],
    population: 24117360,
    flag: "https://restcountries.eu/data/aus.svg",
    currency: "Australian dollar",
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    languages: ["English"],
    population: 378040,
    flag: "https://restcountries.eu/data/bhs.svg",
    currency: "Bahamian dollar",
  },
];

const howManyLanguages = (arr) => {
  const languages = new Set();
  for (let country of countries2) {
    const language = country.languages;
    for (let lang of language) {
      languages.add(lang);
    }
  }
  return languages.size + " languages";
};
console.log(howManyLanguages(countries2));

//2
const mostSpokenLanguages = (arr, nums) => {
  const languageCounts = new Map();

  for (const lang of arr) {
    let language = lang.languages;
    for (let lang of language)
      if (languageCounts.has(lang)) {
        console.log(lang);
        languageCounts.set(lang, languageCounts.get(lang) + 1);
      } else {
        languageCounts.set(lang, 1);
      }
  }

  let sortedCounts = [...languageCounts.entries()].sort((a, b) => b[1] - a[1]);
  sortedCounts = sortedCounts.reduce((acc, obj) => {
    acc[obj[0]] = obj[1];
    return acc;
  }, {});

  return Object.entries(sortedCounts).slice(0, nums);
};
console.log(mostSpokenLanguages(countries2, 5));
