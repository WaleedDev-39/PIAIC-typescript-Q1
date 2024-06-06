import inquirer from "inquirer";
class Student {
    name;
    constructor(Name) {
        this.name = Name;
    }
}
class Person {
    students = [];
    add_student = (stu_name) => {
        this.students.push(stu_name);
    };
}
const persons = new Person();
const start_program = async (persons) => {
    console.log("Welcome!!!");
    while (true) {
        const user = await inquirer.prompt([
            {
                name: "input",
                type: "list",
                choices: ["Staff", "Student", "Exit"],
                message: "Whom do you want to interact with?"
            }
        ]);
        switch (user.input) {
            case "Staff":
                console.log("You have interacted with the staff successfully!!, feel free to ask any questions..");
                break;
            case "Student":
                const stu = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: "Enter the name of student you want to interact with: "
                    }
                ]);
                let find_student = persons.students.find(val => val.name == stu.name);
                if (!find_student) {
                    const student = new Student(stu.name);
                    persons.add_student(student);
                    console.log(`Hi I'm ${student.name}, it's nice to meet you Sir!!`);
                    console.log(`Students list: ${persons.students.map(student => student.name)}`);
                }
                else {
                    console.log("Student already exists!!!");
                    console.log(`Hi I'am ${find_student.name}, it's nice to see you again Sir!!`);
                    console.log(`Students list: ${persons.students.map(student => student.name)}`);
                }
                break;
            case "Exit":
                console.log("Exiting...");
                process.exit();
        }
    }
};
start_program(persons);
