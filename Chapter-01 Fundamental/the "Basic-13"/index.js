// 1. Print 1-255
function print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}
print1To255();

// 2. Print Odds 1-255
function printOdd1To255() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOdd1To255();

// 3. Print Ints and Sum 0-255
function printIntsAndSum0To255() {
    let sum = 0;
    for (let i = 0; i < 255; i++) {
        sum += i;
        console.log(`Integer: ${i}, Cumulative Sum: ${sum}`);
    }
}
printIntsAndSum0To255();

// 4. Print Array Value
function printArrayVal(arr) {
    for (num of arr) {
        console.log(num);
    }
}
printArrayVal([1, 2, 3, 4, 5]);

// 5. Print Max of Array
function printMaxOfArray(arr) {
    if (arr.length === 0) {
        console.log([]);
    }
    let largestNum = arr[0];
    for (num of arr) {
        if (num > largestNum) {
            largestNum = num;
        }
    }
    console.log(largestNum);
}
printMaxOfArray([9, 2, 3, 4, 5]);

// 6. Print Average of Array
function printAverageOfArray(arr) {
    if (arr.length === 0) {
        console.log("Array is empty, cannot calculate average.");
    }
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    let average = sum / arr.length;
    return `The average is: ${average}`;
}
console.log(printAverageOfArray([10, 20, 30, 40, 50]));

// 7. Return Odds Array 1-255
function returnOddsArray1To255() {
    let result = [];
    for (let i = 1; i <= 255; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(returnOddsArray1To255());

// 8. Square Array Value
function squareArrayVals(arr) {
    let squaredArr = [];
    for (num of arr) {
        squaredArr.push(num * num);
    }
    return squaredArr;
}
console.log(squareArrayVals([1, 2, 3, 4, 5]));

// 9. Return Array Count Greater than Y
function returnArrayCountGreaterThanY(arr, y) {
    let greaterValues = 0;
    for (let num of arr) {
        if (num > y) {
            greaterValues++;
        }
    }
    return greaterValues;
}

console.log(returnArrayCountGreaterThanY([10, 15, 16, 20, 50, 45], 17));

// 10. Zero Out Array Negative Numbers
function zeroOutArrayNegativeNumbers(arr) {
    let result = [];
    for (num of arr) {
        if (num <= 0) {
            result.push(0);
        } else {
            result.push(num);
        }
    }
    return result;
}
console.log(zeroOutArrayNegativeNumbers([1, 2, 2, 4, 5, 1]));

// 11. Print Max, Min, Average Array Values
function returnArrayCountGreaterThanY(arr) {
    if (arr.length === 0) return [];

    let firstMaxNum = arr[0];
    let firstMinNum = arr[0];
    let sum = 0;

    for (let num of arr) {
        if (num > firstMaxNum) {
            firstMaxNum = num;
        }
        if (num < firstMinNum) {
            firstMinNum = num;
        }
        sum += num;
    }

    let average = sum / arr.length;
    return [firstMinNum, average, firstMaxNum];
}
console.log(returnArrayCountGreaterThanY([10, 20, 30, 40, 50]));

// 12. Shift Array Values Left
function shiftArrayValuesLeft(arr) {
    let first = arr.shift();
    arr.push(first);
    return arr;
}
console.log(shiftArrayValuesLeft([1, 2, 3, 4, 5]));

// 13. Swap String for Array Negative Value
function swapStringForArrayNegativeValue(arr) {
    let result = [];
    for (num of arr) {
        if (num < 0) {
            result.push("dojo");
        } else {
            result.push(num);
        }
    }
    return result;
}
console.log(swapStringForArrayNegativeValue([-1, 2, -6, 3, -8]));
