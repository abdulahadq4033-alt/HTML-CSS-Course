console.log("===== ALL JAVASCRIPT FUNCTIONS IN ONE PROGRAM =====");

/* 1. FUNCTION DECLARATION */
console.log("\n1) FUNCTION DECLARATION");
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("Ahad"));

/* 2. FUNCTION EXPRESSION */
console.log("\n2) FUNCTION EXPRESSION");
const add = function (a, b) {
    return a + b;
};
console.log("Sum:", add(10, 20));

/* 3. ARROW FUNCTION */
console.log("\n3) ARROW FUNCTION");
const multiply = (a, b) => a * b;
console.log("Product:", multiply(5, 4));

/* 4. ANONYMOUS FUNCTION */
console.log("\n4) ANONYMOUS FUNCTION");
setTimeout(function () {
    console.log("This is an anonymous function");
}, 500);

/* 5. IIFE (Immediately Invoked Function Expression) */
console.log("\n5) IIFE");
(function () {
    console.log("IIFE executed immediately");
})();

/* 6. FUNCTION WITH DEFAULT PARAMETERS */
console.log("\n6) DEFAULT PARAMETERS");
function power(base, exponent = 2) {
    return base ** exponent;
}
console.log(power(5));
console.log(power(2, 3));

/* 7. REST PARAMETERS */
console.log("\n7) REST PARAMETERS");
function sumAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));

/* 8. CALLBACK FUNCTION */
console.log("\n8) CALLBACK FUNCTION");
function processData(x, callback) {
    callback(x);
}

processData(10, function (value) {
    console.log("Processed value:", value * 2);
});

/* 9. HIGHER-ORDER FUNCTION */
console.log("\n9) HIGHER-ORDER FUNCTION");
function operate(a, b, operation) {
    return operation(a, b);
}
console.log(operate(8, 2, multiply));

/* 10. CONSTRUCTOR FUNCTION */
console.log("\n10) CONSTRUCTOR FUNCTION");
function Student(name, age) {
    this.name = name;
    this.age = age;
}
const s1 = new Student("Ahad", 20);
console.log(s1);

/* 11. RETURNING A FUNCTION */
console.log("\n11) FUNCTION RETURNING FUNCTION");
function outer() {
    return function inner() {
        console.log("Inner function executed");
    };
}
const innerFunc = outer();
innerFunc();

console.log("\n===== PROGRAM END =====");
