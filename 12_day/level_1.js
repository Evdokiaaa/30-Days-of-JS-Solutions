//1
const text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
const money = text.match(/\d+/g);
let balance = 0;
money.forEach((item) => (balance += +item));
console.log(balance);
