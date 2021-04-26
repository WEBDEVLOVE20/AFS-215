const readlineSync = require("readline-sync");

const num = readlineSync.keyIn("Please enter a number from 1-10.  ");

let fizzbuzz = () => {
    if (num === "1") {
        console.log("1")
    } else if (num === "2") {
        console.log("2")
    } else {
        console.log("fizzbuzz")
}};

fizzbuzz()

module.exports = fizzbuzz;
