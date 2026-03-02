let a=[1,2,3,4,5,6,7,8,9];
function evenNumbers(value){
    return value%2===0;
}
console.log(a.filter(evenNumbers));
function oddNumbers(value){
    return value%2!==0;
}
console.log(a.filter(oddNumbers));
function greaterThan5(value){
    return value>5;
}
console.log(a.filter(greaterThan5));
function lessThan5(value){
    return value<5;
}
console.log(a.filter(lessThan5));
function one(value){
    return value===1;
}
console.log(a.filter(one));
const greaterThan3=(value)=>{
    return value>3;
}
console.log(a.filter(greaterThan3));