// Write a program to merge 2 files into a third file
const fs = require('fs');

const data1 = fs.readFileSync('file1.txt');

const data2 = fs.readFileSync('file2.txt');

const mergedData = data1 + data2;

fs.writeFileSync('merged.txt', mergedData);

console.log("Files merged successfully!");