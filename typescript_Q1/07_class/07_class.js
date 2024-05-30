"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functionAsParam = (func, withMultiply) => {
    return func(20, 30) * withMultiply;
};
const return_a_value = (val) => {
    return val;
};
const concatString = (return_a_val, concat) => {
    let returned_value = return_a_val("Waleed");
    console.log("Concat string = ", returned_value + concat);
};
concatString(return_a_value, " Ahmad");
