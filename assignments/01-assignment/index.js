"use strict";
// - Calculate your age based on the current year and your birth year
let currentYear = 2024;
let birthYear = 2004;
let myAge = currentYear - birthYear;
console.log("My age = " + myAge + 'years');
// - Write a program that calculates the area of a rectangle using length and width variables
let rectLength = 30; //centi meters
let rectWidth = 15; //centi meters
let rectArea = rectLength * rectWidth;
console.log("Area of rectangle = " + rectArea + 'cm');
// - Write a program that calculates the area of a circle
let circleRadius = 20; //centi meters
let pi = Math.PI;
let circleArea = pi * (circleRadius * circleRadius);
console.log("Area of Circle = " + circleArea + 'cm');
// - Write a program that calculates the area of the cube
let cubeLength = 40; //centi meters
let cubeArea = 6 * cubeLength; //since there are six sides of a cube so we'll multiply the length with 6.
console.log("Area of Cube = " + cubeArea + 'cm');
// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable
let temp_In_Fahrenheit = 108;
let temp_In_Celsius = 32;
let fahrenheit_To_Celsius = (temp_In_Fahrenheit - 32) * 5 / 9;
let celsius_To_Fahrenheit = (9 / 5 * temp_In_Celsius) + 32;
console.log("Temprature in Celsius = " + fahrenheit_To_Celsius + "C");
console.log("Temprature in Fahrenheit = " + celsius_To_Fahrenheit + "F");
// - Convert a given number of seconds into minutes and seconds using variables
let number_In_Seconds = 230;
let remaining_Seconds = number_In_Seconds % 60;
let secs_To_Mins = Math.floor(number_In_Seconds / 60);
console.log("Number in Minutes & Seconds = " + secs_To_Mins + "min : " + remaining_Seconds + "sec");
// - Write a program that calculates the percentage
let obtained_Marks = 945;
let total_Marks = 1100;
let percentage_Of_Number = obtained_Marks * 100 / total_Marks;
console.log("Percentage of the number = " + percentage_Of_Number + "%");
// Increment and Decrement Operator Problems:
/*
 - Question 1:
let a = 2;
let b = ++a * 2;
b?
Solution:

-> initially a is 2
-> after pre-increment a becomes 3 so if b = ++a * 2
-> b = 3 * 2
Answer: b = 6
*/
/*
 - Question 2
let x = 5;
let y = x-- + 2;
y?
Solution:

-> initially x = 5
-> after post-decrement x becomes 4 but will be used here as 5
-> if y = x-- + 2
-> y = 5 + 2
Answer: y = 7


*/
/*
 - Question 4
let m = 2;
let n = ++m * m++ * --m;
n?
Solution:

-> initially m = 2
-> after pre-increment m will become 3          // n = 3 * m++ * --m
-> after post-increment m will become 4 but here it'll be used as 3         // n = 3 * 3 * --m
-> after pre-decrement m will become 3              // n = 3 * 3 * 3
Answer: n = 27




*/
/*
 - Question 5
let a = 3;
let b = 5;
let result = ++a + b-- - a++ + --b;
result?

Solution:

-> initially a = 3 and b = 5
-> after pre-increment a will become 4 and b will also become 4 after post-decrement but will be used as 5 for now:
       result = 4 + 5 - a++ + --b
-> now after post-increment a will become 5 but will be used as 4 for now and b will become 3 after pre-decrement:
       result = 4 + 5 - 4 + 3
Answer: result = 8

*/
/*
 - Question 6
let m = 2;
let n = 4;
let p = m++ + ++n - --m + n--;
    m?,n?,p?

Solution:

-> initially m = 2 and n = 4
-> after post-increment m will become 3 but will be used as 2 for now and n will become 5 after pre-increment:
        p = 2 + 5 - --m + n--
-> now m will become 2 after pre-decrement and n will become 4 after post-decrement but will be used as 5 for now:
        p = 2 + 5 - 2 + 5

Answer: p = 10, m = 2, n = 4

*/
/*
 - Question 7
 let a = 5;
let b = 3;
let c = 2;
let d = 7;

let result = ++a * (b-- + c) / --d;

 a?, b?, c?, d? ,result?

Solution:

-> initially a = 5, b = 3, c = 2 and d = 7
-> a will become 6 after pre-increment:
        result = 6 * (b-- + c) / --d
-> b will become 2 after post-decrement but will be used as 3 for now:
        result = 6 * (3 + c) / --d
-> there is not any operator on c so c will be used as it is:
        result = 6 * (3 + 2) / --d
-> d will become 6 after pre-decrement:
        result = 6 * (3 + 2) / 6
-> result = 6 * 5 / 6
-> result = 30 / 6
-> resut = 5

Answer: a = 6, b = 2. c = 2, d = 6 and result = 5


*/
/*
 - Question 8
let m = 2;
let n = 3;
let o = 4;
let result = m++ * (--n + m) / (o-- - n);
 m?, o?, n?, result?

Solution:

-> initially m = 2, n = 3 and o = 4
-> after post-increment m will become 3 but will be used as 2 for now:
        result = 2 * (--n + m) / (o-- - n)
-> after pre-decrement n will become 2:
        result = 2 * (2 + m) / (o-- - n)
-> as there is not any operator with m so it'll be used as 3:
        result = 2 * (2 + 3) / (o-- - n)
-> after post-decrement o will become 3 but will be used as 4 for now:
        result = 2 * (2 + 3) / (4 - n)
-> as there is not any operator with n so it'll be used as 2:
        result = 2 * (2 + 3) / (4 - 2)
-> result = 2 * 5 / 2
-> result = 10 / 2
-> result = 5

Answer: m = 3, n = 2, o = 3, result = 5


*/
var myName = "Submitted by: Waleed Ahmad";
console.log(myName);
