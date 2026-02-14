let a='Hello World';
console.log(a);

let b=123;
console.log(b);

let c=true;
console.log(c);

let d=null;
console.log(d);

let e=undefined;
console.log(e);

let f={name:'John', age:30};
console.log(f);

console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f);

let o={
    name:'Alice',
    age:25,
    greet:function(){
        console.log('Hello, my name is ' + this.name);
    }
}
console.log(o);
o.greet();
o.salary=24000;
console.log(o);
o.salary=30000;
console.log(o);
delete o.age;
console.log(o);

o.is_employed=true;
console.log(o);

let arr=[1,2,3,4,5];
console.log(arr);