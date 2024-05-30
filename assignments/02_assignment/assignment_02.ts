
// - Q.1
// Using conditional statements, check if the number is:
//  - Even or Odd.
//  - Positive, Negative, or Zero.
//  - Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both check all the cases and print statement for each case.

// (a):- Even or Odd.

let num_01: number = 3;

if (num_01 % 2 == 0) {
    console.log(`${num_01} is even.`)
} else if (num_01 % 3 == 0) {
    console.log(`${num_01} is odd.`)
} else {
    console.log(`${num_01} is neither even nor odd.`)
}

// (b):- Positive, Negative, or Zero.

let num_02: number = 9;

if (num_02 > 0) {
    console.log(`${num_02} is positive.`)
} else if (num_02 < 0) {
    console.log(`${num_02} is negative.`)
} else if (num_02 == 0) {
    console.log(`${num_02} is zero.`)
}

// (c):- Whether it is divisible by both 2 and 3 or anyone of them or not divisible by both.

let num_03: number = 39;
if (num_03 % 2 == 0 && num_03 % 3 == 0) {
    console.log(`${num_03} is divisible by both 2 & 3.`)
} else if (num_03 % 2 == 0) {
    console.log(`${num_03} is divisible by only 2.`)
} else if (num_03 % 3 == 0) {
    console.log(`${num_03} is divisible by only 3.`)
} else {
    console.log(`${num_03} is not divisible by neither 2 nor 3.`)
}

// - Q.2
//- Take the user age.
// -- If the age is 18 or above:
// -- Ask if they have a nationality of "Pakistani".
//   ---If yes, print "You are eligible to vote."
//   ---If no, print "Please obtain a valid ID to vote."

let user_age: number = 19;
let nationality: string = "Pakistani";
if (user_age >= 18) {
    if (nationality == "Pakistani") {
        console.log("You are eligible to vote.")
    } else {
        console.log("Please obtain a valid ID to vote.")
    }
} else if (user_age < 18) {
    console.log("Your age is less than 18.")
}

// - Q.3
// - Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above)

let person_age: number = 39;
if (person_age >= 0 && person_age <= 12) {
    console.log("You are a  child.")
} else if (person_age >= 13 && person_age <= 19) {
    console.log("You are a teenager.")
} else if (person_age >= 20 && person_age <= 59) {
    console.log("You are an adult.")
} else if (person_age >= 60) {
    console.log("You are a senior citizen.")
}

// - Q.4
// - Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year.

let month: number = 3;

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("This month has 31 days.")
} else if (month == 2) {
    console.log("This month has 28 days.")
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("This month has 30 days.")
} else {
    console.log("You entered a wrong month.")
}

// - Q.5
// - Check if a year is a leap year or not.

let year: number = 2024;

if (year % 4 == 0 || year % 400 == 0) {
    console.log(`${year} is a leap year.`)
} else {
    console.log(`${year} is not a leap year.`)
}



let my_name: string = "Waleed Ahmad";
console.log(`Submitted by: ${my_name}`)