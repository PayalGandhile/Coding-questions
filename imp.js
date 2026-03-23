// Reverse String(1)
function reverseStr(str) {

    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    return reverse;
}
console.log("Reverse String", reverseStr("hello"));

// (2)
let str = Hello;
let reverse = str.split("").reverse().join("");
console.log(reverse);

// Palindrome(1) number
function checkPalindrome(num) {
    let temp = num;
    let reverse=0;
    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10+ digit;
        num = Math.floor(num / 10);
    }
    return reverse == temp;
}
console.log(checkPalindrome(121));

function checkPalindromeStr(str) {
    let temp = str;
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    return reverse == temp ? "palindrome" : "Not palindrome";
}
console.log(checkPalindromeStr("madam"));

// Max in Array

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
let arr = [12, 3, 4, 2544, 34, 4];
console.log("max", findMax(arr))

// Sum of Array
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
let Array=[9,4,3,2];
console.log("sum",findSum(Array));

// Count Vowels(1)

function countVowels(str){
    let count=0;
    let Vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(Vowels.includes(str[i])){
            count++
        }
    }
    return count;
}
console.log(countVowels("hello"));

// (2)
function countVowels1(str){
    let count=0;
    let temp=str.toUpperCase();
    for(let i=0;i<=temp.length;i++){
        if(temp[i]=="A" ||temp[i]=="E"||temp[i]=="I"||temp[i]=="O" || temp[i]=="U"){
            count++;
        }
    }
    return count;
}
console.log(countVowels1("hello"));


