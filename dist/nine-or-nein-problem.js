"use strict";
function checkMathOperationsForNine(a, b) {
    if (a + b === 9 || a - b === 9 || a * b === 9 || a / b === 9) {
        return "Nine";
    }
    return "Nein";
}
console.log(checkMathOperationsForNine(4, 5));
console.log(checkMathOperationsForNine(10, 1));
