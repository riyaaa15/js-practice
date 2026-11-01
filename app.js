/// JS revision for questions

// Q1: Check if a number is even
const isEven = (num) => num % 2 === 0;
console.log(isEven(4));  // true

// Q2: Check if a number is positive
const isPositive = (num) => num > 0;
console.log(isPositive(5));  // true

// Q3: Return the bigger of two numbers
const getMax = (num1, num2) => {
    return Math.max(num1, num2);
}
console.log(getMax(3, 7));  // 7

// Q4: Reverse a string
const reverseString = (str) => {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}
console.log(reverseString("hello"));  // olleh

// Q5: Capitalize the first letter of a string
const capitalizeFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirst("riya"));  // Riya

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
console.log(countVowels("hello"));  // Total vowels = 2

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
console.log(findMax([3, 7, 2, 9, 4]));  // 9

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
console.log(findMin([5, 2, 9, 1, 7]));  // 1

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
console.log(countChar("banana", "a"));  // 3

// Q10: Check if a string is a palindrome
const isPalindromeStr = (str) => {
    return str === str.split('').reverse().join('');
}
console.log(isPalindromeStr("madam"));  // true

// Q11: Sum all numbers in an array
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));  // 10

// Q12: Multiply all numbers in an array
const multiplyArray = (arr) => {
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
        ans *= arr[i];
    }
    return ans;
}
console.log(multiplyArray([1, 2, 3, 4]));  // 24

// Q13: Remove duplicates from an array
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  // [1, 2, 3, 4, 5]

// Q14: Calculate factorial of a number
const factorial = (num) => {
    if (num < 0) return undefined;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));  // 120

// Q15: Check if two strings are anagrams
const isAnagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(isAnagram("listen", "silent"));  // true

// Q16: Count words in a sentence
const countWords = (str) => {
    return str.split(" ").length;
}
console.log(countWords("I love JavaScript"));  // 3

// Q17: Check if all characters in a string are unique
const getUniqueChars = (str) => {
    let uniqueSet = new Set(str.split(''));
    return str.length === uniqueSet.size;
}
console.log(getUniqueChars("abcdef"));  // true

// Q18: Find the sum of all even numbers in an array
const sumOfEvenNumbers = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count += arr[i];
        }
    }
    return count;
}
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));  // 12
console.log(sumOfEvenNumbers([1, 3, 5]));            // 0

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
console.log(secondLargest([3, 7, 2, 9, 4]));  // 7

// Q20: Flatten a deeply nested array
const flattenArray = (arr) => {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Q21: Check if one string contains another string
const isSubstring = (str1, str2) => {
    return str1.includes(str2);
}
console.log(isSubstring("hello world", "bye"));  // false

// Q22: Remove space from a string
const removeSpace = (str) => {
    return str.split(" ").join("");
}
console.log(removeSpace("h e l l o"));  // hello
console.log(removeSpace("i love js"));  // ilovejs

// Q23: Capitalize first letter of every word in a sentence
const capitalizeWords = (str) => {
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}
console.log(capitalizeWords("hello world"));  // Hello World
console.log(capitalizeWords("i love js"));    // I Love Js

// Q24: Sum of numbers within a range
const sumRange = (start, end) => {
    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
}
console.log(sumRange(1, 5));  // 15

// Q25: Check if a character is a vowel
const isVowel = (char) => {
    let letter = char.toLowerCase();

    return ("aeiou".includes(letter));
}
console.log(isVowel("U"));  // true

// Q26: Convert array of strings to object with lengths as values
const arrayToObject = (arr) => {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i].length;
    }

    return obj;
}
console.log(arrayToObject(["cat", "elephant", "dog"]));  // { cat: 3, elephant: 8, dog: 3 }

// Q27: Split array into chunks of given size
const chunkArray = (arr, num) => {
    let result = [];
    for (let i = 0; i < arr.length; i += num) {
        let chunk = arr.slice(i, i + num);
        result.push(chunk);
    }

    return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));  // [[1, 2], [3, 4], [5, 6], [7]]

