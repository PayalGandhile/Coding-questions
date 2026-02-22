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


//3. Factorial of a Number
// n! = n × (n-1) × (n-2) × ... × 1


function findFactorial(num){
    let fact = 1;
    if(num<0) return "invalid Input";
    for(let i=2;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(findFactorial(5));

// Recursive 
function findFactorial1(num){
    if(num<0) return "invalid Input";
    if(num==0|| num==1)return 1;
    return num* findFactorial1(num-1);
}
console.log(findFactorial1(5));

// 4. Fibonacci Series (First N Terms)
// 0, 1, 1, 2, 3, 5, 8, 13 …
// F(n) = F(n-1) + F(n-2)
 function Fibonacci(n){
    let a=0;
    let b=1;
   for(let i=0;i<n;i++){
        console.log(a);
        let next=a+b;
        a=b;
        b=next
   } 
 }
 Fibonacci(7);