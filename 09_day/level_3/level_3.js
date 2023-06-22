const countries = require("./countries");

//1

//Sorted by name:

const sortedByName = countries.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(sortedByName);

//Sorted by capital:

const sortedByCapital = countries.sort((a, b) => {
  if (a.capital < b.capital) return -1;
  if (a.capital > b.capital) return 1;
  return 0;
});

console.log(sortedByCapital);

//Sorted by population:

const sortedByPopulation = countries.sort(
  (a, b) => b.population - a.population
);

console.log(sortedByPopulation);

//2
const mostSpokenLanguages = (arr, numLanguages) => {
  let languages = {};
  for (let country of arr) {
    let countryLanguage = country.languages;
    for (let lang of countryLanguage) {
      if (lang in languages) {
        languages[lang]++;
      } else {
        languages[lang] = 1;
      }
    }
  }
  const sortedLanguages = [];
  for (let lang in languages) {
    sortedLanguages.push([lang, languages[lang]]);
    sortedLanguages.sort((a, b) => b[1] - a[1]);
  }
  let result = [];
  for (let i = 0; i < numLanguages; i++) {
    result.push({ country: sortedLanguages[i].join(": ") });
  }
  return result;
};
console.log(mostSpokenLanguages(countries, 5));

//3
function mostPopulatedCountries(countries, n) {
  return countries
    .sort((a, b) => b.population - a.population)
    .slice(0, n)
    .map(({ name, population }) => ({ country: name, population }));
}
console.log(mostPopulatedCountries(countries, 5));
//4

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

function count(data) {
  return data.length;
}

function sum(data) {
  return data.reduce((acc, val) => acc + val, 0);
}

function min(data) {
  return Math.min(...data);
}

function max(data) {
  return Math.max(...data);
}

function range(data) {
  return max(data) - min(data);
}

function mean(data) {
  return sum(data) / count(data);
}

function median(data) {
  const sorted = data.sort((a, b) => a - b);
  const mid = Math.floor(count(data) / 2);
  if (count(data) % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
}

function mode(data) {
  const table = {};
  data.forEach((val) => {
    if (val in table) {
      table[val]++;
    } else {
      table[val] = 1;
    }
  });

  let modes = [];
  let max = 0;
  for (const key in table) {
    if (table[key] > max) {
      modes = [Number(key)];
      max = table[key];
    } else if (table[key] === max) {
      modes.push(Number(key));
    }
  }

  if (modes.length === Object.keys(table).length) {
    modes = [];
  }

  return { mode: modes, count: max };
}

function variance(data) {
  let average = mean(data);
  return (
    data.reduce((acc, val) => acc + (val - average) ** 2, 0) / (count(data) - 1)
  );
}

function std(data) {
  return Math.sqrt(variance(data));
}

function freqDist(data) {
  const table = {};
  data.forEach((val) => {
    if (val in table) {
      table[val]++;
    } else {
      table[val] = 1;
    }
  });

  const items = Object.keys(table).map((key) => [table[key], Number(key)]);
  items.sort((a, b) => b[0] - a[0]);

  return items.map((item) => [(item[0] / count(data)) * 100, item[1]]);
}

function describe(data) {
  return {
    count: count(data),
    sum: sum(data),
    min: min(data),
    max: max(data),
    range: range(data),
    mean: mean(data),
    median: median(data),
    mode: mode(data),
    variance: variance(data),
    std: std(data),
    freq_dist: freqDist(data),
  };
}

console.log("Count:", count(ages));
console.log("Sum: ", sum(ages));
console.log("Min: ", min(ages));
console.log("Max: ", max(ages));
console.log("Range: ", range(ages));
console.log("Mean: ", mean(ages));
console.log("Median: ", median(ages));
console.log("Mode: ", mode(ages)); //
console.log("Variance: ", variance(ages));
console.log("Standard Deviation: ", std(ages));
console.log("Frequency Distribution: ", freqDist(ages));
console.log(describe(ages));