// Q28: Generate array of numbers within a range
const range = (start, end) => {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }

    return arr;
}
console.log(range(3, 7));  // [3, 4, 5, 6, 7]

// Q29: Convert sentence to title case
const titleCase = (sentence) => {
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join(" ");
}
console.log(titleCase("jAVAscript IS fun"));  // Javascript Is Fun

// Q30: Find most frequent character in a string
const mostFrequentChar = (str) => {
    let freq = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (freq[char]) {
            freq[char] = freq[char] + 1;
        } else {
            freq[char] = 1;
        }
    }

    let maxChar = "";
    let maxCount = 0;

    for (let char in freq) {
        if (freq[char] > maxCount) {
            maxCount = freq[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(mostFrequentChar("banana"));  // a

// Q31: Check if a year is a leap year
const isLeapYear = (year) => {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isLeapYear(2000));  // true
console.log(isLeapYear(1900));  // false
console.log(isLeapYear(2024));  // true
console.log(isLeapYear(2028));  // true

// Q32: Implement caesar cipher (letter shifting)
const caesarCipher = (str, shift) => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        let newCode = ((code - 97 + shift) % 26) + 97;
        result += String.fromCharCode(newCode);
    }

    return result;
}
console.log(caesarCipher("abc", 1));  // bcd
console.log(caesarCipher("xyz", 2));  // zab

// Q33: Check if a person is adult or not
const checkAge = (age) => {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}
console.log(checkAge(25));  // Adult

// Q34: Get grades based on marks
const getGrade = (marks) => {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else {
        return "F";
    }
}
console.log(getGrade(95));  // A
console.log(getGrade(60));  // C
console.log(getGrade(30));  // F

// Q35: Check if a sentence is a pangram
const isPangram = (str) => {
    let newStr = str.toLowerCase().split(' ').join('');
    let unique = new Set(newStr.split(''));
    return unique.size === 26;
};
console.log(isPangram("Hello world"));                                   // false
console.log(isPangram("The quick brown fox jumps over the lazy dog"));   // true

// Q36: Truncate string with ellipsis if too long
const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    } else {
        return str;
    }
}
console.log(truncateString("Hello world", 5));  // Hello...

// Q37: Sum of even numbers b/w 1 to 10 (with tracing)
const sumEvenOneToTen = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenOneToTen());  // 30

// Q38: Sum of odd numbers b/w 1 to 10 (with tracing)
const sumOddOneToTen = () => {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumOddOneToTen());  // 25

// Q39: Sum of even numbers b/w 20 to 10
const sumEvenTwentyToTen = () => {
    let sum = 0;
    for (let i = 20; i >= 10; i--) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenTwentyToTen());  // 90

// Q40: Print each digit in a number (in reverse order)
const digitInReverse = (num) => {
    while (num > 0) {
        let digit = num % 10;
        console.log(digit);
        num = Math.floor(num / 10);
    }
}
digitInReverse(123);  // 3, 2, 1 (alag-alag lines mein)

// Q41: Sum of even digits in a number
const evenDigitSum = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 === 0) {
            sum += digit;
        }
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(evenDigitSum(12345));  // 6

// Q41: Swapping two numbers
const swapNum = (num1, num2) => {
    let temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(num1, num2);
}
swapNum(2, 5);  // 5 2

// Q42: Swapping two numbers without temp
const swapNums = (num1, num2) => {
    num1 += num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log(num1, num2);
}
swapNums(2, 5);  // 5 2

// Q43: Count how many digits are present in a number
const countDigits = (num) => {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countDigits(6512318));  // 7

// Q44: Count even digits in a number
const countEvenDigit = (num) => {
    let count = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 === 0) {
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(countEvenDigit(6512318));  // 3 (6, 2, 8)

// Q45: Reverse the number
const reverseNumber = (num) => {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(123456));  // 654321

// Q46: Check if the number is palindrome or not
const isPalindromeNum = (num) => {
    let reversed = reverseNumber(num);
    return num === reversed;
}
console.log(isPalindromeNum(25252));  // true

// Q47: Count odd numbers in an array
const countOddNumbers = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
}
console.log(countOddNumbers([2, 5, 7, 8, 10, 13, 4]));  // 3

