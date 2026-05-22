let a = 6;
function factorial(number){
    let arr = Array.from(Array(number).keys()).map(x => x + 1); // Create an array of numbers from 1 to 'number'
    return arr.reduce((acc, val) => acc * val, 1); // Use reduce to calculate the factorial
    // return number === 0 || number === 1 ? 1 : number * factorial(number - 1); // Recursive approach (commented out)
}
console.log(factorial(a));