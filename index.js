"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
//question always returns a string
function main() {
    var firstStr = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondStr = (0, readline_sync_1.question)('Enter second number:\n');
    //PART 1:because question only takes strings and returns strings, we need to convert the variables into numbers before operations and make sure operator is an actual operator
    //one boolean function to check if everything is valid, then hands off the actual calculator part of the script
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log('Invalid input bruv\n');
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
//PART 3: Check if the operator is an operator
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
//PART 2: Using a check method to parseInt the string into a number, then check if it os NaN (not a number)
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
;
main();
