let countries = [
  {
    name: "China",
    capital: "Pekin",
    population: "7billion",
    languages: ["Chinese"],
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: "150m",
    languages: ["Japanese"],
  },
  {
    name: "Russia",
    capital: "Moscow",
    population: "150m",
    languages: ["English", "Russian"],
  },
  {
    name: "France",
    capital: "Paris",
    population: "3-billions",
    languages: ["french"],
  },
];

for (let { name, capital, population, languages } of countries) {
  console.log(name, capital, population, languages);
}

//2

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, scores] = student;
console.log(name, skills, scores);

//3.

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const student = {
      name: arr[i][0],
      skills: arr[i][1],
      scores: arr[i][2],
    };
    result.push(student);
  }
  return result;
}
console.log(convertArrayToObject(students));

//4

const student1 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const newStudent = Object.assign({}, student1);
newStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
newStudent.skills.backEnd.push({ skill: "Express", level: 9 });
newStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
newStudent.skills.dataScience.push("SQL");

console.log("student", student);
console.log("new student", newStudent);
