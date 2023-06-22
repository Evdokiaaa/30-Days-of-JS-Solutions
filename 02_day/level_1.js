// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

const challenge = "30 Days of Javascript";

// 2. Print the string on the browser console using console.log()

console.log("Hello");

// 3. Print the length of the string on the browser console using console.log()

const str = "Hello";
console.log(str.length);

// 4. Change all the string characters to capital letters using toUpperCase() method

const str2 = "hello";
console.log(str.toUpperCase()); // HELLO

// 5. Change all the string characters to lowercase letters using toLowerCase() method

const str3 = "hello";
console.log(str.toLowerCase()); // HELLO

// 6. Cut (slice) out the first word of the string using substr() or substring() method

const str4 = "Hello world";
console.log(str4.substring(0, 5)); // Hello
console.log(str4.substring(5, 0)); // Hello
console.log(str4.substring(6, 11)); // world
console.log(str4.substring(0)); //Hello world

console.log(str4.substr(0, 5)); //Hello
console.log(str4.substr(6)); // world

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

const str5 = "30 Days Of JavaScript";
console.log(str5.substring(3));

// 8. Check if the string contains a word Script using includes() method

const str6 = "This string contains Script";
const str7 = "This string does not contains";
console.log(str6.includes("Script")); // true
console.log(str7.includes("Script")); // false

// 9. Split the string into an array using split() method

const str8 = "This is simple string";
console.log(str8.split()); //[ 'This is simple string' ]
console.log(str8.split(" ")); //[ 'This','is simple','string' ]

// 10. Split the string 30 Days Of JavaScript at the space using split() method
const str9 = "30 Days Of JavaScript".split(" ");
console.log(str9);
// 11'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

const str10 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(
  ","
);
console.log(str10);

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

const str11 = "30 Days Of JavaScript".replace("JavaScript", "Python");
console.log(str11);
// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

const str12 = "30 Days Of JavaScript".charAt(15);
console.log(str12);

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const str13 = "30 Days Of JavaScript".charCodeAt("S");
console.log(str13);
// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

const str14 = "30 Days Of JavaScript".indexOf("a");
console.log(str14);

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.

const str15 = "30 Days Of JavaScript".lastIndexOf("a");
console.log(str15); // 14

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const str16 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str16.indexOf("because"));
// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const str17 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str17.lastIndexOf("because"));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const str18 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(str18.search("because"));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

const str19 = " 30 Days Of JavaScript ";
console.log(str19.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const str20 = "30 Days Of JavaScript";
console.log(str20.startsWith("30"));
// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true

const str21 = "30 Days Of JavaScript";
console.log(str21.endsWith("JavaScript"));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
const str22 = "30 Days Of JavaScript";
console.log(str22.match(/a/gi));
// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const str23 = "30 Days of";
const str24 = " JavaScript";
console.log(str23.concat(str24));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log("30 Days Of JavaScript".repeat(2));
