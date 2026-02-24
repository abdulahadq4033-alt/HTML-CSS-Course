const n=[1,3,5,7,9];
const m=[1,2,3,4,5,6,7,8,9];
function add(value1,value2){
    return value1+value2;
}
function subtract(value1,value2){
    return value1-value2;
}
function multiply(value1,value2){
    return value1*value2;
}
function divide(value1,value2){
    return value1/value2;
}
console.log(n.reduce(add));
console.log(n.reduce(subtract));
console.log(n.reduce(multiply));
console.log(n.reduce(divide));
console.log(m.reduce(add));
console.log(m.reduce(subtract));
console.log(m.reduce(multiply));
console.log(m.reduce(divide));  

/* Another way of writing the above code using arrow functions */
console.log(n.reduce((value1,value2)=>value1+value2));
console.log(n.reduce((value1,value2)=>value1-value2));
console.log(n.reduce((value1,value2)=>value1*value2));
console.log(n.reduce((value1,value2)=>value1/value2));
console.log(m.reduce((value1,value2)=>value1+value2));
console.log(m.reduce((value1,value2)=>value1-value2));
console.log(m.reduce((value1,value2)=>value1*value2));
console.log(m.reduce((value1,value2)=>value1/value2));