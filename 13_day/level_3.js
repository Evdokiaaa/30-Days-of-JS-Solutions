//while, for, for of, forEach
const nums = [1, 2, 3];

let i = 0;
console.time("While loop");
while (i < nums.length) {
  console.log(nums[i]);
  i++;
}
console.timeEnd("While loop");

//console.log();
console.time("For loop");
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
console.timeEnd("For loop");

console.time("ForOF loop");

for (const num of nums) {
  console.log(num);
  //continue;
}
console.timeEnd("ForOF loop");

console.time("ForEach loop");
nums.forEach((num) => console.log(num));
console.timeEnd("ForEach loop");
