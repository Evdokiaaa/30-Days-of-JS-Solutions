const base = Number(prompt("Enter your base"));
const height = Number(prompt("Enter your height"));
const area = 0.5 * base * height;
alert(`Your area is ${area}`);

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

const a = Number(prompt("Enter a side"));
const b = Number(prompt("Enter b side"));
const c = Number(prompt("Enter c side"));
alert(`Perimetr is ${a + b + c}`);

//3 .Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
const length = Number(prompt("Enter length of the rectangle"));
const width = Number(prompt("Enter width of the rectangle"));
const areaOfRectangle = length * width;
const perimeterOfRectangle = 2 * (length + width);
alert(
  `the area of the rectangle is ${areaOfRectangle} while the perimeter is ${perimeterOfRectangle}`
);

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const pi = 3.14;
const radius = Number(prompt("Enter radius of a circle"));
const areaOfCircle = pi * radius * radius;
const circumference = 2 * pi * radius;
alert(
  `The area of the circle is ${areaOfCircle} while the circumference is ${circumference}`
);

//5. Calculate the slope, x-intercept and y-intercept of y = 2x -2 ??
let y = 0;
let x = 1;
const solution = 2 * x - 2;
console.log(`(${x},${y})`);
//6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const y1 = 2;
const y2 = 10;
const x1 = 2;
const x2 = 6;
const m = (y2 - y1) / (x2 - x1);
console.log(m);

//7.Compare the slope of above two questions. ??

//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xx = -3;
const yy1 = xx ** 2 + 6 * xx + 9;
console.log(yy1);
//9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = Number(prompt("enter your hours"));
let rate = Number(prompt("enter your rate"));
let pay = hours * rate;
console.log(`your pay is ${pay}`);

//10. If the length of your name is greater than 7 say, your name is long else say your name is short.

const myName = "Victorrr";
console.log(myName.length > 7 ? "long" : "short");

//11.Compare your first name length and your family name length and you should get this output.

let firstName2 = "Asabeneh";
let lastName2 = "Yetayeh";
//Your first name, Asabeneh is longer than your family name, Yetayeh
