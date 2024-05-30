import inquirer from "inquirer"

const random_number = Math.floor(Math.random() * 10);

const guess_game = await inquirer.prompt([
    {
        name: "user_guessed_number",
        type: "number",
        message: "Please enter a number to guess: ",
    },
]);

// console.log(guess_game)
if (random_number === guess_game.user_guessed_number) {
    console.log("Congratulations! you guessed the right number.")
} else {
    console.log("You guessed the wrong number.")
}
console.log(random_number)