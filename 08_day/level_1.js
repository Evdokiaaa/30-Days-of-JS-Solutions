//1.
const dog = {};

//2.

console.log(dog);

//3.
dog.name = "Alex";
dog.legs = 4;
dog.age = 10;
dog["color"] = "brown";
dog.bark = function () {
  return "woof woof";
};

//4.
console.log(dog.name);
console.log(dog.legs);
console.log(dog.age);
console.log(dog.bark());

//5.

dog.breed = "bulldog";
dog.getDogInfo = function () {
  return `Name - ${this.name}, age - ${this.age}`;
};

dog.getDogInfo2 = function () {
  return Object.values(this);
};

console.log(dog.getDogInfo());
console.log(dog.getDogInfo2());
