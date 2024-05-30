import inquirer from "inquirer";
const calculator = await inquirer.prompt([
    {
        name: "number1",
        type: "number",
        message: "enter first number:",
    },
    {
        name: "operator",
        type: "char",
        message: "enter the operation to perform with the the numbers:"
    },
    {
        name: "number2",
        type: "number",
        message: "enter second number:",
    }
]);
var answer;
if (calculator.operator === "+") {
    answer = calculator.number1 + calculator.number2;
    console.log(answer);
}
else if (calculator.operator === "-") {
    answer = calculator.number1 - calculator.number2;
    console.log(answer);
}
else if (calculator.operator === "*") {
    answer = calculator.number1 * calculator.number2;
    console.log(answer);
}
else if (calculator.operator === "/") {
    answer = calculator.number1 / calculator.number2;
    console.log(answer);
}
