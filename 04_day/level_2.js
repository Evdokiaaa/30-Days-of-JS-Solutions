//Write a code which can give grades to students according to theirs scores:
// 90-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const score = 30;
if (score >= 90 && score <= 100) console.log("A");
else if (score >= 70 && score <= 89) console.log("B");
else if (score >= 60 && score <= 69) console.log("C");
else if (score >= 50 && score <= 59) console.log("D");
else console.log("F");

//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const month = prompt("enter month to check seasons");
switch (month) {
  case "september":
  case "october":
  case "november":
    console.log("The season is Autumn");
    break;
  case "december":
  case "january":
  case "febuary":
    console.log("The season is Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("The season is Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("The season is Summer");
    break;
  default:
    console.log("invalid Month");
}
//3. Check if a day is weekend day or a working day. Your script will take day as an input.
const weekDay = prompt(
  "Enter weekday to check if it's a weekend"
).toLowerCase();
if (weekDay == "saturday" || weekDay == "sunday") {
  console.log(`${weekDay} is a weekend day`);
} else if (
  weekDay == "monday" ||
  weekDay == "tuesday" ||
  weekDay == "wednesday" ||
  weekDay == "thursday" ||
  weekDay == "friday"
) {
  console.log(`${weekDay} is a work day`);
} else {
  console.log("invalid weekDay");
}
