import inquirer from "inquirer";
import iquirer from "inquirer";
let total_amount = 10000;
let pin = 1234;
let enter_pin = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter the pin to access your account: "
    }
]);
if (enter_pin.pincode === pin) {
    let operation = await iquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select what do you want to do: ",
            choices: ["Check Balance", "Withdraw Amount"]
        }
    ]);
    if (operation.select == "Check Balance") {
        console.log(`Your account balance is ${total_amount}`);
    }
    else if (operation.select == "Withdraw Amount") {
        let amount_to_withdraw = await iquirer.prompt([
            {
                name: "withdraw_amount",
                type: "list",
                message: "Select the amount to withdraw",
                choices: ["Enter Amount", "1000", "2000", "5000", "10000"]
            }
        ]);
        if (amount_to_withdraw.withdraw_amount == "Enter Amount") {
            let enter_amount = await inquirer.prompt([
                {
                    name: "withdraw",
                    type: "number",
                    message: "Enter the amount to withdraw: "
                }
            ]);
            if (enter_amount.withdraw > total_amount) {
                console.log("You account balance is insufficient!");
            }
            else {
                total_amount -= enter_amount.withdraw;
                console.log(`Your new account balance is ${total_amount}`);
            }
        }
        else if (amount_to_withdraw.withdraw_amount === "1000") {
            total_amount -= 1000;
            console.log(`Your new account balance is ${total_amount}`);
        }
        else if (amount_to_withdraw.withdraw_amount === "2000") {
            total_amount -= 2000;
            console.log(`Your new account balance is ${total_amount}`);
        }
        else if (amount_to_withdraw.withdraw_amount === "5000") {
            total_amount -= 5000;
            console.log(`Your new account balance is ${total_amount}`);
        }
        else if (amount_to_withdraw.withdraw_amount === "10000") {
            total_amount -= 10000;
            console.log(`Your new account balance is ${total_amount}`);
        }
    }
}
else if (enter_pin.pincode != pin) {
    console.log("Your pin is incorrect!!!");
}