// Q48: Palindrome numbers between 10 to 200
const isPalindromeNums = () => {
    for (let i = 10; i <= 200; i++) {
        let reversed = reverseNumber(i);
        if (i === reversed) {
            console.log(i);
        }
    }
}
isPalindromeNums();
// 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191

// Q49: Calculate power of number
const numberPower = (base, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}
console.log(numberPower(2, 3));  // 8

// Q50: Calculate square of the even digits in a number
const squareOfNumber = (num) => {
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 === 0) {
            let square = digit * digit;
            console.log(square);
        }
        num = Math.floor(num / 10);
    }
}
squareOfNumber(1237);  // 4 (sirf digit 2 even hai)

// Q51: Calculate cube of every digit if digit is odd in a number
const cubeOfDigit = (num) => {
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 !== 0) {
            let cubes = digit * digit * digit;
            console.log(cubes);
        }
        num = Math.floor(num / 10);
    }
}
cubeOfDigit(12345);  // 125, 27, 1 (alag-alag lines mein)

// Q52: Sum of square of each digit if digit is even in a number
const evenSquareSum = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 === 0) {
            sum += digit * digit;
        }
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log(evenSquareSum(12345));  // 20 (16 + 4)

// Q53: Print divisors of 10
const pritnDivisors = () => {
    for (let i = 1; i <= 10; i++) {
        if (10 % i === 0) {
            console.log(i);
        }
    }
}
pritnDivisors();  // 1, 2, 5, 10 (alag-alag lines mein)

// Q54: Numbers between 1-20 divisible by 2 and 4
const divisibleNum = () => {
    let result = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0 && i % 4 === 0) {
            result.push(i);
        }
    }

    return result;
}
console.log(divisibleNum());  // [4, 8, 12, 16, 20]

// Q55: Sum of numbers b/w 20-60 divisible by 11
const divisibleSum = () => {
    let sum = 0;
    for (let i = 20; i <= 60; i++) {
        if (i % 11 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(divisibleSum());  // 154 (22 + 33 + 44 + 55)

// Q56: Tracing for perfect no 28 and 6
const isPerfect = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
            console.log("i =", i, "sum =", sum);
        }
    }

    return sum === num;
}
console.log(isPerfect(28));
// i = 1 sum = 1
// i = 2 sum = 3
// i = 4 sum = 7
// i = 7 sum = 14
// i = 14 sum = 28
// true
console.log(isPerfect(6));
// i = 1 sum = 1
// i = 2 sum = 3
// i = 3 sum = 6
// true

// Q57: Extract digit in a num, if digit is even then factorial
const EvenNumFactorial = (num) => {

    while (num > 0) {
        let digit = num % 10;

        if (digit % 2 === 0) {
            let factorial = 1;

            for (let i = 1; i <= digit; i++) {
                factorial *= i;
            }

            console.log(digit + "! =", factorial);
        }

        num = Math.floor(num / 10);
    }
}
EvenNumFactorial(1234);
// 4! = 24
// 2! = 2

// Q58: Calculate sum of factorial of odd digit in a number
const sumOddFactorial = (num) => {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;

        if (digit % 2 !== 0) {
            let factorial = 1;

            for (let i = 1; i <= digit; i++) {
                factorial *= i;
            }
            sum += factorial;
        }

        num = Math.floor(num / 10);
    }

    console.log("Sum of odd factorials is:", sum);
    return sum;
};
sumOddFactorial(1234);  // Sum of odd factorials is: 7 (3! + 1! = 6 + 1)

// Q59: Add two nums then check their sum is even or odd
const addTwoNums = (a, b) => {
    return a + b;
}

const checkAdditionType = (a, b) => {
    let sum = addTwoNums(a, b);
    return isEven(sum) ? "Even" : "Odd";
}
console.log(checkAdditionType(2, 4));  // Even

// Q54: Sum of even digits, then square the result
const sumOfEvenDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 === 0) {
            sum += digit;
        }
        num = Math.floor(num / 10);
    }
    return sum;
};

