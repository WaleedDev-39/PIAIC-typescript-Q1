import inquirer from "inquirer"

const quiz_store = await inquirer.prompt([
    {
        name: "question_1",
        message: "Which city is the Capital of Pakistan?",
        type: "list",
        choices: [
            "Faisalabad", "Lahore", "Islamabad", "Karachi"
        ]
    },
    {
        name: "question_2",
        message: "What is the national language of Pakistan?",
        type: "list",
        choices: [
            "Punjabi", "Sindhi", "English", "Urdu"
        ]
    },
    {
        name: "question_3",
        message: "What is the currency used in Pakistan?",
        type: "list",
        choices: [
            "Euro", "Rupees", "Dollar", "Yuan"
        ]
    },
    {
        name: "question_4",
        message: "What is national animal of Pakistan?",
        type: "list",
        choices: [
            "Deer", "Lion", "Elephant", "Markhor"
        ]
    },
    {
        name: "question_5",
        message: "What is the name of the highest peak in Pakistan?",
        type: "list",
        choices: [
            "K2", "Nanga Parbat", " Tirich Mir", "Broad Peak"
        ]
    }
]);

let score: number = 0;

switch (quiz_store.question_1) {
    case "Islamabad":
        console.log("1. Correct")
        ++score;
        break;
    default:
        console.log("1. Incorrect")
};

switch (quiz_store.question_2) {
    case "Urdu":
        console.log("2. Correct")
        ++score;
        break;
    default:
        console.log("2. Incorrect")
};

switch (quiz_store.question_3) {
    case "Rupees":
        console.log("3. Correct")
        ++score;
        break;
    default:
        console.log("3. Incorrect")
};

switch (quiz_store.question_4) {
    case "Markhor":
        console.log("4. Correct")
        ++score;
        break;
    default:
        console.log("4. Incorrect")
};

switch (quiz_store.question_5) {
    case "K2":
        console.log("5. Correct")
        ++score;
        break;
    default:
        console.log("5. Incorrect")
};

console.log(`Score: ${score}`);