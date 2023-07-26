const body = document.querySelector("body");
const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".warning__message");
const div = document.querySelector(".container");

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

button.addEventListener("click", () => {
  let value = input.value;
  console.log(value);
  if (typeof (Number(value) === "number") && Number(value) > 0) {
    console.log("nym");
    div.innerHTML = "";
    input.value = "";
    message.innerHTML = "";
    for (let i = 0; i <= value; i++) {
      let box = document.createElement("div");
      box.textContent = i;
      box.style.width = "150px";
      box.style.margin = "5px";
      box.style.fontSize = "32px";
      box.style.display = "flex";
      box.style.justifyContent = "center";
      box.style.alignItems = "center";
      box.classList.add("box");

      if (i % 2 === 0) {
        box.classList.add("even");
      } else {
        box.classList.add("odd");
      }

      if (isPrime(i)) {
        box.classList.add("prime");
      }

      div.appendChild(box);
    }
  } else {
    message.innerHTML = " WRONG INPUT";
  }
});
