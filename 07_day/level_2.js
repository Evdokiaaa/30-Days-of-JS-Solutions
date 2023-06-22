//1.
function solveLinEquation(x, y, c) {
  return -(c + y * x) / x;
}

console.log(solveLinEquation(2, 3, -5)); // Output: 4

//2.

function solveQuadEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant >= 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // check if the roots are equal
    if (root1 === root2) {
      return `{${[root1]}}`;
    } else {
      return `{${[root1]},${[root2]}}`;
    }
  } else {
    // if the discriminant is negative, the roots are imaginary
    return "{0}";
  }
}

//3

const printArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printArr([3, 4, 5]);

//4.

const showDateTime = () => {
  let date = new Date();
  let datee = date.getDate();
  let month = date.getUTCMonth();
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return `${datee}/${month + 1}/${year} ${hour}:${minutes} `;
};
console.log(showDateTime());

//5.

const swapValues = (a, b) => {
  let x = b;
  let y = a;
  console.log(x, y);
};
swapValues(2, 4);

//6.

const reverseArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  console.log(newArr);
};
reverseArr([3, 4, 5]);
//7
const capitalizeArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
};
console.log(capitalizeArr(["john", "mike"]));

//8
const arr = [1, 2, 3, 4];
const addItem = (item) => {
  arr.push(item);
  return arr;
};
console.log(addItem(5));

//9
const removeitem = (index) => {
  let names = ["john", "mike"];
  names.splice(index);
  return names;
};
console.log(removeitem(1));
//10
const sumOfNumbers = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(sumOfNumbers(1, 2, 3, 4));
//11
const sumOfEven = (...args) => {
  let evenSum = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 === 0) {
      evenSum += args[i];
    }
  }
  return evenSum;
};

console.log(sumOfEven(1, 2, 3, 4));
//12
const sumOfOdd = (...args) => {
  let oddSum = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 !== 0) {
      oddSum += args[i];
    }
  }
  return oddSum;
};
console.log(sumOfOdd(1, 2, 3, 4));
//13
const evenAndOdds = (num) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      even++;
    } else if (i % 2 !== 0) {
      odd++;
    }
  }
  return `the number of odds are ${odd} \n the number of even are ${even}`;
};
console.log(evenAndOdds(100));

//14.

const sum = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(sum(1, 2, 3));

//15.

const generateRandomIp = () => {
  let one = Math.floor(Math.random() * 255);
  let two = Math.floor(Math.random() * 255);
  let three = Math.floor(Math.random() * 255);
  let four = Math.floor(Math.random() * 255);
  return `IP: ${one}:${two}:${three}:${four}`;
};
console.log(generateRandomIp());

//16.

function randomMacAddress() {
  const pairs = Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .padStart(2, "0")
  );

  return pairs.join(":");
}
console.log(randomMacAddress());

//17
const generateRandomHex = () => {
  const chars = "0123456789ABCDEF";
  let hex = "";
  for (let i = 0; i <= 6; i++) {
    hex += chars[Math.floor(Math.random() * chars.length + 1)];
  }

  return `#${hex}`;
};
console.log(generateRandomHex());

//18
generateUserId = () => {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  let userId = "";
  for (let i = 0; i <= 7; i++) {
    userId += chars[Math.floor(Math.random() * chars.length)];
  }
  return userId;
};
generateUserId();
