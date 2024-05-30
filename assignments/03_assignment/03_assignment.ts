let myAge = (currentYear: number, birthYear: number) => {

    let myAge: number = currentYear - birthYear;

    console.log(`My age = ${myAge} years`);
}

myAge(2024, 2004);

let rectArea = (rectLength: number, rectWidth: number) => {

    let rectArea: number = rectLength * rectWidth;
    console.log(`Area of rectangle = ${rectArea}cm`);
}

rectArea(30, 15);

let circleArea = (circleRadius: number) => {

    let pi: number = Math.PI;
    let circleArea: number = pi * (circleRadius * circleRadius);
    console.log(`Area of Circle = ${circleArea}cm`);
}

circleArea(10);

let cubeArea = (cubeLength: number) => {

    let cubeArea: number = 6 * cubeLength; //since there are six sides of a cube so we'll multiply the length with 6.
    console.log(`Area of Cube = ${cubeArea}cm`);
}

cubeArea(40);

let tempConvertor = (temp_In_Fahrenheit: number, temp_In_Celsius: number) => {

    let fahrenheit_To_Celsius = (temp_In_Fahrenheit - 32) * 5 / 9;
    let celsius_To_Fahrenheit = (9 / 5 * temp_In_Celsius) + 32;

    console.log(`Temprature in Celsius =   ${fahrenheit_To_Celsius}C`);
    console.log(`Temprature in Fahrenheit =   ${celsius_To_Fahrenheit}F`);
}

tempConvertor(170, 38);

let sec_to_min = (number_In_Seconds: number,) => {

    let remaining_Seconds: number = number_In_Seconds % 60;
    let secs_To_Mins = Math.floor(number_In_Seconds / 60);

    console.log(`Number in Minutes & Seconds = ${secs_To_Mins}min : ${remaining_Seconds}sec`)
}

sec_to_min(350);

let percentage = (obtained_Marks: number, total_Marks: number) => {

    let percentage_Of_Number: number = obtained_Marks * 100 / total_Marks;
    console.log(`Percentage of the number = ${percentage_Of_Number}%`)
}

percentage(839, 1100);

//Second Assignment:
// - Q.1
// Using conditional statements, check if the number is:
//  - Even or Odd.
//  - Positive, Negative, or Zero.
//  - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.

// (a):- Even or Odd.

let even_odd = (num_01: number) => {

    if (num_01 % 2 == 0) {
        console.log(`${num_01} is even.`)
    } else if (num_01 % 3 == 0) {
        console.log(`${num_01} is odd.`)
    } else {
        console.log(`${num_01} is neither even nor odd.`)
    }
}

even_odd(39);

// (b):- Positive, Negative, or Zero.

let pos_neg_zero = (num_02: number) => {

    if (num_02 > 0) {
        console.log(`${num_02} is positive.`)
    } else if (num_02 < 0) {
        console.log(`${num_02} is negative.`)
    } else if (num_02 == 0) {
        console.log(`${num_02} is zero.`)
    }
}

pos_neg_zero(9);

// (c):- Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both.

let divisible_by_2_3 = (num_03: number) => {

    if (num_03 % 2 == 0 && num_03 % 3 == 0) {
        console.log(`${num_03} is divisible by both 2 & 3.`)
    } else if (num_03 % 2 == 0) {
        console.log(`${num_03} is divisible by only 2.`)
    } else if (num_03 % 3 == 0) {
        console.log(`${num_03} is divisible by only 3.`)
    } else {
        console.log(`${num_03} is not divisible by neither 2 nor 3.`)
    }
}

divisible_by_2_3(93);

// - Q.2
//- Take the user age.
// -- If the age is 18 or above:
// -- Ask if they have a nationality of "Pakistani".
//   ---If yes, print "You are eligible to vote."
//   ---If no, print "Please obtain a valid ID to vote."

let check_eligibility = (user_age: number, nationality: string) => {

    if (user_age >= 18) {
        if (nationality == "Pakistani") {
            console.log("You are eligible to vote.")
        } else {
            console.log("Please obtain a valid ID to vote.")
        }
    } else if (user_age < 18) {
        console.log("Your age is less than 18.")
    }
}

check_eligibility(19, "Pakistani");

// - Q.3
// - Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)

let age_check = (person_age: number) => {

    if (person_age >= 0 && person_age <= 12) {
        console.log("You are a  child.")
    } else if (person_age >= 13 && person_age <= 19) {
        console.log("You are a teenager.")
    } else if (person_age >= 20 && person_age <= 59) {
        console.log("You are an adult.")
    } else if (person_age >= 60) {
        console.log("You are a senior citizen.")
    }
}

age_check(19);

// - Q.4
// - Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.

let days_in_month = (month: number) => {

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        console.log("This month has 31 days.")
    } else if (month == 2) {
        console.log("This month has 28 days.")
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        console.log("This month has 30 days.")
    } else {
        console.log("You entered a wrong month.")
    }
}

days_in_month(3);

// - Q.5
// - Check if a year is a leap year or not.

let check_leap_year = (year: number) => {

    if (year % 4 == 0 || year % 400 == 0) {
        console.log(`${year} is a leap year.`)
    } else {
        console.log(`${year} is not a leap year.`)
    }
}

check_leap_year(2032);



let submitted_by = (my_name: string) => {
    console.log(`Submitted by: ${my_name}`)
}
submitted_by("Waleed Ahmad");