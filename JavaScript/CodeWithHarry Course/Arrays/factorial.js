// function factorial(n) {
//     if (n < 0) return undefined;
//     if (n === 0) return 1;

//     let numbers = [];
//     for (let i = 1; i <= n; i++) {
//         numbers.push(i);
//     }

//     return numbers.reduce((acc, curr) => acc * curr, 1);
// }

// let value = Number(prompt("Enter a number to find its factorial:"));

// if (isNaN(value)) {
//     console.log("Please enter a valid number");
// } else {
//     console.log(factorial(value));
// }; 
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n < 0) return undefined;
    if (n === 0) return 1;

    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }

    return numbers.reduce((acc, curr) => acc * curr, 1);
}

rl.question("Enter a number to find its factorial: ", (input) => {
    const value = Number(input);

    if (isNaN(value)) {
        console.log("Please enter a valid number");
    } else {
        console.log(`Factorial is: ${factorial(value)}`);
    }

    rl.close();
});

// prompt will only work in a browser environment, so we use the readline module for Node.js to get user input from the command line. The rest of the code remains the same, allowing us to calculate and display the factorial of the entered number.