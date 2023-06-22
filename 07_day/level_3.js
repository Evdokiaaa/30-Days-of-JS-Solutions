const userIdGeneratedByUser = () => {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let noId = Number(prompt("how many id do you want to generate"));
  let noChars = Number(prompt("in how many chars"));
  let ids = [];
  for (i = 0; i < noId; i++) {
    ids[i] = "";
    for (k = 0; k < noChars; k++) {
      ids[i] += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  console.log(ids);
  ids.forEach(function (id) {
    console.log(id);
  });
};
userIdGeneratedByUser();
//2
const rgbColorGnerator = () => {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  return `rgb(${one},${two},${three})`;
};
rgbColorGnerator();

//3

const arrayOfHexaColors = () => {
  let chars = "0123456789ABCDEF";
  let hex = [];
  for (let k = 0; k < 3; k++) {
    hex[k] = "#";
    for (let i = 0; i < 6; i++) {
      hex[k] += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  return hex;
};
console.log(arrayOfHexaColors());

//4

const arrayOfRgbColors = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    arr.push("rgb(" + red + ", " + green + ", " + blue + ")");
  }
  return arr;
};
arrayOfRgbColors(3);

//5

const convertHexaToRgb = (hex) => {
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
convertHexaToRgb("ff69b4");

//6

const convertRgbToHexa = (rgb) => {
  let rgbValues = rgb.substring(4, rgb.length - 1).split(", ");
  let r = parseInt(rgbValues[0]);
  let g = parseInt(rgbValues[1]);
  let b = parseInt(rgbValues[2]);
  let hexR = r.toString(16).length == 1 ? "0" + r.toString(16) : r.toString(16);
  let hexG = g.toString(16).length == 1 ? "0" + g.toString(16) : g.toString(16);
  let hexB = b.toString(16).length == 1 ? "0" + b.toString(16) : b.toString(16);
  return "#" + hexR + hexG + hexB;
};

console.log(convertRgbToHexa("rgb(255, 105, 180)"));

//7

const generateColors = (type, arrLength) => {
  let chars = "0123456789ABCDEF";
  let colors = [];
  if (type === "rgb") {
    for (i = 0; i < arrLength; i++) {
      colors[i] = "rgb";
      colors[i] += `(${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)},`;
      colors[i] += `${Math.floor(Math.random() * 255)},)`;
    }
  } else if (type === "hex") {
    for (let i = 0; i < arrLength; i++) {
      colors[i] = "#";
      for (k = 0; k < 6; k++) {
        colors[i] += chars[Math.floor(Math.random() * chars.length)];
      }
    }
  }
  return colors;
};
generateColors("rgb", 3);

//8

const shuffleArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let rand = Math.floor(Math.random() * arr.length - 1);
    if (arr.indexOf(rand) !== -1 && !newArr.includes(arr[rand])) {
      newArr.push(arr[rand]);
    }
  }
  return newArr;
};
console.log(shuffleArray([1, 2, 3]));

//9

const factorial = (num) => {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};
console.log(factorial(5));

//10

const isEmpty = (val) => {
  if (val === undefined || val === "") {
    return `it's empty`;
  } else {
    return `not empty`;
  }
};

//11.

const sum2 = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(sum2(1, 2, 3, 4));

//12

const sumOfArrayItems = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") sum += arr[i];
    else return 'It"s String';
  }

  return sum;
};
console.log(sumOfArrayItems([1, 2, 3]));

//13 ???

const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      sum = arr.length / sum;
    } else return 'It"s String';
  }

  return sum;
};
console.log(average([1, 2, 3, 4, 5]));

//14

const modifyArray = (arr) => {
  if (arr.length > 5) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 4) arr[i] = arr[i].toUpperCase();
    }
    return arr;
  } else {
    return `error`;
  }
};
console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

//15

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0 && num > 1) {
      return `${num} is a prime number`;
    } else {
      return `not prime`;
    }
  }
};
isPrime(5);

//16

const areAllItemsUnique = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
};
console.log(areAllItemsUnique([1, 2, 3, 4, 5])); // true
console.log(areAllItemsUnique([1, 2, 3, 3, 4, 5])); // false

//17

const sameData = (arr) => {
  const type = typeof arr[0];

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === type) {
      count++;
    } else {
      return false;
    }
  }
  return count === arr.length;
};
console.log(sameData([1, 2, 3, 4, 5])); // true
console.log(sameData([1, "2", 3, 4, 5])); // false

//18 ??????????

const isValidVariable = (name) => {
  let regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return regex.test(name);
};

console.log(isValidVariable("my_variable1"));
console.log(isValidVariable("my-variable")); // false

//19

const generateRandomNumbers = () => {
  const arr = [];
  while (arr.length < 7) {
    let random = Math.floor(Math.random() * 10);
    if (arr.indexOf(random) === -1) {
      arr.push(random);
    }
  }
  return arr;
};
console.log(generateRandomNumbers());

//20
const reverseCountries = (arr) => {
  const countries = arr.slice();
  return countries.reverse();
};
console.log(reverseCountries(["Russia", "USA", "Italy", "Canada", "China"]));
