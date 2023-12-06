function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
const num = 4;
if (isPrime(num)) {
  console.log(`${num} is a prime number.`);
} else {
  alert(`${num} is a composite number.`);
}
