//1
const emptySet = new Set();
//2
for (let i = 0; i < 10; i++) {
  emptySet.add(i);
}
console.log(emptySet);
//3
emptySet.delete(5);
//4
emptySet.clear();
//5
const names = ["MAria", "Ixaax", "ryan", "days", "javascript"];
let namesSet = new Set();
names.forEach((name) => {
  namesSet.add(name);
});
console.log(namesSet);
//6
const map = new Map();
let countries = ["Russia", "USA", "China", "Poland", "Japan"];
countries.forEach((item, i) => {
  map.set(item, item.length);
});
console.log(map);
