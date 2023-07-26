const btn = document.querySelector("button");
const input = document.querySelector("#mass");
const showPlanets = document.querySelector(".image");
const select = document.querySelector("select");
const p = document.querySelector("p");
const planetImage = document.querySelector(".planet-image");
const desc = document.querySelector(".description");
let planetValue;
let option;

select.addEventListener("change", (e) => {
  const selected = e.currentTarget;

  option = selected.selectedOptions[0].textContent;
  planetValue = select.value;
});

btn.addEventListener("click", () => {
  const value = input.value;
  if (
    typeof (Number(value) === "number") &&
    Number(value) > 0 &&
    planetValue !== undefined &&
    planetValue !== "none"
  ) {
    p.classList.add("inactive");
    let weight = planetValue * value;
    planetImage.src = `./img/${option.toLowerCase()}.png`;
    showPlanets.classList.remove("inactive");
    showPlanets.classList.add("active");
    desc.textContent = `The weight of object on ${option} is ${weight.toFixed(
      2
    )} N`;
  } else {
    console.log("fuc");
    showPlanets.classList.remove("active");
    showPlanets.classList.add("inactive");
    p.classList.remove("inactive");
    desc.textContent = "";
  }
});
