import chalk from "chalk";
console.log(chalk.red("Testing chalk for the colors"));
console.log(chalk.underline.red.bgBlue.bold("Testing chalk for the colors"));
console.log(chalk.yellow.bold("Hello"), chalk.green.bold("World"), chalk.bgGreenBright("!"));
/*
let user_input = await inquirer.prompt([
    {
        name: "color",
        message: "Enter color name: ",
        type: "input"
    }
]);


let color = user_input.color
console.log(chalk.color(user_input.color))
*/
// setTimeout(function, time)
// setTimeout(() => {
//     console.log("Hello World after 5sec...")
// }, 5000);
// setInterval(function, time)
// const intervalEnd = setInterval(() => {
//     console.log("Hello World in setInterval");
//     clearInterval(intervalEnd)
// }
//     , 2000
// )
// let i = 0;
// const intervalEnd = setInterval(() => {
//     console.log("Hello World in setInterval");
//     i++;
//     if(i == 3){
//     clearInterval(intervalEnd)
//     }
// }
//     , 2000
// )
// console.log("Hello World after setTimeout...")
// Morning routine by setInterval method
const end_interval = setInterval(() => {
    console.log("Woke up and offer Fajr prayer");
    // clearInterval(end_interval)
}, 2000);
// const end_interval_02 = setInterval(
//     () => {
//         console.log("Recites Quran Majeed after Fajr prayer")
//         clearInterval(end_interval_02)
//     },4000
// )
// const end_interval_03 = setInterval(
//     () => {
//         console.log("Brush teeth and done breakfast..")
//         clearInterval(end_interval_03)
//     },15000
// )
// const end_interval_04 = setInterval(
//     () => {
//         console.log("Got ready for the school and head for school!!! ")
//         clearInterval(end_interval_04)
//     },20000
// )
