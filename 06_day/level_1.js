// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) console.log(i);
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let i = 10;
while (i >= 0) {
  i--;
}

let i2 = 10;
do {
  i2--;
} while (i2 >= 0);

// 3. Iterate 0 to n using for loop
const n = 10;
for (let i = 0; i < n; i++) console.log(i);

//4.

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i));
}

//5.

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//6.
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${Math.pow(i, 3)}`);
}
// 7.Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i += 2) console.log(i);
// 8.Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}

// 9.Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  // check if i is prime
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  // if i is prime, print it
  if (isPrime) {
    console.log(i);
  }
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let total = 0;
for (let i = 0; i <= 100; i++) {
  total += i;
}
console.log(total);

//11 & 12

let totalEven = 0;
let totalOdd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    totalEven += i;
  } else {
    totalOdd += i;
  }
}
console.log(totalOdd, totalEven);
console.log([totalOdd, totalEven]);

// 13. Develop a small script which generate array of 5 random numbers
const arrayOfRandomNumbers = [];
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.random() * 100;
  arrayOfRandomNumbers.push(randomNumber);
}
console.log(arrayOfRandomNumbers);
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr = [];
while (arr.length < 5) {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  if (arr.indexOf(randomNum) === -1) {
    arr.push(randomNum);
  }
}
console.log(arr);

// 15. WDevelop a small script which generate a six characters random id:

let result = "";
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i <= 6; i++) {
  result += chars.charAt(Math.floor(Math.random() * chars.length));
}
console.log(result);
