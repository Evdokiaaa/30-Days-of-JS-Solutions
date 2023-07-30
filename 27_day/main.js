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
const randomsIndex = () => {
  return Math.floor(Math.random() * jobs.length);
};
const randomColorIndex = () => {
  return Math.floor(Math.random() * colors.length);
};
const randomSubjectIndex = () => {
  return Math.floor(Math.random() * subjects.length);
};

const animation_skills = setInterval(() => {
  const index = randomsIndex();
  const colorIndex = randomColorIndex();
  const subjectIndex = randomSubjectIndex();
  animationColorTecho.textContent = subjects[subjectIndex];
  animationColorTecho.style.color = `${colors[colorIndex]}`;
  if (animationText.classList.contains("animate")) {
    animationText.classList.remove("animate");
    animationText.innerHTML = "";
  } else {
    animationText.innerHTML = jobs[index];
    animationText.classList.add("animate");
  }
}, 1000);
