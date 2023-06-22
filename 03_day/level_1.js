//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "yourname";
const lastName = "yourSurname";
const country = "yourCountry";
const city = "yourCity";
const age = 10;
const isMarried = false;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof age);
console.log(typeof isMarried);

//2. Check if type of '10' is equal to 10

console.log("10" == 10); //true
console.log("10" === 10); //false

//3. Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") === 10); // false

//4. Check if parseInt('9.8') is equal to 10

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

console.log(true == true);
console.log(1 == true); // 1 === true -> false
console.log("1" == true);

console.log("" == false);
console.log(0 == false);
console.log([] == false);

//5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); //false
console.log(4 == "4"); // true
console.log(4 === "4"); //false
console.log("python".length !== "jargon".length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); // true
//There is no 'on' in both dragon and python ???

//7.

//Use the Date object to do the following activities

//What is the year today?
console.log(new Date().getFullYear());
// What is the month today as a number?
console.log(new Date().getMonth().toLocaleString);
// What is the date today?
console.log(new Date());
// What is the day today as a number?
console.log(new Date().getDay());
// What is the hours now?
console.log(new Date().getHours());
// What is the minutes now?
console.log(new Date().getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(new Date().getTime() / 1000);
