// ==========================================
// 1. WHAT IS A PROMISE?
// ==========================================
// A Promise represents a value that may be:
// - resolved (success)
// - rejected (error)
// - pending (still running)

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Task completed successfully");
  } else {
    reject("❌ Task failed");
  }
});

// Consuming a Promise
myPromise
  .then(result => {
    console.log("THEN:", result);
  })
  .catch(error => {
    console.log("CATCH:", error);
  })
  .finally(() => {
    console.log("FINALLY: Always runs");
  });


// ==========================================
// 2. ASYNCHRONOUS PROMISE (REAL USE CASE)
// ==========================================

function fetchData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      let success = true;

      if (success) {
        resolve({ id: 1, name: "Marcos" });
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(err => {
    console.log("Error:", err);
  });


// ==========================================
// 3. PROMISE CHAINING
// ==========================================

function step1() {
  return Promise.resolve("Step 1 done");
}

function step2(prev) {
  return Promise.resolve(prev + " → Step 2 done");
}

function step3(prev) {
  return Promise.resolve(prev + " → Step 3 done");
}

step1()
  .then(result => step2(result))
  .then(result => step3(result))
  .then(final => console.log("Chain Result:", final));


// ==========================================
// 4. PROMISE.ALL (RUN MULTIPLE TASKS)
// ==========================================

const p1 = Promise.resolve("Task 1");
const p2 = Promise.resolve("Task 2");
const p3 = Promise.resolve("Task 3");

Promise.all([p1, p2, p3])
  .then(results => {
    console.log("All results:", results);
  })
  .catch(err => {
    console.log("One failed:", err);
  });


// ==========================================
// 5. PROMISE.RACE (FIRST TO FINISH)
// ==========================================

const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 3000));

Promise.race([fast, slow])
  .then(result => {
    console.log("Winner:", result);
  });


// ==========================================
// 6. ASYNC/AWAIT (MODERN WAY)
// ==========================================

async function runAsync() {
  try {
    console.log("Async/Await Start");

    const data = await fetchData(); // waits for promise
    console.log("Async Data:", data);

  } catch (error) {
    console.log("Async Error:", error);
  } finally {
    console.log("Async Finished");
  }
}

runAsync();


// ==========================================
// 7. MANUALLY REJECTING
// ==========================================

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is too small");
    }
  });
}

checkNumber(5)
  .then(res => console.log(res))
  .catch(err => console.log(err));


// ==========================================
// 8. IMPORTANT NOTES
// ==========================================
// - A Promise can only resolve/reject ONCE
// - After resolution, state is fixed
// - Use .then() for success
// - Use .catch() for errors
// - Use async/await for cleaner code

console.log("Program End (non-blocking)");