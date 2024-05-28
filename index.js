#! /usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Extracting values for simplicity
const { firstNumber, secondNumber, operator } = answer;
// Switch statement for different operations
switch (operator) {
    case "Addition":
        console.log(firstNumber + secondNumber);
        break;
    case "Subtraction":
        console.log(firstNumber - secondNumber);
        break;
    case "Multiplication":
        console.log(firstNumber * secondNumber);
        break;
    case "Division":
        console.log(firstNumber / secondNumber);
        break;
    default:
        console.log("Please select a valid operator");
}
