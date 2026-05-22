/*************************************************
 * JAVASCRIPT ARRAY LOOPS – SINGLE PROGRAM
 *************************************************/

const arr = [10, 20, 30, 40, 50];

/* ==========================================
   1. Classic for loop
   ========================================== */
// Most basic loop, gives full control over index
for (let i = 0; i < arr.length; i++) {
    console.log("for loop:", arr[i]);
}

/* ==========================================
   2. for...of loop
   ========================================== */
// Directly accesses values (best for simple iteration)
for (let value of arr) {
    console.log("for...of:", value);
}

/* ==========================================
   3. for...in loop
   ========================================== */
// Iterates over indexes (not recommended for arrays in most cases)
for (let index in arr) {
    console.log("for...in index:", index, "value:", arr[index]);
}

/* ==========================================
   4. forEach()
   ========================================== */
// Array method, cannot be broken with break/continue
arr.forEach((value, index) => {
    console.log(`forEach -> index ${index}, value ${value}`);
});

/* ==========================================
   5. map()
   ========================================== */
// Loops and returns a NEW array
const squared = arr.map(value => value * value);
console.log("map result (squared):", squared);

/* ==========================================
   6. filter()
   ========================================== */
// Loops and keeps elements that satisfy condition
const evenNumbers = arr.filter(value => value % 2 === 0);
console.log("filter result (even):", evenNumbers);

/* ==========================================
   7. reduce()
   ========================================== */
// Loops and reduces array to a single value
const sum = arr.reduce((acc, value) => acc + value, 0);
console.log("reduce result (sum):", sum);

/* ==========================================
   8. while loop
   ========================================== */
// Useful when condition-based looping is required
let i = 0;
while (i < arr.length) {
    console.log("while loop:", arr[i]);
    i++;
}

/* ==========================================
   9. do...while loop
   ========================================== */
// Executes at least once
let j = 0;
do {
    console.log("do...while loop:", arr[j]);
    j++;
} while (j < arr.length);

/* ==========================================
   10. entries() with for...of
   ========================================== */
// Gets both index and value
for (const [index, value] of arr.entries()) {
    console.log(`entries -> index ${index}, value ${value}`);
}

/* ==========================================
   11. keys() with for...of
   ========================================== */
// Iterates over indexes only
for (const index of arr.keys()) {
    console.log("keys -> index:", index);
}

/* ==========================================
   12. values() with for...of
   ========================================== */
// Iterates over values only
for (const value of arr.values()) {
    console.log("values -> value:", value);
}

/*************************************************
 * END OF ARRAY LOOPING METHODS
 *************************************************/