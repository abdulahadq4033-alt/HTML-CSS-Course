// program to generate a random business name
let r=Math.random()*255;
let a,b,c
if(r<127){
    a="Pineapple";
}
else if(r>=127 && r<200){
    a="Mango";
}
else{
    a="Watermelon";
}
if(r<127){
    b="Coffee\t";
}
else if(r>=127 && r<200){
    b="Tea";
}
else{
    b="Soda";
}
if(r<127){
    c="Cart";
}
else if(r>=127 && r<200){
    c="Bike\t";
}
else{
    c="Bus";
}
console.log(a+b+c)