const SquareOfEvenSum = (num) => {
    let sum = sumOfEvenDigits(num);
    return sum * sum;
}
console.log(SquareOfEvenSum(12345));  // 36

// Q55: Factorial of each digit, sum them all
const sumOfDigitFactorial = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        let factorial = 1;
        for (let i = 1; i <= digit; i++) {
            factorial *= i;
        }
        sum += factorial;
        num = Math.floor(num / 10);
    }
    return sum;
};
console.log(sumOfDigitFactorial(234));  // 32 (24 + 6 + 2)

// Q56: Check number is Strong Number or not
const isStrongNumber = (num) => {
    let sum = sumOfDigitFactorial(num);
    return sum === num;
}
console.log(isStrongNumber(145));  // true

// Q57: Print the strong numbers between 1 to 1000
const printStrongNumbers = () => {
    for (let i = 1; i <= 1000; i++) {
        if (isStrongNumber(i)) {
            console.log(i);
        }
    }
}
printStrongNumbers();  // 1, 2, 145 (alag-alag lines mein)

// Q58: Special two digit number
const specialTwoDigitNumber = (num) => {
    let original = num;
    let sum = 0;
    let product = 1;

    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        product *= digit;
        num = Math.floor(num / 10);
    }

    if (sum + product === original) {
        return true;
    }
    return false;
}
console.log(specialTwoDigitNumber(59));  // true

// Q59: Special numbers b/w 10 to 100
const printSpeciaNumber = () => {
    for (let i = 10; i <= 100; i++) {
        if (specialTwoDigitNumber(i)) {
            console.log(i);
        }
    }
}
printSpeciaNumber();  // 19, 29, 39, 49, 59, 69, 79, 89, 99 (alag-alag lines mein)

// Q60: Check number if prime or not
const primeNumber = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return "Not a Prime Number";
        }
    }
    return "Prime Number";
}
console.log(primeNumber(13));  // Prime Number

// Q61: Prime numbers b/w 1 to 50
const primeNumbers = () => {
    let arr = [];

    for (let i = 2; i <= 50; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {

            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            arr.push(i);
        }
    }
    console.log(arr);
}
primeNumbers();  // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

// Q62: Fibonacci number series
const fibonacciNum = () => {
    let a = 0;
    let b = 1;

    for (let i = 0; i <= 10; i++) {
        console.log(a);

        let next = a + b;
        a = b;
        b = next;
    }
}
fibonacciNum();  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 (alag-alag lines mein)

// Q63: Print Armstrong no in 1 to 1000
const armstrongNum = () => {
    for (let i = 1; i <= 1000; i++) {
        let count = 0;
        let sum = 0;
        let temp = i;

        while (temp > 0) {
            count++;
            temp = Math.floor(temp / 10);
        }

        temp = i;

        while (temp > 0) {
            let digit = temp % 10;
            sum += digit ** count;
            temp = Math.floor(temp / 10);
        }

        if (sum === i) {
            console.log(i);
        }
    }
}
armstrongNum();  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407 (alag-alag lines mein)

// Q64: Check if num is single digit or not
const isSingleDigit = (num) => {
    if (num >= -9 && num <= 9) {
        return true;
    }
    return false;
}
console.log(isSingleDigit(4));   // true
console.log(isSingleDigit(42));  // false

// Q65: Count vowels and consonants from a string
const countVowelsAndConsonants = (str) => {
    let char = str.toLowerCase();

    let vowels = 0;
    let consonants = 0;

    for (let i = 0; i < char.length; i++) {
        if ("aeiou".includes(char[i])) {
            vowels++;
        } else if (char[i] !== " ") {
            consonants++;
        }
    }

    return { vowels: vowels, consonants: consonants };
}
console.log(countVowelsAndConsonants("helllo"));       // { vowels: 2, consonants: 4 }
console.log(countVowelsAndConsonants("hello world"));  // { vowels: 3, consonants: 7 }

// Q66: Repeat a string n number of times
const repeatString = (str, times) => {
    return str.repeat(times);
}
console.log(repeatString("abc", 3));  // abcabcabc

