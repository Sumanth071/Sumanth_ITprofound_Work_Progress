// Write a function fibonacci(n) that returns an array of first n Fibonacci numbers?

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    return fibArray;
}
console.log(fibonacci(10));

//STRING FIBONACCI

function fibonacciString(n) {
    if (n <= 0) return '""';
    if (n === 1) return '"0"';
    if (n === 2) return '"0, 1"';

    const fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return '"' + fibArray.join(", ") + '"';
}

console.log(fibonacciString(10));

//Create a function reverseString(str) that returns the reversed string? 

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("SUMANTH YADAV KUNDETI"));


// Function isPalindrome(str) to check if a string is a palindrome.?


function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}



console.log(isPalindrome("madam"));       
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));      
console.log(isPalindrome("A man a plan a canal Panama"));

