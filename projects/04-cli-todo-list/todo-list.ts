import inquirer from 'inquirer';

let todo_list = [];
let condition = true;

while(condition){
let tasks = await inquirer.prompt(
    [
        {
            name: "to_do",
            type: "input",
            message: "What do you want to add in the to do list?"
        },

        {
            name: "add_again",
            type: "confirm",
            message: "Do you want to add more in the list?",
            default: "false"
        }
    ]
);

todo_list.push(tasks.to_do);
condition = tasks.add_againagain;
console.log(todo_list);
}