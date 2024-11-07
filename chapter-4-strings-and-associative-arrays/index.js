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

// 14. Is Word Alphabetical ?????????
// 15. D Get Jiggy
function dGetJiggy(str) {
    return `${str.slice(1)} to the ${str[0].toUpperCase()}`;
}
console.log(dGetJiggy("Dylan"));

// 16. Common Suffix
// 17. Book Index
// 18. Drop the Mike
function formatString(str) {
    let trimmedStr = str.trim();

    if (trimmedStr.toLowerCase().includes("mike")) {
        return "stunned silence";
    }
    const words = trimmedStr.split(" ");
    const capitalizedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
        } else {
            capitalizedWords.push(word);
        }
    }
    return capitalizedWords.join(" ");
}
console.log(formatString("  hello world")); // "Hello World"
console.log(formatString("  mike is here")); // "stunned silence"
console.log(formatString("  alice and mike")); // "stunned silence"
console.log(formatString("  this is a test")); // "This Is A Test"

// 19. Coin Change with Object
function getOptimalCoinConfiguration(cents) {
    const coins = {
        quarters: 25,
        dimes: 10,
        nickels: 5,
        pennies: 1
    };

    const coinCount = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    };

    for (const coin in coins) {
        while (cents >= coins[coin]) {
            coinCount[coin]++;
            cents -= coins[coin];
        }
    }

    return coinCount;
}

console.log(getOptimalCoinConfiguration(99)); // { quarters: 3, dimes: 2, nickels: 0, pennies: 4 }
console.log(getOptimalCoinConfiguration(41)); // { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }
console.log(getOptimalCoinConfiguration(0)); // { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }

// 20. Max/Min/Avarage with Object
function calculateStates(data) {
    let numbers = data.numbers;

    let minNum = Math.min(...numbers);
    let maxNum = Math.max(...numbers);

    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    let averageNum = sum / numbers.length;

    return {
        min: minNum,
        average: averageNum,
        max: maxNum
    };
}
var data = {
    numbers: [10, 20, 30, 40, 50]
};

console.log(calculateStates(data)); // { max: 50, min: 10, average: 30 }

// 21. Zip Arrays into Map
function zipToObject(keys, values) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }
    return obj;
}
const keys = ["a", "b", "c"];
const values = [1, 2, 3];

console.log(zipToObject(keys, values));

// 22. Invert Hash  ????????
function invertHash(assocObj) {
    let obj = {};

    for (let key in assocObj) {
        if (assocObj.hasOwnProperty(key)) {
            let value = assocObj[key];

            obj[value] = key;
        }
    }

    return obj;
}
const data2 = {
    name: "Zaphod",
    charm: "high",
    morals: "dicey"
};
console.log(invertHash(data2));

// 23. Associative Array: Number of Values (without .Length)
function lengthOfObj(data) {
    const length = Object.keys(data).length;
    return length;
}

const data3 = {
    band: "Travis Shredd & the Good Ol' Homeboys",
    style: "Country/Metal/Rap",
    album: "668: The Neighbor of the Beast"
};
console.log(lengthOfObj(data3));

// 24. String.concat
function stringConcat(str1, str2, str3) {
    const result = str1.concat(` ${str2}, ${str3}`);
    return result;
}
const str1 = "Hello";
const str2 = "From";
const str3 = "Java Script";

console.log(stringConcat(str1, str2, str3));

// 25. String.slice
function stringSlice(str, start, end) {
    return str.slice(start, end);
}
console.log(stringSlice("Hello my boy", 1, 8));

// 26. String.trim
function stringTrim(str) {
    return str.trim();
}
console.log(stringTrim("   Hello From JavaScript       "));

// 27. String.split
function stringSplit(str) {
    return str.split(" ");
}
console.log(stringSplit("Hello from JavaScript"));

// 28 String.search
function stringSearch(str, search) {
    return str.search(search);
}
console.log(stringSearch("hello ho yoooo", " "));
