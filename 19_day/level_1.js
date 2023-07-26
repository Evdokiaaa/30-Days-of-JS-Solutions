function counter() {
  let count = 0;
  function addPlusOne() {
    count++;
    return count;
  }
  return addPlusOne;
}
const count = counter();
console.log(count());
console.log(count());
console.log(count());
