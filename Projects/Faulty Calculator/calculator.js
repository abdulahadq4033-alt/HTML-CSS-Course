// Program for a simple calculator that takes two numbers and an operator as input and performs the calculation based on the operator. The calculator should support the following operators: +, -, *, /.

a=prompt("Enter first number");
b=prompt("Enter second number");
c=prompt("Enter operator");
if(c=="+"){
    alert(parseInt(a)+parseInt(b));
}else if(c=="-"){
    alert(parseInt(a)-parseInt(b));
}else if(c=="*"){
    alert(parseInt(a)*parseInt(b));
}else if(c=="/"){
    alert(parseInt(a)/parseInt(b));
}else{
    alert("Invalid operator");
}