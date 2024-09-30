// 1. CountdownArray
function CountdownArray(num) {
    let result = [];

    for (let i = num; i >= 0; i--) {
        result.push(i);
    }
    return result;
}
const array = CountdownArray(5);
console.log(array);
console.log(array.length);

// 2. Print and Return
function printAndReturn(arr) {
    if (arr.length !== 2) {
        console.log("Array must contain exactly two elements.");
    }
    console.log(arr[0]);
    return arr[1];
}
console.log(printAndReturn([1, 2]));

// 3. First Plus Length
function firthPlusLength(arr) {
    let result = 0;
    result = arr[0] + arr.length;
    return result;
}

console.log(firthPlusLength([true, 2, 4]));

// 4. Value Greater than Second Generalized
function greaterThanSecondValue(arr) {
    let result = [];
    if (arr.length < 2) {
        return result;
    }
    const secondValue = arr[1];
    for (char of arr) {
        if (char > secondValue) {
            result.push(char);
        }
    }
    return result;
}
console.log(greaterThanSecondValue([1, 3, 5, 7, 9, 13]));

// 5. This Length, That Value
function thisLengthThatValue(num1, num2) {
    let num1Length = num1.length;
    for (char of num2) {
        if (num1Length === char) {
            return "Jinx";
        }
    }
    return "not the same";
}

let arrNum1 = [1, 3, 45, 64];
let arrNum2 = [2, 4, 1, 5, 6, 6];
console.log(thisLengthThatValue(arrNum1, arrNum2));

// 6. Fit the First Value
function fitFirstValue(arr) {
    let arrFirstValue = arr[0];

    if (arrFirstValue > arr.length) {
        return "Too big";
    } else if (arrFirstValue < arr.length) {
        return "Too small";
    }
    return "Just right";
}
console.log(fitFirstValue([3, 1, 4]));

//  7. Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees) {
    let celsius = 0;
    celsius = (9 / 5) * fDegrees + 32;
    return `${celsius}°C`;
}
console.log(fahrenheitToCelsius(33));

// 8. Celsius to Fahrenheit
function celsiusTofahrenheit(cDegrees) {
    let fahrenheit = 0;
    fahrenheit = (9 / 5) * fahrenheit + 32;
    return `${fahrenheit}°F`;
}
console.log(celsiusTofahrenheit(91.4));
