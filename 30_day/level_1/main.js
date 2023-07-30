const container = document.querySelector(".countries__container");
const URL = "https://restcountries.com/v2/all";

let allCountries = [];

const countries = (URL) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      allCountries = data;

      createCountryElements(allCountries);

      const inputElement = document.querySelector(".input");
      inputElement.addEventListener("input", handleSearch);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

countries(URL);

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

function sortbyPopulation() {}
