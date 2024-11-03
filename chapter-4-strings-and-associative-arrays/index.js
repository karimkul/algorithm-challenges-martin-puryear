// 1. Remove Blanks
function removeBlanks(str) {
    let wordArr = str.split(" ");
    let wordStr = wordArr.join("");
    return wordStr;
}
console.log(removeBlanks("PI   ayTha   tF  u nkyM  usi   c  "));

// 2. String: Get Digits
const getDigits = function (str) {
    let nums = "1234567890";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
};
console.log(getDigits("Os1a3y5w7h9a2t4?6!8?0"));

// 3. Acronyms
function acronyms(str) {
    let result = "";
    let word = str.split(" ");
    for (let i = 0; i < word.length; i++) {
        result += word[i][0];
    }
    return result.toUpperCase();
}
console.log(acronyms("there's no free lunch - gotta pay yer way."));
console.log(acronyms("Live from New York, it's Saturday Night!"));

// 4. Count Non-Spaces
function countNonSpaces(str) {
    let spaceBlanks = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            spaceBlanks++;
        }
    }
    return str.length - spaceBlanks;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// 5. Remove Shorter Strings
function removeShorterStrings(arr) {
    let result = [];
    for (let str of arr) {
        if (str.length >= arr.length) {
            result.push(str);
        }
    }
    return result;
}
console.log(removeShorterStrings(["hello", "buyer", "call", "wtf"]));

// 6.String:Reverse
function stringReverse(str) {
    let = result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(stringReverse("creature"));

// 7. Remove Even-Length Strings
function removeEvenLengthStrings(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(
    removeEvenLengthStrings([
        "Nope!",
        "Its",
        "Kris",
        "starting",
        "with",
        "K!",
        "(instead",
        "of",
        "Chris",
        "with",
        "C)",
        "."
    ])
);

// 8. Intiger to Roman Numerals
function intToRoman(num) {
    const valueMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";

    for (const { value, numeral } of valueMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }

    return result;
}

console.log(intToRoman(1994)); // Output: "MCMXCIV"
console.log(intToRoman(2023)); // Output: "MMXXIII"
console.log(intToRoman(44)); // Output: "XLIV"

// 9. Roman Numerals to Intiger
function romanToInt(s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];

        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        prevValue = currentValue;
    }

    return total;
}

console.log(romanToInt("MCMXCIV")); // Output: 1994
console.log(romanToInt("MMXXIII")); // Output: 2023
console.log(romanToInt("XLIV")); // Output: 44

// 10. Parens Valid
function parensValid(str) {
    let openingParens = 0;
    let closingParens = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            openingParens++;
        }
        if (str[i] === ")") {
            closingParens++;
        }
    }
    if (openingParens !== closingParens) return false;
    return true;
}
console.log(parensValid("N(0(p)3"));

// 11. Braces Valid??????????????

// 12. String is: Palindrome
function stringIsPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return reversedStr === str;
}
console.log(stringIsPalindrome("racecar"));
console.log(stringIsPalindrome("Dud"));
console.log(stringIsPalindrome("oho"));

// 13. Longest Palindrome?????
// function longestPalindrome(str) {}

// 14.
