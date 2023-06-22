//1.

function fullName1() {
  console.log("your name");
}
fullName1();
//2.
function fullName2(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const a = fullName2("petr", "loapses");
console.log(a);

//3
function addNumbers(a, b) {
  return a + b;
}
addNumbers(2, 5);
//4
function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}
areaOfRectangle(5, 3);
//5
const perimeterOfRectangle = (length, width) => {
  let perimeter = 2 * (length * width);
  return perimeter;
};
console.log(perimeterOfRectangle(3, 5));

//6

const volumeOfRectPrism = (length, width, height) => {
  let volume = length * width * height;
  return volume;
};
console.log(volumeOfRectPrism(2, 3, 4));

//7

const areaOfCircle = (r) => {
  const PI = 3.14;
  let area = PI * r * r;
  return area;
};
console.log(areaOfCircle(7));

//8
const circumOfCircle = (r) => {
  const PI = 3.14;
  return 2 * PI * r;
};
console.log(circumOfCircle(6));

//9

const density = (mass, volume) => {
  return mass / volume;
};
console.log(density(4, 8));

//10.

const speed = (TDC, TT) => {
  return TDC / TT;
};
console.log(speed(4, 6));

//11.
const weight = (mass, gravity) => {
  return mass * gravity;
};
console.log(weight(4, 5));

//12.

const celsiusToFahrenheit = (celsius) => {
  let fahrenheit = celsius * 1.8 + 32;
  return fahrenheit;
};
celsiusToFahrenheit(5);

//13

const BMI = (weight, height) => {
  let bmi = weight / (height / height);
  if (bmi < 18.5) {
    return `underweight`;
  } else if (bmi > 18.5 && bmi < 24.9) {
    return `overweight`;
  } else if (bmi > 25 && bmi < 29.9) {
    return `overweight`;
  } else {
    return `obese`;
  }
};
BMI(4, 7);

//14

const checkSeasons = (month) => {
  switch (month) {
    case "september":
    case "october":
    case "November":
      console.log("The season is Autumn");
      break;
    case "december":
    case "january":
    case "febuary":
      console.log("The season is Winter");
      break;
    case "march":
    case "april":
    case "may":
      console.log("The season is Spring");
      break;
    case "june":
    case "july":
    case "august":
      console.log("The season is Summer");
      break;
    default:
      console.log("invalid Month");
  }
};
checkSeasons("january");

//15
const findMax = (x, y, z) => {
  return Math.max(x, y, z);
};
findMax(5, 7, 4);
