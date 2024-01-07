const animationSkills = document.querySelector(".animation__skills");
const animationText = document.querySelector(".animation__text");
const animationColorTecho = document.querySelector(".techo");

const jobs = ["Programmer", "Student", "Motivator", "Instructor", "Educator"];
const subjects = [
  "HTML",
  "JavaScript",
  "TypeScript",
  "React",
  "MySQL",
  "Python",
];

const colors = [
  "red",
  "blue",
  "green",
  "purple",
  "white",
  "brown",
  "yellow",
  "pink",
  "grey",
];
const randomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const animationContent = setInterval(() => {
  const jobIndex = randomIndex(jobs);
  const colorIndex = randomIndex(colors);
  const subjectIndex = randomIndex(subjects);
  animationColorTecho.textContent = subjects[subjectIndex];
  animationColorTecho.style.color = `${colors[colorIndex]}`;
  if (animationText.classList.contains("animate")) {
    animationText.classList.remove("animate");
    animationText.innerHTML = "";
  } else {
    animationText.innerHTML = jobs[jobIndex];
    animationText.classList.add("animate");
  }
}, 1000);
