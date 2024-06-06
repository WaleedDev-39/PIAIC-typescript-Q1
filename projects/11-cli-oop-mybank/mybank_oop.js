import inquirer from "inquirer";
// Bank Account Class:
class Bank_Account {
    account_number;
    balance;
    constructor(account_number, balance) {
        this.account_number = account_number;
        this.balance = balance;
    }
    // Debit amount:
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`You have successfully withdrawed $${amount}, your remaining balance: $${this.balance}`);
        }
        else {
            console.log("Insufficient balance!!!");
        }
    }
    // Credit amount:
    deposit(amount) {
        if (amount > 100) {
            amount -= 1;
            console.log("$1 fee has been deducted due to the amount being larger than $100!!");
        }
        this.balance += amount;
        console.log(`You have successfully deposited $${amount}, Your new balance: $${this.balance}`);
    }
    check_balance() {
        console.log(`Your balance: $${this.balance}`);
    }
}
// Customer Class:
class Customer {
    first_name;
    last_name;
    gender;
    age;
    cell_number;
    account_number;
    // Customer's Constructor:
    constructor(first_name, last_name, gender, age, cell_number, account_number) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.age = age;
        this.cell_number = cell_number;
        this.account_number = account_number;
    }
}
const bank_account = [
    new Bank_Account(1122, 1000),
    new Bank_Account(1133, 1200),
    new Bank_Account(1144, 2200)
];
const customers = [
    new Customer("Ali", "Hussnain", "Male", 20, 3124557871, bank_account[0]),
    new Customer("Bilal", "Israr", "Male", 20, 3244557871, bank_account[1]),
    new Customer("Waleed", "Ahmad", "Male", 19, 3084557871, bank_account[2])
];
let bank_app = async () => {
    while (true) {
        let user_account = await inquirer.prompt([
            {
                name: "input",
                message: "Please enter your bank account: ",
                type: "number"
            }
        ]);
        let find_customer = customers.find(customer => customer.account_number.account_number === user_account.input);
        if (find_customer) {
            let ask_user = await inquirer.prompt([
                {
                    name: "operation",
                    message: "Select an operation to perform: ",
                    type: "list",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"]
                }
            ]);
            switch (ask_user.operation) {
                case "Deposit":
                    let amount_to_deposit = await inquirer.prompt({
                        name: "user",
                        message: "Enter amount to deposit: ",
                        type: "number"
                    });
                    find_customer.account_number.deposit(amount_to_deposit.user);
                    break;
                case "Withdraw":
                    let amount_to_withdraw = await inquirer.prompt({
                        name: "user",
                        message: "Enter amount to withdraw: ",
                        type: "number"
                    });
                    find_customer.account_number.withdraw(amount_to_withdraw.user);
                    break;
                case "Check Balance":
                    find_customer.account_number.check_balance();
                    break;
                case "Exit":
                    console.log("Exiting...\n");
                    console.log("\tThank you for using our bank services!!");
                    process.exit();
            }
        }
        else {
            console.log("Sorry you don't have an account in this bank, please open a new account to proceed it!!");
        }
    }
};
bank_app();
