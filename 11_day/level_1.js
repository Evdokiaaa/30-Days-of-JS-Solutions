const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(pi);

//2.

const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const [fin, est, sw, den, nor] = countries;
console.log(fin);

//3

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

let { width: w, height: h } = rectangle;
console.log(w, h);
