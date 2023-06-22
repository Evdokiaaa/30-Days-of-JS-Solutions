//The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const minAge = ages.sort()[0];
const maxAge = ages.sort()[ages.length - 1];
// Find the median age(one middle item or two middle items divided by two)
const average = ages[Math.floor(ages.length / 2)];

// Find the average age(all items divided by number of items)
let avgAge;
let totalAge = 0;
for (i = 0; i < ages.length; i++) {
  totalAge += ages[i];
  avgAge = totalAge / ages.length;
  console.log(totalAge);
}
console.log(avgAge);
// Find the range of the ages(max minus min)
const range = maxAge - minAge;
// Compare the value of (min - average) and (max - average), use abs() method

let m = Math.abs(minAge - avgAge);
let m2 = Math.abs(maxAge - avgAge);
console.log(m);
console.log(m2);

// 2. Find the middle country(ies) in the countries array

const countries_ = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const middle = countries_.length / 2;
let middleNum;
for (let i = 0; i < countries_.length; i++) {
  if (countries_.length % 2 == 0) {
    middleNum = countries_.slice(
      Math.floor(middle) - 1,
      Math.floor(middle) + 1
    );
    break;
  } else {
    middleNum = countries_.slice(Math.floor(middle), Math.floor(middle) + 1);
    break;
  }
}
console.log(middleNum);

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const countries__ = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
  "sdfs",
];
if (countries__.length % 2 === 0) {
  const firstHalf = countries__.slice(0, Math.floor(countries__.length / 2));
  const secondHalf = countries__.slice(firstHalf.indexOf(firstHalf.at(-1)) + 1);
  console.log(firstHalf);
  console.log(secondHalf);
} else {
  console.log("Not even");
}
