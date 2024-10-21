// 1. Sigma
function sigma(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}
console.log(sigma(3));

// 2. Factorial
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

// 3. Start Art
function drawLeftStars(num) {
    let stars = "*".repeat(num);
    let spaces = " ".repeat(75 - num);
    let result = stars + spaces;
    console.log(result);
}
drawLeftStars(10);

function drawRightStars(num) {
    let spaces = " ".repeat(75 - num);
    let stars = "*".repeat(num);
    return spaces + stars;
}
console.log(drawRightStars(1));

function drawCenteredStars(num) {
    let totalSpaces = 75 - num;
    let leftSpaces = Math.floor(totalSpaces / 2);
    let rightSpaces = Math.ceil(totalSpaces / 2);

    let spacesLeft = " ".repeat(leftSpaces);
    let stars = "*".repeat(num);
    let spacesRight = " ".repeat(rightSpaces);

    let result = spacesLeft + stars + spacesRight;
    console.log(result);
}

drawCenteredStars(10);

// 3. Character Art
function drawLeftChars(num, char) {
    let totalSpaces = " ".repeat(75 - num);
    let characters = char.repeat(num);
    return characters + totalSpaces;
}
console.log(drawLeftChars(10, "A"));
// _______________________________________________;

function drawRightChars(num, char) {
    let totalSpaces = " ".repeat(75 - num);
    let characters = char.repeat(num);
    return totalSpaces + characters;
}
console.log(drawRightChars(10, "B"));

// _______________________________________________;

function drawCenteredChars(num, char) {
    let totalSpaces = 75 - num;
    let leftSpaces = Math.floor(totalSpaces / 2);
    let rightSpaces = Math.ceil(totalSpaces / 2);

    let spacesLeft = " ".repeat(leftSpaces);
    let spacesRight = " ".repeat(rightSpaces);
    let characters = char.repeat(num);

    let result = spacesLeft + characters + spacesRight;
    return result;
}
console.log(drawCenteredChars(10, "C"));

// 4. Threes and Fives
function threesAndFives() {
    let result = 0;
    for (let i = 100; i <= 4000000; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            result += i;
        } else if (i % 5 === 0 && i % 3 !== 0) {
            result += i;
        }
    }
    return result;
}

console.log(threesAndFives());

function betterThreesAndFives(start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            result += i;
        } else if (i % 5 === 0 && i % 3 !== 0) {
            result += i;
        }
    }
    return result;
}
console.log(betterThreesAndFives(100, 4000000));

// 5. Generate Coin Change
function generateCoinChain(cents) {
    let pennies = 0,
        nickles = 0,
        dimes = 0,
        quarters = 0;
    let remainingCents = cents;

    for (let i = 0; i < cents; i++) {
        if (remainingCents >= 25) {
            quarters++;
            remainingCents -= 25;
        } else if (remainingCents >= 10) {
            dimes++;
            remainingCents -= 10;
        } else if (remainingCents >= 5) {
            nickles++;
            remainingCents -= 5;
        } else {
            pennies++;
            remainingCents -= 1;
        }
        if (remainingCents === 0) {
            break;
        }
    }
    return `${cents} cents can be represented by:
           quarters: ${quarters},
           dimes: ${dimes},
           nickles: ${nickles},
           pennies: ${pennies}

        `;
}
console.log(generateCoinChain(94));

// 6. Messy Math Mashup   ??????????????????
function messyMathMashup(num) {
    let sum = 0;

    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            continue;
        }

        if (i % 7 === 0) {
            sum += i * 2;
        } else {
            sum += i;
        }
        if (i === Math.floor(num / 3)) {
            return -1;
        }
    }

    return sum;
}

console.log(messyMathMashup(4));
console.log(messyMathMashup(8));
console.log(messyMathMashup(15));

// 7. Twelve-Bar Blues
function twelveBarBlues(num) {
    for (let i = 1; i <= num; i++) {
        console.log(`${i}: "chick", "boom", "chick"`);
    }
}

twelveBarBlues(12);

// 8. Fibionacci     ????????????????
function fibonacci(num) {
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    let a = 0;
    let b = 1;
    let result;

    for (let i = 2; i <= num; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
}

console.log(fibonacci(6));

// 9. Sum to One Digit ?????????????
// function sumToOne(num) {
// }

// 10. Clock Hand Angles
// function clockHandAngles(num) {}
// 11. Is Prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));

// 12. Rockin' the Dojo Sweatshirt
function sweatshirtPricing(num) {
    let sweatshirtPrice = 20;
    let totalPrice = sweatshirtPrice * num;
    let discount = 0;

    if (num === 1) {
        discount = (9 / 100) * totalPrice;
    } else if (num === 2) {
        discount = (19 / 100) * totalPrice;
    } else if (num >= 3) {
        discount = (35 / 100) * totalPrice;
    }
    totalPrice = totalPrice - discount;
    return `$${totalPrice.toFixed(2)}`;
}
console.log(sweatshirtPricing(1));
console.log(sweatshirtPricing(2));
console.log(sweatshirtPricing(3));
console.log(sweatshirtPricing(4));

// 13. Clock Hand Angles, Revisited
//
