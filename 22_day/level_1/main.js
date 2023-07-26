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

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  for (let i = 0; i <= 100; i++) {
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

    container.appendChild(box);
  }
});
