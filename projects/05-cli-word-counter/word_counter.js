import inquirer from "inquirer";
const words_count = await inquirer.prompt({
    name: "sentence",
    message: "Enter the sentence to count the words: ",
    type: "input"
});
let result = words_count.sentence.trim().split(" ").length;
console.log(`There are "${result}" words in this sentence.`);
