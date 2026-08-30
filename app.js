/// JS revision for questions

// Q1: Check if a number is even
const isEven = (num) => num % 2 === 0;
console.log(isEven(4));


// Q2: Check if a number is positive
const isPositive = (num) => num > 0;
console.log(isPositive(5));


// Q3: Return the bigger of two numbers
const getMax = (num1, num2) => {
    return Math.max(num1, num2);
}
console.log(getMax(3, 7));


// Q4: Reverse a string
const reverseString = (str) => {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}
console.log(reverseString("hello"));


// Q5: Capitalize the first letter of a string
const capitalizeFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirst("riya"));


// Q6: Count vowels in a string
const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i])) {
            count++;
        }
    }
    return "Total vowels = " + count;
}
console.log(countVowels("hello"));


// Q7: Find the max number in an array
const findMax = (arr) => {
    let maxNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(findMax([3, 7, 2, 9, 4]));


// Q8: Find the min number in an array
const findMin = (arr) => {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
}
console.log(findMin([5, 2, 9, 1, 7]));


// Q9: Count occurrences of a character in a string
const countChar = (str, char) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countChar("banana", "a"));


// Q10: Check if a string is a palindrome
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam"));


// Q11: Sum all numbers in an array
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));


// Q12: Multiply all numbers in an array
const multiplyArray = (arr) => {
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        ans *= arr[i];
    }
    return ans;
}
console.log(multiplyArray([1, 2, 3, 4]));


// Q13: Remove duplicates from an array
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// Q14: Calculate factorial of a number
const factorial = (num) => {
    if (num < 0) return undefined;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));


// Q15: Check if two strings are anagrams
const isAnagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent"));


// Q16: Count words in a sentence
const countWords = (str) => {
    return str.split(" ").length;
}
console.log(countWords("I love JavaScript"));


// Q17: Check if all characters in a string are unique
const getUniqueChars = (str) => {
    let uniqueSet = new Set(str.split(''));
    return str.length === uniqueSet.size;
}
console.log(getUniqueChars("abcdef"));

