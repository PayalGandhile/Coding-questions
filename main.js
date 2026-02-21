// 1. Check Even or Odd
// Use the modulus operator %.
// If a number is divisible by 2, it's even. Otherwise, it's odd.
function checkEvenOdd(num) {
   if (num % 2 === 0) {
       return "Even";
   } else {
       return "Odd";
   }
}

console.log(checkEvenOdd(10)); // Even
console.log(checkEvenOdd(7));  // Odd
// Shorter version:
let num = 5;
console.log(num % 2 === 0 ? "Even" : "Odd");

// 2. Check Prime Number
