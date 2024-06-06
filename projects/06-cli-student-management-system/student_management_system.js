import inquirer from "inquirer";
class Student {
    static counter = 10000;
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 1000;
    }
    enroll_courses(course) {
        this.courses.push(course);
    }
    view_balance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    pay_student_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount} fees has been paid for ${this.name}`);
        console.log(`Remaining student balance: $${this.balance}`);
    }
    view_student_status() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Courses: ${this.courses.length > 0 ? this.courses.join(", ") : "No courses enrolled"}`);
        console.log(`Balance: $${this.balance}`);
    }
}
class manage_students {
    students;
    constructor() {
        this.students = [];
    }
    // Add a student to the list of students
    add_student(name) {
        let new_student = new Student(name);
        this.students.push(new_student);
        console.log(`Student ${name} has been added successfully, student ID: ${new_student.id}`);
    }
    // Enroll a student in a course
    enroll_student(student_ID, course) {
        let student = this.find_a_student(student_ID);
        if (student) {
            student.enroll_courses(course);
            console.log(`${student.name} has been enrolled in ${course}`);
        }
        else {
            console.log("Student not found!!");
        }
    }
    // View student balance
    view_balance(student_ID) {
        let student = this.find_a_student(student_ID);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found!!");
        }
    }
    // Pay student's fees
    pay_fees(student_ID, amount) {
        let student = this.find_a_student(student_ID);
        if (student) {
            student.pay_student_fees(amount);
        }
        else {
            console.log("Student not found!!");
        }
    }
    // Show student's status
    show_status(student_ID) {
        let student = this.find_a_student(student_ID);
        if (student) {
            student.view_student_status();
        }
        else {
            console.log("Student not found!!");
        }
    }
    // Display all students
    display_all_students() {
        if (this.students.length === 0) {
            console.log("No students available.");
        }
        else {
            this.students.forEach(student => {
                student.view_student_status();
                console.log("_".repeat(50));
            });
        }
    }
    // Method to find a student by ID
    find_a_student(student_ID) {
        return this.students.find(student => student.id == student_ID);
    }
}
async function main() {
    console.log("Welcome to Student Management System: (Created by Waleed Ahmad)");
    console.log("_".repeat(50));
    let student_manager = new manage_students();
    // Show options to perform an action in system
    while (true) {
        let input = await inquirer.prompt([
            {
                name: "selection",
                message: "Please select an option below: ",
                type: "list",
                choices: [
                    "Add a student",
                    "Enroll student",
                    "View student balance",
                    "Pay student's fee",
                    "Show student status",
                    "All students",
                    "Exit"
                ]
            }
        ]);
        // Using conditions to add functionalities in choices
        switch (input.selection) {
            case "Add a student":
                let student = await inquirer.prompt([
                    {
                        name: "name",
                        message: "Enter a student name",
                        type: "input"
                    }
                ]);
                student_manager.add_student(student.name);
                break;
            case "Enroll student":
                let enroll = await inquirer.prompt([
                    {
                        name: "student_ID",
                        message: "Enter student ID to enroll course: ",
                        type: "input"
                    },
                    {
                        name: "student_course",
                        message: "Enter a course to enroll the student: ",
                        type: "input"
                    }
                ]);
                student_manager.enroll_student(enroll.student_ID, enroll.student_course);
                break;
            case "View student balance":
                let balance = await inquirer.prompt([
                    {
                        name: "student_ID",
                        message: "Enter student ID to check balance: ",
                        type: "input"
                    }
                ]);
                student_manager.view_balance(balance.student_ID);
                break;
            case "Pay student's fee":
                let pay_fees = await inquirer.prompt([
                    {
                        name: "student_ID",
                        message: "Enter student ID to pay fees: ",
                        type: "input"
                    },
                    {
                        name: "amount",
                        message: "Enter fees amount: ",
                        type: "input"
                    }
                ]);
                student_manager.pay_fees(pay_fees.student_ID, pay_fees.amount);
                break;
            case "Show student status":
                let student_status = await inquirer.prompt([
                    {
                        name: "student_ID",
                        message: "Enter student ID to check his/her status: ",
                        type: "input"
                    }
                ]);
                student_manager.show_status(student_status.student_ID);
                break;
            case "All students":
                student_manager.display_all_students();
                break;
            case "Exit":
                console.log("Exiting...");
                console.log("-".repeat(50));
                process.exit();
        }
    }
}
main();
