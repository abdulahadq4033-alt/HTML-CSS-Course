let n=[1,2,3,4,5,6,7,8,9];
let m=[1,2,3,4,5,6,7,8,9];
let o=[];
for(let i=0;i<n.length;i++){
    for(let j=0;j<m.length;j++){
        if(n[i]===m[j]){
            o.push(n[i]);
        }
    }
}
console.log(o);
console.log(o.length);
console.log(o[0]);

