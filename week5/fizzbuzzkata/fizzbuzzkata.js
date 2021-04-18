const readlineSync = require("readline-sync");

const num = readlineSync.keyIn("Please enter a number from 1-10.  ")

let fizzbuzzkata = () => {
    if (num === "1") {
        console.log("1")
    } else if (num === "2") {
        console.log("2")
    } else {
        console.log("fizzbuzz")
}};

fizzbuzzkata()

module.exports = fizzbuzzkata;
