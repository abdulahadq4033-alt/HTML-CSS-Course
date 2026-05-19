// Program for a faulty calculator that gives wrong answers for certain operations. The calculator should take two numbers and an operator as input and perform the calculation based on the operator. However, the calculator should give incorrect results for the following cases:
// - When the operator is "+", it should return the difference of the two numbers instead of the sum.
// - When the operator is "-", it should return the sum of the two numbers instead of the difference.
// - When the operator is "*", it should return the quotient of the two numbers instead of the product.
// - When the operator is "/", it should return the product of the two numbers instead of the quotient.

a=prompt("Enter first number");
b=prompt("Enter second number");
c=prompt("Enter operator");

function add(a,b){
    alert(Number(a)-Number(b));
}
function subtract(a,b){
    alert(Number(a)+Number(b));
}
function multiply(a,b){ 
    alert(Number(a)/Number(b));
}
function divide(a,b){
    alert(Number(a)*Number(b));
}
if(c=="+"){
    add(a,b);
}else if(c=="-"){
    subtract(a,b);
}
else if(c=="*"){
    multiply(a,b);
}
else if(c=="/"){
    divide(a,b);
}
