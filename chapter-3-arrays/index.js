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

// 15. Second to Large
function secondToLarge(arr) {}
