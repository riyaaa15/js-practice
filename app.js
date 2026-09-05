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


// Q18: Find the sum of all even numbers in an array
const sumOfEvenNumbers = (arr) => {
    let count = 0;

     for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            count += arr[i]
        } 
     }
     return count;
}

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(sumOfEvenNumbers([1, 3, 5])); 


// Q19: Find the second largest number in an array
const secondLargest = (arr) => {
    let maxNum = arr[0];
    let secondMaxNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            secondMaxNum = maxNum;
            maxNum = arr[i];
        } else if (arr[i] > secondMaxNum) {
            secondMaxNum = arr[i];
        }
    }
    return secondMaxNum;
}
console.log(secondLargest([3, 7, 2, 9, 4]));


// Q20: Flatten a deeply nested array
const flattenArray = (arr) => {
    return arr.flat(Infinity);
}

console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));


// Q21: Check if one string contains another string
const isSubstring = (str1, str2) => {
    return str1.includes(str2);
}

console.log(isSubstring("hello world", "bye"));


// Q22: Remove space from a string
const removeSpace = (str) => {
    return str.split(" ").join("");
}

console.log(removeSpace("h e l l o"));
console.log(removeSpace("i love js"));


// Q23: capitalize first letter of every word in a sentence
const capitalizeWords = (str) => {
    let words = str.split(" ");

    for(let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

console.log(capitalizeWords("hellop world"));
console.log(capitalizeWords("i love js"));


 // Q24: sum of numbers within a range
const sumRange = (start, end) => {
    let result = 0;

    for(let i = start; i <= end; i++ ) {
        result += i
    }

     return result;
}

console.log(sumRange(1, 5));


// Q25: check if a character is a vowel
const isVowel = (char) => {
    let letter = char.toLowerCase();

    return ("aeiou".includes(letter));
}

console.log(isVowel("U"));