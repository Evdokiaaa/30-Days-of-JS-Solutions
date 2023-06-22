const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let A = new Set(a);
let B = new Set(b);

//1

const union = new Set([...a, ...b]);
console.log(union);

//2
const intersection = a.filter((num) => {
  return B.has(num);
});
console.log(intersection);
