import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const user_input = await inquirer.prompt([
    {
        name: "input",
        type: "number",
        message: "Enter a number for timer: ",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a number as input!!";
            }
            else if (input > 60) {
                return "Please enter the number under 60!!";
            }
            else
                return true;
        }
    }
]);
let input = user_input.input;
const start_time = (val) => {
    let int_time = new Date().setSeconds(new Date().getSeconds() + val);
    let formatted_time = new Date(int_time);
    setInterval(() => {
        let current_time = new Date();
        let diff_in_time = differenceInSeconds(formatted_time, current_time);
        if (diff_in_time <= 0) {
            console.log("Timer has expired!!");
            process.exit();
        }
        let min = Math.floor((diff_in_time % 3600 * 24) / 3600);
        let sec = Math.floor(diff_in_time % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
};
start_time(input);
