// 1. Only Keep the Last Few
function keepLastFew(arr, x) {
    let result = 0;
    result = arr.slice(-x);
    return result;
}
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(keepLastFew(newArr, 3));

// 2. Math Help
// function mathHelp(m, b) {

// }

// 3. Poor Kenny
function whatHappensToday(day) {
    if (day <= 10) {
        return "Volcano!";
    } else if (day <= 25) {
        return "Tsunami!";
    } else if (day <= 45) {
        return "Earthquake!";
    } else if (day <= 70) {
        return "Blizzard!";
    } else if (day <= 100) {
        return "Meteor!";
    } else {
        return "Invalid input! Please enter a number between 1 and 100.";
    }
}
console.log(whatHappensToday(5));
console.log(whatHappensToday(15));
console.log(whatHappensToday(30));
console.log(whatHappensToday(50));
console.log(whatHappensToday(80));
console.log(whatHappensToday(105));

// 4. What Really Happened?
// function whatReallyHappensToday() {
// }

// 5. Soaring IQ
function soaringIq(modestIq) {
    let totalIncrement = 0;
    let iqIncrement = 0.01;

    for (let i = 1; i <= 98; i++) {
        totalIncrement += iqIncrement;
        iqIncrement += 0.01;
    }

    return modestIq + totalIncrement;
}

let finalIq = soaringIq(101);
console.log(finalIq.toFixed(2));

// 6. Letter Grade
function gradeScore(score) {
    if (score >= 90) {
        return `Score: ${score}. Grade: A`;
    } else if (score >= 80 && score <= 89) {
        return `Score: ${score}. Grade: B`;
    } else if (score >= 70 && score <= 79) {
        return `Score: ${score}. Grade: C`;
    } else if (score >= 60 && score <= 69) {
        return `Score: ${score}. Grade: D`;
    } else if (score < 60) {
        return `Score: ${score}. Grade: F`;
    }
}
console.log(gradeScore(60));
console.log(gradeScore(69));
console.log(gradeScore(70));
console.log(gradeScore(80));
console.log(gradeScore(90));

// 7. More Accurate Grades
function gradeScore(score) {
    if (score >= 90) {
        return `Score: ${score}. Grade: A`;
    } else if (score >= 80) {
        if (score >= 88) {
            return `Score: ${score}. Grade: B+`;
        } else if (score <= 81) {
            return `Score: ${score}. Grade: B-`;
        }
        return `Score: ${score}. Grade: B`;
    } else if (score >= 70) {
        if (score >= 78) {
            return `Score: ${score}. Grade: C+`;
        } else if (score <= 71) {
            return `Score: ${score}. Grade: C-`;
        }
        return `Score: ${score}. Grade: C`;
    } else if (score >= 60) {
        if (score >= 68) {
            return `Score: ${score}. Grade: D+`;
        } else if (score <= 61) {
            return `Score: ${score}. Grade: D-`;
        }
        return `Score: ${score}. Grade: D`;
    } else {
        return `Score: ${score}. Grade: F`;
    }
}

console.log(gradeScore(88));
console.log(gradeScore(85));
console.log(gradeScore(80));
console.log(gradeScore(78));
console.log(gradeScore(70));
console.log(gradeScore(65));
console.log(gradeScore(61));
console.log(gradeScore(59));
