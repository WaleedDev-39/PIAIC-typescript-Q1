
// const functionAsParam = (func: (num1: number, num2: number) => number, withMultiply: number) => {
//     return func(20,30) * withMultiply
// }



const return_a_value = (val: string) => {
    return val;
}
const concatString = (return_a_val: (variable: string) => string, concat: string) => {
    let returned_value = return_a_val("Waleed");
    console.log("Concat string = ", returned_value + concat);
}

concatString(return_a_value, " Ahmad");

