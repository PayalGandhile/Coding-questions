1️⃣ Even or Odd

Hint:

If a number is divisible by 2 → Even
Otherwise → Odd

Use modulus operator:
n % 2 === 0 → Even
n % 2 !== 0 → Odd


2️⃣ Prime Number

Hint:

A prime number has only 2 factors → 1 and itself

Check:
- If n <= 1 → Not prime
- Try dividing from 2 to √n
- If any number divides n → Not prime
- Else → Prime


3️⃣ Factorial

Hint:

n! = n × (n-1) × (n-2) × ... × 1

Special case:
0! = 1

Example:
5! = 5 × 4 × 3 × 2 × 1 = 120

4️⃣ Fibonacci Series

Hint:

Series:
0, 1, 1, 2, 3, 5, 8 ...

Rule:
F(n) = F(n-1) + F(n-2)

Start with:
0 and 1
Then keep adding previous two numbers

5️⃣ Reverse a Number

Hint:

Take last digit using:
n % 10

Remove last digit:
n = n // 10

Build reversed number:
rev = rev * 10 + digit

6️⃣ Reverse the string

(1)------

Step 1: Store original string
temp = str

Step 2: Create empty string
reversed = ""

Step 3: Loop from end to start
i = str.length - 1 → 0

Step 4: Build reversed string
reversed = reversed + str[i]

Step 5: Compare
reversed === original → Palindrome
else → Not Palindrome


(2)------

Compare first and last character
Then move inward

Example:
madam
m == m
a == a
d (middle)

All match → Palindrome

(3)------
str.split('').reverse().join('')

split('')--Converts string into array of characters
reverse() → reverses array elements
join('') → combines array into string

reverse() works on arrays, NOT strings
That’s why split() is needed first

7️⃣Armstrong Number
Hint:

An Armstrong number is a number equal to
the sum of its digits raised to the power of total digits

Steps:
1 Count number of digits → n
2 Take each digit
3 Raise it to power n → digit^n
4 Add all values
5 Compare with original number

153  Digits = 3
1³ + 5³ + 3³ = 1 + 125 + 27 = 153  → Armstrong Number


8️⃣ 
Sum of Digits.
Step 1: Initialize sum = 0

Step 2: Extract last digit
digit = num % 10

Step 3: Add to sum
sum = sum + digit

Step 4: Remove last digit
num = Math.floor(num / 10)

Step 5: Repeat until num becomes 0


9️⃣ Largest of Three Numbers.

If a > b AND a > c → a is largest
Else if b > a AND b > c → b is largest
Else → c is largest


🔟  

