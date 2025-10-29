/*

    Daily objective: study arrow function and refatoring, take
    old codes and revert for arrow functions,
    simplify functions and remove repeated code 

    Day project: make password generator

*/

// ========================= Arrow Functions =============================== //

// -> a modern and short way of writing functions;

// traditional function
function sum(num1, num2) {
    return num1 + num2
}


// arrow function
const sumWithaArrowFunction = (num1, num2) => num1 + num2;


// If you only have one parameter, you can remove the parentheses.
const exponentiation = n => n * n;


// If you need multiple lines of code, you typically use {}.
const generateMessage = name => {
    const text = `Hello ${name}`;
    return text.toUpperCase();
}