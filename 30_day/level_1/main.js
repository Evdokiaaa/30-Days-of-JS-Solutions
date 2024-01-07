const URL = "https://restcountries.com/v2/all";
const container = document.querySelector(".countries__container");
const sortByCapitalBtn = document.querySelector(".btn__capital");
const sortByNameBtn = document.querySelector(".btn__name");
const sortByPopulationBtn = document.querySelector(".btn__population");

let allCountries = [];

const countries = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("dataatata", data);
      allCountries = data;

      createCountryElements(allCountries);

      const inputElement = document.querySelector(".input");
      inputElement.addEventListener("input", handleSearch);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

function createCountryElements(countries) {
  container.innerHTML = "";
  countries.forEach((country) => {
    console.log(country);
    const name = country.name;
    const population = country.population;
    const capital = country.capital;
    const language = country.languages[0].name;
    const flagUrl = country.flag;

    const countryDiv = document.createElement("div");
    countryDiv.className = "country";

    const nameElement = document.createElement("h2");
    nameElement.textContent = name;

    const capitalElement = document.createElement("p");
    capitalElement.textContent = `Capital:${capital}`;

    const populationElement = document.createElement("p");
    populationElement.textContent = `Population: ${population}`;

    const languageElement = document.createElement("p");
    languageElement.textContent = `Language:${language}`;

    const flagImage = document.createElement("img");
    flagImage.src = flagUrl;
    countryDiv.appendChild(flagImage);
    countryDiv.appendChild(nameElement);
    countryDiv.appendChild(capitalElement);
    countryDiv.appendChild(populationElement);
    countryDiv.appendChild(languageElement);

    container.appendChild(countryDiv);
  });
}

function handleSearch() {
  const inputValue = this.value.toLowerCase();

  const filteredCountries = allCountries.filter((country) => {
    const countryName = country.name.toLowerCase();
    return countryName.startsWith(inputValue);
  });

  createCountryElements(filteredCountries);
}

function sortByName() {
  allCountries.sort((a, b) => a.name.localeCompare(b.name));
  createCountryElements(allCountries);
}

function sortByPopulation() {
  allCountries.sort((a, b) => a.population - b.population);
  createCountryElements(allCountries);
}

function sortByCapital() {
  allCountries.sort((a, b) => a.capital.localeCompare(b.capital));
  createCountryElements(allCountries);
}
window.addEventListener("load", () => {
  countries(URL);
});

sortByNameBtn.addEventListener("click", sortByName);
sortByPopulationBtn.addEventListener("click", sortByPopulation);
sortByCapitalBtn.addEventListener("click", () => {
  console.log("click");
  sortByCapital();
});
