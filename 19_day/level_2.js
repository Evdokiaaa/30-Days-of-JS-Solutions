function counter() {
  let count = 0;

  function plusOne() {
    count++;
    return count;
  }

  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
let a = counter();
console.log(a.plusOne);
console.log(a.plusOne);
console.log(a.plusOne);
