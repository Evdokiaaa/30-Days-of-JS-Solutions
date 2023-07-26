class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  getFullInfo() {
    return `Name:${this.name}, age:${this.age}, color:${this.color}, legs:${this.legs}`;
  }
  set removeLegs(leg) {
    this.legs -= leg;
  }
  get getName() {
    return this.name;
  }
}
let capybara = new Animal("CAPYBARA", 4, "brown", 4);
let bird = new Animal("alwq", 1, "white", 2);

console.log(capybara.getFullInfo());
console.log(bird);
bird.removeLegs = 1;
console.log(bird); //legs - 1
console.log(bird.getName);

class Pet extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  getFullInfo() {
    return `Name:${this.name}, age:${this.age}, color:${this.color}, legs:${this.legs}, gender:${this.gender}`;
  }
}
let doggy = new Pet("Jack", 4, "white", 4, "male");
console.log(doggy.getFullInfo());
console.log(capybara.getFullInfo());
