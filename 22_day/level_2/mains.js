const URL = "https://restcountries.com/v2/all";
const container = document.querySelector(".container");
const p = document.querySelector(".total");
let countriesCount;
let countries;
const fetching = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  countries = data;
  p.textContent = `Total countries:${data.length}`;
  countries.forEach((country) => {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = country.name;
    box.style.width = "150px";
    box.style.height = "120px";
    box.style.border = "1px solid black";
    box.style.margin = "8px";
    container.appendChild(box);
  });
};
fetching();
