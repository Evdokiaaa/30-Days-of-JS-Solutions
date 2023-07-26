let primes = [];
function primeNumbers() {
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let factor = 2; factor <= Math.sqrt(i); factor++) {
      if (i % factor === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }
}
primeNumbers();
console.log(primes);
