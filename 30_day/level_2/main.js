const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const telInput = document.getElementById("tel");
const bioInput = document.getElementById("bio");

const nameError = document.getElementById("name__error");
const lastnameError = document.getElementById("lastname-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const telError = document.getElementById("tel-error");
const bioError = document.getElementById("bio-error");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    nameInput.value.length < 3 ||
    nameInput.value.length > 16 ||
    !isNaN(nameInput.value)
  ) {
    nameError.textContent =
      "First name must be alphanumeric and contain 3-16 characters ";
  } else {
    nameError.textContent = "";
  }
  if (
    lastnameInput.value.length < 3 ||
    lastnameInput.value.length > 16 ||
    !isNaN(nameInput.value)
  ) {
    lastnameError.textContent =
      "Last name must be alphanumeric and contain 3-16 characters ";
  } else {
    lastnameError.textContent = "";
  }
  if (!emailInput.value.includes("@")) {
    emailError.textContent =
      "Email must be a valid adress e.g example@example.com";
  } else {
    emailError.textContent = "";
  }
  if (passwordInput.value.length < 8 || passwordInput.value > 20) {
    passwordError.textContent = "Password must be 8-20 characters";
  } else {
    passwordError.textContent = "";
  }
  if (telInput.value.length !== 11 || !/^\d{11}$/.test(telInput.value)) {
    console.log(typeof Number(telInput.value));
    telError.textContent = "Wrong format ( 11 numbers)";
  } else {
    telError.textContent = "";
  }
  if (bioInput.value.length < 8 && bioInput.value.length > 50) {
    bioError.textContent = "Must be 8-50 characters";
  } else {
    bioError.textContent = "";
  }
});
