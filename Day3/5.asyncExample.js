async function exampleAsyncFunction() {
  console.log("Step 1");
  const result = await fetch("https://api.example.com/data");
  console.log("Step 2");
  return result;
}

exampleAsyncFunction()
  .then((result) => {
    console.log("Async function completed:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("Main thread continues...");

///
<br />;

//   In this example:

// 1. "Step 1" will be logged.
// 2. The fetch operation is initiated with the URL, and the function
//    pauses at the await line until the fetch operation is completed.
// 3. While the fetch operation is ongoing, the "Main thread continues..."
//    message is logged.
// 4. Once the fetch operation is complete, the function resumes execution
//    with the resolved value from the Promise.
// 5. "Step 2" is logged.
// 6. Finally, the then() callback is executed.

// The async function itself doesn't store its state; the
// JavaScript runtime manages the execution context and
// knows where to resume execution after an await.
// It's important to understand that async/await doesn't block the
// main thread but rather lets the event loop handle asynchronous tasks.
