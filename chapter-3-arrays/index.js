// ARRAYS

// 1. Push Front
function pushFront(arr, element) {
    return [element, ...arr];
}
console.log(pushFront([2, 3], 1));

// 2. Pop Front
function popFront(arr) {
    if (arr.length === 0) {
        return [];
    } else {
        return arr.slice(1);
    }
}
console.log(popFront([1, 2, 3]));

// 3. Insert At
function insertAt(arr, index, element) {
    if (index < 0 || index > arr.length) {
        return arr;
    } else {
        return [...arr.slice(0, index), element, ...arr.slice(index)];
    }
}
console.log(insertAt([1, 2, 3, 4], 2, 5));

// 4. Remove At
function removeAt(arr, index) {
    if (index < 0 || index >= arr.length) {
        return arr;
    } else {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }
}
console.log(removeAt([1, 2, 3, 4], 1));

// 5. Swap Pairs
function swapPairs(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        console.log(i);
        if (i + 1 < arr.length) {
            result.push(arr[i + 1], arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(swapPairs([1, 2, 3, 4, 5]));

// 6. Remove Duplicates
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates([1, 1, 2, 3, 2, 2, 4, 6, 1, 4, 5]));

// 7. Min to Front
function minToFront(arr) {
    if (arr.length === 0) return arr;

    let minIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }

    const minValue = arr[minIndex];

    arr.splice(minIndex, 1);

    arr.unshift(minValue);

    return arr;
}

console.log(minToFront([4, 2, 1, 3, 5]));

// 8. Revers
function reversArr(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(reversArr([1, 2, 3, 4, 5]));

// 9. Rotate
function rotateArr(arr, shiftBy) {
    var n = arr.length;

    shiftBy = shiftBy % n;
    if (shiftBy < 0) {
        shiftBy += n;
    }

    function reverse(start, end) {
        while (start < end) {
            var temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    reverse(0, n - 1);

    reverse(0, shiftBy - 1);

    reverse(shiftBy, n - 1);
}

var arr = [1, 2, 3, 4, 5];
var shiftBy = 2;
rotateArr(arr, shiftBy);
console.log(arr);

// 10. Filter Range
function filterRange(arr, min, max) {
    var filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var arr = [1, 2, 3, 4, 5];
var min = 2;
var max = 4;

console.log(filterRange(arr, min, max));

// 11. Concat
function concat(arr1, arr2) {
    let result = new Array(...arr1, ...arr2);
    return result;
}
const arr1 = ["a", "b"];
const arr2 = [1, 2];
console.log(concat(arr1, arr2));

// 12. Skyline Heights
// 13. Remove Negatives
function removeNegatives(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }
    }

    return result;
}

const myArray = [1, -2, 3, -4, 5];
console.log(removeNegatives(myArray));

// 14. Second-to-Last
function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    }
    return arr[arr.length - 2];
}
let result = [42, true, "Kate", 7];
console.log(secondToLast(result));

// 15. Second to Large ??????????
// function secondToLarge(arr) {
//     if (arr.length < 2) {
//         return null;
//     }

// }

// 16. Nth-to-Last
function nthToLast(arr, num) {
    if (num <= 2 || num > arr.length) {
        return null;
    }
    return arr[arr.length - num];
}
let array1 = [5, 2, 3, 6, 4, 9, 7];
let num1 = 3;
console.log(nthToLast(array1, num1));

// 17. Nth-to-Largest ?????????
function nthLargest(arr, n) {
    if (n <= 0 || n > arr.length) {
        return null;
    }

    const sortedArr = arr.slice().sort((a, b) => b - a);
    return sortedArr[n - 1];
}

let array = [5, 2, 3, 6, 4, 9, 7];
let n = 3;
console.log(nthLargest(array, n));

// 18. Credit Card Validation
// function isCreditCardValid(digitArr) {
// }

// 19. Shuffle
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const originalArray = [1, 2, 3, 4, 5];
shuffle(originalArray);
console.log(originalArray);

// 20. Remove Range ??????
function removeRange(arr, start, end) {
    if (start < 0 || end >= arr.length || start > end) {
        return arr;
    }

    const newArray = arr.slice(0, start);

    for (let i = 0; i < newArray.length; i++) {
        arr[i] = newArray[i];
    }

    arr.length = newArray.length;

    return arr;
}

const arrray = [1, 5, 10, 15, 20, 25];
removeRange(arrray, 10, 20);
console.log(arrray);

// 21. Intermediate Sums
// function intermediateSums(arr) {}

// 22. Double Trouble
function doubleTrouble(arr) {
    const result = [];
    for (let element of arr) {
        result.push(element, element);
    }
    return result;
}
console.log(doubleTrouble([4, "Ulysses", 42, false]));

// 23. Zip It
const zipIt = function (arr1, arr2) {
    let result = [];
    let minLength = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < minLength; i++) {
        result.push(arr1[i]);
        result.push(arr2[i]);
    }
    if (arr1.length > minLength) {
        result.push(...arr1.slice(minLength));
    }
    if (arr2.length > minLength) {
        result.push(...arr2.slice(minLength));
    }
    return result;
};
console.log(zipIt([1, 2], [10, 20, 30, 40]));
