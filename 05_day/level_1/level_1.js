const countries = [
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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
//   1. Declare an empty array;
const emptyArray = [];
const emptyArray2 = new Array();
console.log(emptyArray2, emptyArray);
//   2 Declare an array with more than 5 number of elements
const numbersArr = [1, 2, 3, 4, 5, 6];
//   3. Find the length of your array
const myArrayLength = [1, 2, 3, 4, 5];
console.log(myArrayLength.length);
//   4. Get the first item, the middle item and the last item of the array
const numbers = ["1", "2", "3", "4", "5"];
const firstItem = console.log(numbers[0]);
const middleItem = console.log(numbers[3]);
const lastItem = console.log(numbers[numbers.length - 1]);
//   5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "String", true, {}, [], undefined, null];
console.log(mixedDataTypes.length);
//   6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//   7. Print the array using console.log()

console.log([1, 2, 3, 4, 5]);

//   8. Print the number of companies in the array
console.log(itCompanies.length);
//   9. Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[3],
  itCompanies[itCompanies.length - 1]
);
//   10. Print out each company
for (let i = 0; i < itCompanies.length; i++) console.log(itCompanies[i]);
//   11Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++)
  console.log(itCompanies[i].toUpperCase());

//   12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(","));
//   13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const someCompany = "Yandex";
console.log(
  itCompanies.includes(someCompany) ? someCompany : "a company is not found"
);

//   14. Filter out companies which have more than one 'o' without the filter method
const oo = [];
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes("oo")) {
    oo.push(itCompanies[i]);
  }
}

console.log(oo);
//   15. Sort the array using sort() method
const unsortedArr = [5, 4, 3, 2, 1];
console.log(unsortedArr.sort());
//   16. Reverse the array using reverse() method
const reverseArr = [5, 4, 3, 2, 1];
console.log(reverseArr.reverse());
//   17. Slice out the first 3 companies from the array
const itCompaniess = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompaniess.slice(0, 3));
//   18. Slice out the last 3 companies from the array
console.log(itCompaniess.slice(-3));
//   19. Slice out the middle IT company or companies from the array
console.log(
  itCompaniess.slice(
    Math.floor(itCompaniess.length / 2),
    Math.floor(itCompaniess.length / 2) + 1
  )
);
//   20. Remove the first IT company from the array
const removeFirstElement = itCompaniess.shift();
console.log(removeFirstElement);
//   21. Remove the middle IT company or companies from the array
const itCompanies3 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

const removedMiddle = itCompanies3.splice(
  Math.floor(itCompanies3.length / 2),
  1
);
console.log(removedMiddle);
//   22. Remove the last IT company from the array
console.log(itCompanies3.pop());
//   23. Remove all IT companies
console.log(itCompanies3.splice(0));
