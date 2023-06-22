const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
//1.

//Find the person who has many skills in the users object.
let max = 0;
let winner;
for (let item in users) {
  if (users[item].skills.length > max) {
    max = users[item].skills.length;
    winner = item;
  }
}
console.log(winner);

//2

let countInUsers = [];

for (let user in users) {
  if (users[user].isLoggedIn === true) {
    countInUsers.push(user);
  }
}
console.log(countInUsers);

let countPoints = [];

for (let user in users) {
  if (users[user].points >= 50) {
    countPoints.push(user);
  }
}
console.log(countPoints);

//3
let mernUSERS = [];
for (let name in users) {
  let skillsArr = users[name].skills;
  if (
    skillsArr.includes("React") &&
    skillsArr.includes("Node") &&
    skillsArr.includes("MongoDB") &&
    skillsArr.includes("Express")
  )
    mernUSERS.push(name);
}
console.log(mernUSERS);

//4.
const copyUsers = Object.assign({}, users);
copyUsers.Petr = { name: "Petr" };
console.log(copyUsers);
//5.

console.log(Object.entries(users));

//6.
console.log(Object.values(users));

//7

let country = {
  name: "Russia",
  capital: "Moscow",
  population: "150 million",
  languages: ["russian", "english"],
};

console.log(
  `${country.name}\n${country.capital}\n${country.population}\n${country.languages}`
);
