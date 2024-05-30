"use strict";
// - Write a program that uses filter to remove all negative numbers from an array of numbers
let arr1 = [2, 6, -12, 29, -15, -3, 35];
let without_negatives = arr1.filter(num => num > 0);
console.log("The array after removing all negative numbers is", without_negatives);
// - Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const arr2 = [1, 2, 3, 4, 5];
let multiply_function = (arr2) => arr2 * 2;
let mult_arr = arr2.map(multiply_function);
console.log(`The new array after multiplication each index with "2" is`, mult_arr);
// - Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let fruits_array = ["apple", "banana", "cherry", "date", "grape"];
let length2 = 5;
let new_array = fruits_array.filter(word => word.length > length2);
console.log("The fruits having more than 5 characters are", new_array);
// - Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even_numbers = arr3.filter(num => num % 2 == 0);
let sqr_numbers = even_numbers.map(num => num * num);
console.log("The square of only even numbers is", sqr_numbers);
// - Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temp_in_celsius = [0, 10, 20, 30, 40];
let temp_in_fahrenheit = temp_in_celsius.map(temp => (temp * 9 / 5) + 32);
console.log("The temprature in fahrenheit is", temp_in_fahrenheit);
// - Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let arr4 = [3, 6, 9, 12, 15, 18];
let odd_numbers = arr4.filter(num => num % 2 != 0);
let doubled_numbers = odd_numbers.map(num => num + num);
console.log("The doubled odd numbers are", doubled_numbers);
// - Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let names_array = ["Alice", "Bob", "Charlie", "David", "Emily"];
console.log("The names after adding an exclamation mark at the end are: ");
let updated_names = names_array.forEach(name => {
    let new_name = name + "!";
    console.log(new_name);
});
/* <THE END> */
let submitted_by = (my_name) => {
    console.log(`Submitted by: ${my_name}`);
};
submitted_by("Waleed Ahmad");
