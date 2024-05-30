// - Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.

let specified_array = (new_array: any, index: any, value: any) => {
    new_array.splice(index, 0, value);
    console.log("The array with specified values is ", new_array)
}
let new_array: any = [];
specified_array(new_array, 2, 4);

// - Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let add_items = (items_list: any, index: any, item: any) => {
    items_list.splice(index, 0, item);
    console.log("The shopping cart after adding new item is ", items_list)
}

let remove_items = (items_list: any, index: any, item: any) => {
    items_list.splice(index, item);
    console.log("The shopping cart after removing an item is ", items_list)
}

let updating_items = (items_list: any, index: any, item_to_update: any, item: any) => {
    items_list.splice(index, item_to_update, item);
    console.log("The shopping cart after updating an item is ", items_list)

}
let cart_array: any = ["watch", "vegetables"];
add_items(cart_array, 2, "fruits");
remove_items(cart_array, 1, 1);
updating_items(cart_array, 1, 1, "meat");



// - Write a program that uses a while loop to print the first 25 integers.

let j: number = 0;
console.log("The first 25 integers are: ")
while (j != 26) {
    console.log(j);
    j++;
}

// - Write a program that uses a while loop to print the first 10 even numbers.
let even_numbers: number = 0;
console.log("The first 10 even numbers are: ")

while (even_numbers != 20) {
    if (even_numbers % 2 == 0) {
        console.log(even_numbers);
    }
    even_numbers++;
}

// - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

let factorial = (positive: number) => {
    if (positive > 0) {
        let fact: number = 1;
        let i: number = 1;
        while (i <= positive) {
            fact = fact * i;
            i++;
        }
        console.log(`Factorial of ${positive} is ${fact}.`)
    } else if (positive < 0) {
        console.log("Please enter a positive integer to calculate it's factorial.");
    } else if (positive == 0) {
        console.log("factorial of zero is not possible");
    }
}

factorial(9);

// - Write a program having an array of numbers if the number is negative it should remove the negative number from the array.


let arr: any = [23, 12, -2323, -15, -39, 41, -4, 7, -19, 2, 15, -2];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
        arr.splice(i, 1, "-ve removed");
    }
}
console.log("The array without negative numbers is ", arr);


// - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

const sum_of_array = (arr2: any) => {
    var i = 0;
    let sum = 0;
    while (i < arr2.length) {
        sum = sum + arr2[i];
        i++;
    }
    console.log(`The sum of all the numbers in this array is ${sum}.`)
}
const arr2 = [23, 15, 10, 50]
sum_of_array(arr2);

// - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

let cel_to_far = (temp_list: any) => {
    let i = 0;
    let temp;
    let fahr: any = [];
    while (i < temp_list.length) {
        temp = (temp_list[i] * 9 / 5) + 32;
        fahr.splice(i, 0, temp);
        i++;
    }
    console.log("The temprature in fahrenhite of each value of the array is", fahr);
}

const arr3 = [39, 93, 99, 33];
cel_to_far(arr3);

// - Write a program to remove all the odd numbers from an array.

let remove_odds = (arr4: any) => {
    let i = 0;

    while (i < arr4.length) {
        if (arr4[i] % 2 != 0) {
            arr4.splice(i, 1, "odd removed");
        }
        i++;
    }
    console.log("The array after removing all odd numbers is", arr4);
}

let mixed_array = [23, 10, 51, 99, 30, 6];

remove_odds(mixed_array);

/* <THE END> */

let submitted_by = (my_name: string) => {
    console.log(`Submitted by: ${my_name}`)
}
submitted_by("Waleed Ahmad");