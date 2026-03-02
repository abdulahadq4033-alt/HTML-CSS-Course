// This script calculates the factorial of a given number using recursion. It prompts the user to enter a number and then displays the result. Using Node.js, we can run this script in the terminal. The readline module is used to handle user input from the command line. The factorial function checks for base cases (0 and 1) and handles negative numbers by returning an appropriate message.
// Getting input from the user. An alternative is using prompt() in a browser environment, but here we use readline for Node.js.
const readline= require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Recursive function to calculate factorial
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else if(n<0){
        return "Factorial is not defined for negative numbers.";
    }
    return n*factorial(n-1);
}
readline.question("Enter a number to calculate its factorial: ", function(num){
    const result = factorial(parseInt(num)); // parseint is used to convert the input string to an integer
    console.log(`The factorial of ${num} is: ${result}`);
    readline.close();
});
