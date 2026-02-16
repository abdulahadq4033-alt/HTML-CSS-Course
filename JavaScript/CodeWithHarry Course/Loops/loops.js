console.log("===== ALL JAVASCRIPT LOOPS IN ONE PROGRAM =====");

/* 1. FOR LOOP */
console.log("\n1) FOR LOOP");
for (let i = 1; i <= 5; i++) {
    console.log("i =", i);
}

/* 2. WHILE LOOP */
console.log("\n2) WHILE LOOP");
let j = 1;
while (j <= 5) {
    console.log("j =", j);
    j++;
}

/* 3. DO WHILE LOOP */
console.log("\n3) DO WHILE LOOP");
let k = 1;
do {
    console.log("k =", k);
    k++;
} while (k <= 5);

/* 4. FOR...OF LOOP (Array & String) */
console.log("\n4) FOR...OF LOOP");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

let word = "JS";
for (let ch of word) {
    console.log(ch);
}

/* 5. FOR...IN LOOP (Object) */
console.log("\n5) FOR...IN LOOP");
let student = {
    name: "Ahad",
    age: 20,
    course: "CSE"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}

/* 6. FOREACH LOOP */
console.log("\n6) FOREACH LOOP");
let numbers = [10, 20, 30, 40];

numbers.forEach((num, index) => {
    console.log("Index", index, "Value", num);
});

console.log("\n===== PROGRAM END =====");
