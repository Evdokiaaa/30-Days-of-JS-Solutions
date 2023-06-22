// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const age = Number(prompt("Enter your age"));
alert(
  age > 18
    ? "You are old enough to drive."
    : `You are left with ${18 - age} years to drive.`
);

//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const myAge = 14;
const yourAge = Number(prompt("Enter your age"));
console.log(myAge > yourAge ? "i am older" : "you are older");

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//1) using if else
//2) ternary operator.
let a = 4;
let b = 3;

if (a > b) console.log("a is greater than b");
else console.log("a is less than b");

console.log(a > b ? "a is greater than b" : "a is less than b");

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const someNumber = 6;
console.log(someNumber % 2 == 0 ? "number is even" : "number is not even");
