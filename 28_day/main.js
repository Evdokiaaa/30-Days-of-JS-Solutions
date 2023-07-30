const inputs = document.querySelectorAll("input");
const addBtn = document.querySelector(".add");
const errorMsg = document.querySelector(".error");
const playerName = document.querySelector(".player__name");
const playerSurname = document.querySelector(".player__surname");

addBtn.addEventListener("click", () => {
  let invalidInput = false;

  for (const input of inputs) {
    if (input.value === "") {
      invalidInput = true;
      break;
    }
  }

  if (invalidInput) {
    errorMsg.style.display = "block";
    errorMsg.style.textAlign = "center";
  } else {
    errorMsg.style.display = "none";

    const formData = {};
    for (const input of inputs) {
      formData[input.name] = input.value;
    }

    const playerCard = createPlayerCard(
      formData.name,
      formData.surname,
      formData.country,
      formData.score,
      new Date().toLocaleString()
    );

    const container = document.querySelector(".container");
    container.appendChild(playerCard);
  }
});

const date = () => {
  const date = new Date();
  console.log(date.toLocaleString());
};
date();

function createPlayerCard(name, surname, country, score, creationTime) {
  const playerCard = document.createElement("div");
  playerCard.classList.add("player");

  playerCard.innerHTML = `
      <div class="player__info">
        <h4 class="player__name">${name} <span class="player__surname">${surname}</span></h4>
        <p class="player__creation-time">${creationTime}</p>
      </div>
      <h4 class="player__country">${country}</h4>
      <p class="score">${score}</p>
      <div class="player__btns">
        <button class="player__btn player__delete">🗑️</button>
        <button class="player__btn player__add">+5</button>
        <button class="player__btn player__remove">-5</button>
      </div>
    `;
  const removeBtn = playerCard.querySelector(".player__delete");
  removeBtn.addEventListener("click", () => {
    console.log(removeBtn);
    playerCard.remove();
  });
  const plusBtn = playerCard.querySelector(".player__add");
  const minusBtn = playerCard.querySelector(".player__remove");
  plusBtn.addEventListener("click", () => {
    score = Number(score) + 5;
    const scoreElement = playerCard.querySelector(".score");
    scoreElement.textContent = score;
  });
  minusBtn.addEventListener("click", () => {
    score = Number(score) - 5;
    const scoreElement = playerCard.querySelector(".score");
    scoreElement.textContent = score;
  });

  return playerCard;
}
