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

function checkPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }

    return true;
}
console.log(checkPrime(2));
console.log(checkPrime(7));
console.log(checkPrime(21));



