// 1. Setting and Swapping
let myNumber = 42;
let myName = "Jamshid";
myNumber = myName;
// console.log(myNumber);

// 2. Print and Count
let multiplesof5 = [];
for (let i = 512; i <= 4096; i++) {
    if (i % 5 === 0) {
        multiplesof5.push(i);
    }
}
// console.log("Multiples of 5:", multiplesof5);
// console.log("Count of multiples of 5:", multiplesof5.length);

// 3. Print -52 to 1066
for (let i = -52; i < 1066; i++) {
    // console.log(i);
}

// 4. Multiples of Six
let i = 6;

while (i <= 60000) {
    // console.log(i);
    i += 6;
}

// 5. Don't worry, Be Happy

function beCheerful() {
    // console.log("Good morning!");
}

for (let i = 0; i < 98; i++) {
    beCheerful();
}

// 6. Counting, the Dojo Way

for (let i = 0; i < 100; i++) {
    if (i % 5 === 0) {
        // console.log("Coding", i);
    }
    if (i % 10 === 0) {
        // console.log("Dojo", i);
    }
}

// 7. Multiples of Three - but Not All

for (let i = -300; i <= 0; i += 3) {
    if (i === -3 || i === -6) {
        continue;
    }
    // console.log(i);
}

// 8. What Do You Know?

function payment(incoming) {
    // console.log(incoming);
}
payment("10K$");

// 9. Printing Intigers With While
let startNum = 2000;

while (startNum <= 60000) {
    // console.log(startNum);
    startNum++;
}

// 10. Whoa, That Sucker's Huge...

let sumOFOddIntigers = 0;
let oddIntigers = -300000;

while (oddIntigers <= 300000) {
    if (oddIntigers % 2 !== 0) {
        sumOFOddIntigers += oddIntigers;
    }
    oddIntigers++; // Incrementing oddIntigers
}

// console.log(sumOFOddIntigers); // Output the sum of odd integers

// 11. You Say It's Your Birthday

function checkBirthday(num1, num2) {
    const validMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const isValidMonth1 = validMonths.includes(num1) && num2 >= 1 && num2 <= 31;
    const isValidMonth2 = validMonths.includes(num2) && num1 >= 1 && num1 <= 21;

    if (isValidMonth1 || isValidMonth2) {
        console.log("How did you know?");
    } else {
        console.log("Just another day . . . .");
    }
}
// checkBirthday(5, 23); // Replace with your numbers
// checkBirthday(12, 5); // Replace with your numbers
// checkBirthday(13, 50); // Example of invalid input

// 12. Countdown by Fours

function logNumbers(num) {
    if (num > 0) {
        console.log(num);
        logNumbers(num - 4);
    }
}

// logNumbers(2016);

// 13. Leap Year
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return "This is leap year";
    }
    return "Not a leap year";
}
// console.log(leapYear(2020));

// 14. Flexible Countdown

function countdownByFours(lowNum, highNum, mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}

// countdownByFours(2, 9, 3);

// 15. The Final Countdown
function flexibleCountdown(param1, param2, param3, param4) {
    while (param2 <= param3) {
        if (param2 % param1 === 0 && param2 % param4 !== 0) {
            console.log(param2);
        }
        param2++;
    }
}
flexibleCountdown(3, 5, 17, 9); // Should print: 6, 12, 15
