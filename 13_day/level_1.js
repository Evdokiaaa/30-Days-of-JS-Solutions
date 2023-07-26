const countries = [["Russia", "China", "Japan", "India"]];
console.table(countries);
const countriesObj = [
  { name: "Russia", capital: "Moscow" },
  { name: "China" },
  { name: "Japan" },
  { name: "India" },
];
console.table(countriesObj);

console.group("Countries");
console.log(countries);
console.log(countriesObj);
console.groupEnd();
