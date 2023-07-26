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
