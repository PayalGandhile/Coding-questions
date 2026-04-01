// 1. Check Even or Odd---------------------------------------------------
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

// 2. Check Prime Number---------------------------------------------------

function checkPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
console.log(checkPrime(2));
console.log(checkPrime(7));
console.log(checkPrime(21));


//3. Factorial of a Number---------------------------------------------------
// n! = n × (n-1) × (n-2) × ... × 1


function findFactorial(num) {
    let fact = 1;
    if (num < 0) return "invalid Input";
    for (let i = 2; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log("Factorial of a Number", findFactorial(5));

// Recursive 
function findFactorial1(num) {
    if (num < 0) return "invalid Input";
    if (num == 0 || num == 1) return 1;
    return num * findFactorial1(num - 1);
}
console.log("Factorial of a Number", findFactorial1(5));

// 4. Fibonacci Series (First N Terms)---------------------------------------------------
// 0, 1, 1, 2, 3, 5, 8, 13 …
// F(n) = F(n-1) + F(n-2)
function Fibonacci(n) {
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next
    }
}

Fibonacci(7);

//  5. Reverse a Number---------------------------------------------------
function reverseNum(num) {
    let sign = num < 0 ? -1 : 1;
    num = Math.abs(num);
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed * sign;
}
console.log(reverseNum(1234));   // 4321
console.log(reverseNum(-567));   // -765



function reverseNumber(num) {
    let sign = num < 0 ? -1 : 1;

    let reversed = parseInt(
        Math.abs(num).toString().split('').reverse().join('')
    );

    return reversed * sign;
}
console.log(reverseNumber(-967));   // -769

// 6. Check Palindrome Number---------------------------------------------------
function checkPalindrome(num) {
    let temp = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return (reversed == temp ? "palindrome" : "Not Palindrome");
    //return temp === reversed;

}
console.log(checkPalindrome(1221));
console.log(checkPalindrome(13441));

// Check Palindrome String---------------------------------------------------
function checkPalindromeStr(str) {
    let temp = str;
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    return (reversed == temp ? "palindrome" : "Not Palindrome");
    // return temp === reversed;

}
console.log(checkPalindromeStr("payal"));
console.log(checkPalindromeStr("madam"));


function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

console.log(isPalindrome("madam")); // true

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam")); // true

// 7. Armstrong Number-------------------------------------------------
function checkArmstrong(num) {
    let temp = num;
    let sum = 0;
    let digitCount = num.toString().length
    while (num != 0) {
        let digit = num % 10;
        sum = sum + (digit ** digitCount);//it mean  digit raised to the power of digitCount 
        num = Math.floor(num / 10);
    }
    return (sum == temp ? "Armstrong" : "Not Armstrong");
    // return sum==temp;
}
console.log("checkArmstrong", checkArmstrong(1634));
console.log("checkArmstrong", checkArmstrong(163));


// 8. Sum of Digits
function findSumOfDigit(num) {
    num = Math.abs(num); // handle negative numbers
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum = sum + digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(findSumOfDigit(1234));//10
console.log(findSumOfDigit(-567)); //18

// 9. Largest of Three Numbers
function largestNum(a, b, c) {

    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(largestNum(21, 34, 2));

