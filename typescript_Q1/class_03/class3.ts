var perUnit = 10;
var userInput = 332;

if (userInput <= 100) {
    var totalPrice = (userInput * perUnit);
    var totalTax = totalPrice * 5 / 100;
    var priceWithTax = totalPrice + totalTax;
    console.log("Tax:" + totalTax)
    console.log("units are less than 100   " + priceWithTax)
} else if (userInput >= 100 && userInput <= 200) {
    var totalPrice = (userInput * perUnit);
    var totalTax = totalPrice * 10 / 100;
    var priceWithTax = totalPrice + totalTax;
    console.log("Tax:" + totalTax)
    console.log("units are between 100 and 200   " + priceWithTax)
} else if (userInput >= 200 && userInput <= 300) {
var totalPrice = (userInput * perUnit);
var totalTax = totalPrice * 20 / 100;
    var priceWithTax = totalPrice + totalTax;
    console.log("Tax:" + totalTax)
    console.log("units are between 200 and 300   " + priceWithTax)
} else if (userInput >= 300 && userInput <= 400) {
    var totalPrice = (userInput * perUnit);
    var totalTax = totalPrice * 35 / 100;
    var priceWithTax = totalPrice + totalTax;
    console.log("Tax:" + totalTax)
    console.log("units are between 300 and 400   " + priceWithTax)
} else if (userInput >= 400 && userInput <= 500) {
    var totalPrice = (userInput * perUnit);
    var totalTax = totalPrice * 50 / 100;
    var priceWithTax = totalPrice + totalTax;
    console.log("Tax:" + totalTax)
    console.log("units are between 400 and 500   " + priceWithTax)
} else if (userInput >= 500) {
    var totalPrice = (userInput * perUnit);
    var totalTax = totalPrice * 100 / 100;
    var priceWithTax = totalPrice + totalTax;
    console.log("Tax:" + totalTax)
    console.log("units are greater than 500   " + priceWithTax)
}