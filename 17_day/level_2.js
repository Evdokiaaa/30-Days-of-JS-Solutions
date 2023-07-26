//Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
  firstName: "Evdokia",
  lastName: "Ailoria",
  age: 20,
  skills: ["JS", "HTML", "CSS"],
  country: "Russia",
};
localStorage.setItem("student", JSON.stringify(student));
