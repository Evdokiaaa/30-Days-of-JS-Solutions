const chars = document.querySelector(".characters");

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
};

const characters = chars.textContent.split("");
chars.textContent = "";

characters.forEach((char) => {
  const span = document.createElement("span");
  if (char !== " ") {
    span.textContent = char;
    chars.appendChild(span);
  } else {
    const spaceSpan = document.createElement("span");
    spaceSpan.textContent = " ";
    chars.appendChild(spaceSpan);
  }
});

const updateColor = () => {
  const spans = chars.querySelectorAll("span");

  spans.forEach((span) => {
    if (span.textContent !== " ") {
      span.style.color = randomColor();
    }
  });
};

setInterval(updateColor, 1000);
