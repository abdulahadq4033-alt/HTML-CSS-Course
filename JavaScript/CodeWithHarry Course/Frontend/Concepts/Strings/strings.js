console.log("===== ALL JAVASCRIPT STRING FUNCTIONS =====");

let str = "Hello JavaScript";
console.log("Original String:", str);

/* 1. length */
console.log("\n1) length");
console.log(str.length);

/* 2. toUpperCase() */
console.log("\n2) toUpperCase()");
console.log(str.toUpperCase());

/* 3. toLowerCase() */
console.log("\n3) toLowerCase()");
console.log(str.toLowerCase());

/* 4. charAt() */
console.log("\n4) charAt()");
console.log(str.charAt(1));

/* 5. charCodeAt() */
console.log("\n5) charCodeAt()");
console.log(str.charCodeAt(1));

/* 6. indexOf() */
console.log("\n6) indexOf()");
console.log(str.indexOf("Java"));

/* 7. lastIndexOf() */
console.log("\n7) lastIndexOf()");
console.log(str.lastIndexOf("a"));

/* 8. includes() */
console.log("\n8) includes()");
console.log(str.includes("Script"));

/* 9. startsWith() */
console.log("\n9) startsWith()");
console.log(str.startsWith("Hello"));

/* 10. endsWith() */
console.log("\n10) endsWith()");
console.log(str.endsWith("Script"));

/* 11. slice() */
console.log("\n11) slice()");
console.log(str.slice(6, 16));

/* 12. substring() */
console.log("\n12) substring()");
console.log(str.substring(6, 16));

/* 13. substr() (deprecated) */
console.log("\n13) substr() (deprecated)");
console.log(str.substr(6, 10));

/* 14. replace() */
console.log("\n14) replace()");
console.log(str.replace("JavaScript", "World"));

/* 15. replaceAll() */
console.log("\n15) replaceAll()");
let text = "JS is easy. JS is powerful.";
console.log(text.replaceAll("JS", "JavaScript"));

/* 16. trim() */
console.log("\n16) trim()");
let spaced = "   Hello World   ";
console.log(spaced.trim());

/* 17. split() */
console.log("\n17) split()");
console.log(str.split(" "));

/* 18. concat() */
console.log("\n18) concat()");
console.log(str.concat(" is awesome"));

/* 19. repeat() */
console.log("\n19) repeat()");
console.log("Hi ".repeat(3));

/* 20. match() */
console.log("\n20) match()");
console.log(str.match(/JavaScript/));

/* 21. search() */
console.log("\n21) search()");
console.log(str.search("Java"));

/* 22. padStart() */
console.log("\n22) padStart()");
let num = "5";
console.log(num.padStart(3, "0"));

/* 23. padEnd() */
console.log("\n23) padEnd()");
console.log(num.padEnd(3, "0"));

console.log("\n===== PROGRAM END =====");