// Q67: The first non-repeating character
const firstNonRepeating = (str) => {
    let count = {};

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}
console.log(firstNonRepeating("aabbcddee"));  // c
console.log(firstNonRepeating("swiss"));      // w

// Q68: Get initials from a full name
const getInitials = (str) => {
    let words = str.split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        result += words[i][0].toUpperCase();
    }

    return result;
}
console.log(getInitials("be happy!"));  // BH

// Q69: Find the longest word in a sentence
const longestWord = (str) => {
    let words = str.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}
console.log(longestWord("I love programming"));  // programming

// Q70: Remove vowels from a string
const removeVowels = (str) => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!isVowel(str[i])) {
            result += str[i];
        }
    }
    return result;
}
console.log(removeVowels("JavaScript"));  // JvScrpt

// Q71: Count words starting with a given letter
function countWordsStartingWith(sentence, letter) {
    let words = sentence.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i][0].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    return count;
}
console.log(countWordsStartingWith("Be happy and brave", "b"));  // 2
console.log(countWordsStartingWith("I love JavaScript", "j"));   // 1

// Q72: Find missing number
function findMissing(arr) {
    let n = arr.length + 1;
    let totalSum = (n * (n + 1)) / 2;
    let arrSum = arr.reduce((acc, num) => acc + num, 0);
    return totalSum - arrSum;
}
console.log(findMissing([1, 2, 4, 5, 6]));  // 3

// Q73: Swap the case of each letter in a string
const swapCase = (str) => {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }

    return result;
}
console.log(swapCase("Hello World"));  // hELLO wORLD

// Q74: Check if an array is sorted in ascending order
const isSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 3, 2, 5]));  // false

// Q75: Check if all elements in an array are even
const allEven = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }

    return true;
}
console.log(allEven([2, 4, 6]));  // true
console.log(allEven([2, 3, 6]));  // false

// Q76: Find the index of a value in an array
const findIndex = (arr, targetVal) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === targetVal) {
            return i;
        }
    }

    return -1;
}
console.log(findIndex([10, 20, 30, 40], 30));  // 2
console.log(findIndex([10, 20, 30, 40], 99));  // -1

// Q77: Find the First Repeated Character
const findRepeated = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return str[i];
            }
        }
    }
    return "No repeated character";
};

console.log(findRepeated("hello"));   // l
console.log(findRepeated("program")); // r
console.log(findRepeated("abcde"));   // No repeated character
 
// Q78: count how many times a value appears in an array
const countOccurrences = (arr, target) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2));    // 3
console.log(countOccurrences(["a", "b", "a"], "a"));  // 2
console.log(countOccurrences([1, 2, 3], 9));          // 0

// Q79: reverse the order of words in a sentence
const reverseWords = (str) => {
    let words = str.split(" ");
    let result = "";

    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i !== 0) {
            result += " ";
        }
    }

    return result;
}

console.log(reverseWords("I love JavaScript"));  // JavaScript love I
console.log(reverseWords("be happy"));           // happy be
console.log(reverseWords("hello"));              // hello

// Q80: find common elements between two arrays
const commonElements = (arr1, arr2) => {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));  // [3, 4]
console.log(commonElements([1, 2, 2, 3], [2, 2, 3]));     // [2, 3]
console.log(commonElements([1, 2], [3, 4]));              // []

//Q81: find the second smallest number in an array
const secondSmallest = (arr) => {
    let smallNum = arr[0];
    let secondSmallNum = Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallNum) {
            secondSmallNum = smallNum;
            smallNum = arr[i]
        } else if(arr[i] < secondSmallNum && arr[i] !== smallNum) {
            secondSmallNum = arr[i];
        }
        
    }

    return secondSmallNum;
}

console.log(secondSmallest([2, 5, 6, 9, 8])); //5

// Q82: check if a sentence is a palindrome
const isPalindromeSentence = (str) => {
    let cleaned = str.toLowerCase().split(" ").join("");
    return cleaned === cleaned.split('').reverse().join('');
}

console.log(isPalindromeSentence("Nurses Run")); //true
console.log(isPalindromeSentence("hello world"));  // false
