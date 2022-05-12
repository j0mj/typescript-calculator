import { question } from "readline-sync";
//creat a new type for calculate() function
type Operator = '+' | '-' | '*' | '/';

//question always returns a string
function main(): void 
{
    const firstStr: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondStr: string = question('Enter second number:\n');
    //PART 1:because question only takes strings and returns strings, we need to convert the variables into numbers before operations and make sure operator is an actual operator

    //one boolean function to check if everything is valid, then hands off the actual calculator part of the script
    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if (validInput){
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);
        
        console.log(result);
    } else {
        console.log('Invalid input bruv\n');
        main();
    }
}

function calculate(firstNum: number, operator: Operator, secondNum: number)
{
    switch(operator)
    {
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
function isOperator(operator: string): boolean 
{
    switch(operator)
    {
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
function isNumber(str:string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
};

main();