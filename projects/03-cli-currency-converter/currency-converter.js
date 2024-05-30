import inquirer from "inquirer";
let currencies = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    CNY: 7.24,
    JPY: 156.94,
    KRW: 1359.62,
    INR: 83.18,
    PKR: 278.25
};
let converter = await inquirer.prompt([
    {
        name: "from_currency",
        message: "Enter the currency to convert:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "CNY", "JPY", "KRW"]
    },
    {
        name: "to_currency",
        message: "Enter the requierd currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "CNY", "JPY", "KRW"]
    },
    {
        name: "amount_to_convert",
        message: "Enter the amount to convert:",
        type: "number"
    }
]);
let currency_from = currencies[converter.from_currency];
let currency_to = currencies[converter.to_currency];
let amount = converter.amount_to_convert;
let amount_in_base_currency = amount / currency_from; // base currency is USD
let converted_amount = amount_in_base_currency * currency_to;
console.log(`The amount ${converter.amount_to_convert} after conversion is ${converted_amount}.`);
