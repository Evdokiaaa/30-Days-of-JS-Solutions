// Write a program which tells the number of days in a month.
const month2 = prompt("Enter month to check number of days").toLowerCase();
switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days`);
    break;
  case "febuary":
    console.log(`${month} has 28 days`);
    break;
  default:
    console.log("invalid month entered");
}

//Write a program which tells the number of days in a month, now consider leap year.

const month3 = prompt("Enter a month: ").toLowerCase();
const year = parseInt(prompt("Enter a year: "));
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${month} has 31 days in ${year}.`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${month} has 30 days in ${year}.`);
    break;
  case "February":
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${month} has 29 days in ${year}.`);
      break;
    } else {
      console.log(`${month} has 28 days in ${year}.`);
      break;
    }
  default:
    alert("Please enter a valid month name!");
    break;
}
