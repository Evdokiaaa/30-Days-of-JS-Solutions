const container = document.querySelector(".container");
const key = document.querySelector(".key");
const title = document.querySelector(".title");
window.addEventListener("keydown", (e) => {
  let keyMessage = `You have pressed: ${e.code}`;
  title.textContent = keyMessage;
  key.innerHTML = `<h1><span class="green">${e.keyCode}</span></h1>`;
});
