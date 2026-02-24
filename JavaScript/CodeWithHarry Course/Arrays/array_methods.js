/*************************************************
 * JAVASCRIPT ARRAY METHODS – SINGLE PROGRAM
 *************************************************/

// Original array
let arr = [10, 20, 30, 40, 50];
console.log("Original array:", arr);

/* ===============================
   1. push() – add element at end
   =============================== */
arr.push(60);
console.log("After push(60):", arr);

/* ===============================
   2. pop() – remove last element
   =============================== */
arr.pop();
console.log("After pop():", arr);

/* ===============================
   3. unshift() – add at beginning
   =============================== */
arr.unshift(5);
console.log("After unshift(5):", arr);

/* ===============================
   4. shift() – remove from beginning
   =============================== */
arr.shift();
console.log("After shift():", arr);

/* ===============================
   5. length – number of elements
   =============================== */
console.log("Array length:", arr.length);

/* ===============================
   6. indexOf() – find index
   =============================== */
console.log("Index of 30:", arr.indexOf(30));

/* ===============================
   7. includes() – check existence
   =============================== */
console.log("Includes 40?", arr.includes(40));

/* ===============================
   8. join() – convert to string
   =============================== */
console.log("Joined with '-':", arr.join("-"));

/* ===============================
   9. concat() – merge arrays
   =============================== */
let arr2 = [60, 70];
let merged = arr.concat(arr2);
console.log("After concat:", merged);

/* ===============================
   10. slice() – extract portion
   =============================== */
let sliced = merged.slice(1, 4);
console.log("Slice (1,4):", sliced);

/* ===============================
   11. splice() – add/remove elements
   =============================== */
// Remove 1 element at index 2 and add 99
merged.splice(2, 1, 99);
console.log("After splice:", merged);

/* ===============================
   12. reverse() – reverse array
   =============================== */
merged.reverse();
console.log("After reverse:", merged);

/* ===============================
   13. sort() – sort elements
   =============================== */
merged.sort((a, b) => a - b); // numeric ascending
console.log("After sort:", merged);

/* ===============================
   14. forEach() – loop through array
   =============================== */
merged.forEach((value, index) => {
    console.log(`forEach -> Index ${index}: ${value}`);
});

/* ===============================
   15. map() – transform array
   =============================== */
let doubled = merged.map(num => num * 2);
console.log("After map (double):", doubled);

/* ===============================
   16. filter() – select elements
   =============================== */
let greaterThan30 = merged.filter(num => num > 30);
console.log("After filter (>30):", greaterThan30);

/* ===============================
   17. reduce() – reduce to single value
   =============================== */
let sum = merged.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce:", sum);

/* ===============================
   18. find() – first matching element
   =============================== */
let found = merged.find(num => num > 25);
console.log("First number >25:", found);

/* ===============================
   19. findIndex() – index of match
   =============================== */
let foundIndex = merged.findIndex(num => num > 25);
console.log("Index of first number >25:", foundIndex);

/* ===============================
   20. every() – all elements satisfy?
   =============================== */
console.log("All > 0?", merged.every(num => num > 0));

/* ===============================
   21. some() – at least one satisfies?
   =============================== */
console.log("Any > 50?", merged.some(num => num > 50));

/* ===============================
   22. fill() – fill array with value
   =============================== */
let filled = new Array(5).fill(1);
console.log("Filled array:", filled);

/* ===============================
   23. flat() – flatten nested arrays
   =============================== */
let nested = [1, [2, [3, 4]]];
console.log("After flat(2):", nested.flat(2));

/* ===============================
   24. flatMap() – map + flat
   =============================== */
let flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log("After flatMap:", flatMapped);

/* ===============================
   25. toString() – convert to string
   =============================== */
console.log("toString():", merged.toString());

/* ===============================
   26. at() – access by index
   =============================== */
console.log("Element at index 1:", merged.at(1));
console.log("Last element using at:", merged.at(-1));

/* ===============================
   27. copyWithin() – copy part of array
   =============================== */
let copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3);
console.log("After copyWithin:", copyArr);

/* ===============================
   28. entries() – key/value iterator
   =============================== */
for (let [index, value] of merged.entries()) {
    console.log(`entries -> ${index}: ${value}`);
}

/* ===============================
   29. keys() – iterator of keys
   =============================== */
for (let key of merged.keys()) {
    console.log("Key:", key);
}

/* ===============================
   30. values() – iterator of values
   =============================== */
for (let value of merged.values()) {
    console.log("Value:", value);
}

/*************************************************
 * END OF ARRAY METHODS DEMO
 *************************************************/