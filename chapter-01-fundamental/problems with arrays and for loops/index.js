// 1. Biggie Size
function makeItBig(arr) {
    let result = [];
    for (char of arr) {
        if (char <= 1) {
            result.push(char);
        } else {
            result.push("big");
        }
    }
    return result;
}
console.log(makeItBig([-1, 3, 5, -5]));

// 2. Print Low, Return High
function printLowReturnHigh(arr) {
    if (arr.length === 0) {
        return null;
    }

    let low = arr[0];
    let high = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        }
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(`The lowest value is: ${low}`);
    return `The highest value is: ${high}`;
}

const arrNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(printLowReturnHigh(arrNumbers));

// 3. Print One Return Another
function printOneReturnAnother(arr) {
    let firstOddNum = 0;
    let secondToLast = arr[arr.length - 2];
    for (char of arr) {
        if (char % 2 !== 0) {
            firstOddNum = char;

            break;
        }
    }
    console.log(secondToLast);
    return firstOddNum;
}
console.log(printOneReturnAnother([110, 2, 3, 4, 5, 6]));

// 4. Double Vision
function doubleVision(arr) {
    let doubledVision = [];
    for (num of arr) {
        doubledVision.push(num + num);
    }
    return doubledVision;
}
console.log(doubleVision([1, 2, 3, 4]));

// 5. Count Positives
function countPositives(arr) {
    let countPosNums = 0;
    for (num of arr) {
        if (num > 0) {
            countPosNums++;
        }
        if (arr.length > 0) {
            arr[arr.length - 1] = countPosNums;
        }
    }
    return arr;
}
console.log(countPositives([-1, 1, 1, 1]));

// 6. Evens and Odds
function evenAndOdd(arr) {
    let oddCount = 0;
    let evenCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }

        if (oddCount === 3) {
            return "that's odd";
        }

        if (evenCount === 3) {
            return "even more so";
        }
    }
}

console.log(evenAndOdd([2, 4, 6, 1, 3, 5]));

// 7. Increment the Seconds
function incrementSeconds(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i] + 1);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(incrementSeconds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 8. Previous Length
function previousLength(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.length > 0) {
            result.push(arr[i].length);
        }
    }
    return result;
}
console.log(previousLength(["hello", "world", "foo"]));

// 9. Add Seven to Most
function sevenToMost(arr) {
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        result.push(arr[i] + 7);
    }
    return result;
}
console.log(sevenToMost([1, 2, 3, 4, 5]));

// 10. Reverse Array
function reverse(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
console.log(reverse([1, 2, 3, 4, 5]));

// 11. Outlook: Negative
function negative(arr) {
    let result = [];
    for (num of arr) {
        if (num > 0) {
            result.push(-num);
        } else {
            result.push(num);
        }
    }
    return result;
}
console.log(negative([1, -3, 5]));

// 12. Always Hungry
function hungry(arr) {
    for (item of arr) {
        if (item === "food") {
            return "yummy";
        }
    }
    if (item !== "food") {
        return "I'm hungry";
    }
}
console.log(hungry(["apple", "banana", "food", "orange"]));
console.log(hungry(["apple", "banana", "orange"]));
console.log(hungry(["food", "food", "pizza"]));

// 13. Swap Toward the Center
function swapElements(arr) {
    let result = [];

    if (arr.length >= 2) {
        result.push(arr[arr.length - 1]);
    }
    if (arr.length >= 4) {
        result.push(arr[2]);
        result.push(arr.length - 3);
    }
    for (let i = 1; i < arr.length - 1; i++) {
        if (i !== 2 && i !== arr.length - 3) {
            result.push(arr[i]);
        }
    }
    if (arr.length >= 2) {
        result.push(arr[0]);
    }
    return result;
}
console.log(swapElements([1, 2, 3, 4, 5])); // Output: [5, 3, 2, 4, 1]
console.log(swapElements([1, 2])); // Output: [2, 1]
console.log(swapElements([1, 2, 3])); // Output: [3, 2, 1]
console.log(swapElements([1, 2, 3, 4])); // Output: [4, 2, 3, 1]
console.log(swapElements([1])); // Output: [1] (not enough elements)

// 14. Scale the Array
function scaleArr(arr, number) {
    let result = [];
    for (num of arr) {
        result.push(num * number);
    }
    return result;
}
let givenArr = [1, 2, 3, 4, 5];
let givenNum = 5;
console.log(scaleArr(givenArr, givenNum));
