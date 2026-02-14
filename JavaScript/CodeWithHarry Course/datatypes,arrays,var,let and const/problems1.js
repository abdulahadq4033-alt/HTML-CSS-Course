// 1) Create a variable of type string and assign it a value and try to add a number to it. What happens?
// When you add a number to a string in JavaScript, the number will be converted to a string and concatenated with the original string. For example:
let str = "Hello";
let num = 5;
let result = str + num;
console.log(result); // Output: "Hello5"
// 2) Create a variable of type number and assign it a value and try to add a string to it. What happens?
// When you add a string to a number in JavaScript, the number will be converted to a string and concatenated with the original string. For example:
let num2 = 10;
let str2 = "World";
let result2 = num2 + str2;
console.log(result2); // Output: "10World"
// 3) Create a variable of type boolean and assign it a value and try to add a string to it. What happens?
// When you add a string to a boolean in JavaScript, the boolean will be converted to a string ("true" or "false") and concatenated with the original string. For example:
let bool = true;
let str3 = " is a boolean value.";
let result3 = bool + str3;
console.log(result3); // Output: "true is a boolean value."
// 4) Create a variable of type null and assign it a value and try to add a string to it. What happens?
// When you add a string to null in JavaScript, null will be converted to the string "null" and concatenated with the original string. For example:
let nullValue = null;   
let str4 = " is a null value.";
let result4 = nullValue + str4;
console.log(result4); // Output: "null is a null value."
// 5) Create a variable of type undefined and assign it a value and try to add a string to it. What happens?
// When you add a string to undefined in JavaScript, undefined will be converted to the string "undefined" and concatenated with the original string. For example:
let undefinedValue = undefined;
let str5 = " is an undefined value.";
let result5 = undefinedValue + str5;
console.log(result5); // Output: "undefined is an undefined value."
// 6) Create a variable of type object and assign it a value and try to add a string to it. What happens?
// When you add a string to an object in JavaScript, the object will be converted to a string (usually "[object Object]") and concatenated with the original string. For example:
let obj = { name: "John", age: 30 };    
let str6 = " is an object.";
let result6 = obj + str6;
console.log(result6); // Output: "[object Object] is an object."
// 7) Create an object with properties name, age, and a method greet that prints a greeting message using the name property. Call the greet method to see the output.
let person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
person.greet(); // Output: "Hello, my name is Alice"
// 8) Create an array of numbers and use the push method to add a new number to the end of the array. Print the updated array.
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
// 9) Create an array of strings and use the join method to create a single string with all the elements of the array separated by a comma. Print the resulting string.
let fruits = ["apple", "banana", "cherry"];
let fruitString = fruits.join(", ");
console.log(fruitString); // Output: "apple, banana, cherry"
// 10) Create a variable of type string and use the length property to find out how many characters are in the string. Print the length.
let myString = "Hello, World!";
let stringLength = myString.length;
console.log(stringLength); // Output: 13
