const animationSkills = document.querySelector(".animation__skills");
const animationText = document.querySelector(".animation__text");
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
  return Math.floor(Math.random() * jobs.length) + 1;
};
const index = randomsIndex();