// Execution Contest

var n = 3;

function square(nums) {
  var answer = nums * nums;
  return answer;
}

var square2 = square(n);
var square3 = square(4);

//// Ternary Operators

var isTrue = true;
var result = isTrue ? "It's true!" : "It's false!";
console.log(result); // Output: "It's true!"

///  Logical AND (&&):

var a = true;
var b = false;

// if ther is false it will return false
var result1 = a && b; // false
var result2 = true && true; // true
var result3 = false && true; // false

/// Logical OR (||):

var a = true;
var b = false;

var result1 = a || b; // true
var result2 = true || false; // true
var result3 = false || false; // false

//// Nested If else

let age = 30;
let educationLevel = "graduate";

if (age >= 18) {
  if (educationLevel === "graduate") {
    console.log("You are eligible for professional jobs.");
  } else if (educationLevel === "high school") {
    console.log("You are eligible for entry-level jobs.");
  } else {
    console.log("Your education level is not recognized.");
  }
} else {
  console.log("You are too young to work.");
}

///// Switch

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
    break;
}

console.log("Today is " + dayName);

//// while loop

// keeps on running till meet the condition

let count = 0;

while (count < 5) {
  console.log("Count: " + count);
  count++;
}

/// Do while

let num = 1;

do {
  console.log("Number: " + num);
  num++;
} while (num <= 5);

///The key difference between the two loops is that the
//  while loop evaluates the condition before the first iteration, so if
//   the condition is false initially, the loop might not execute at all. On
//    the other hand, the do-while loop guarantees at least one execution
//  of the block of code before checking the condition for subsequent iterations.

<br />;

// break Statement:

// The break statement is used to
//  immediately exit a loop, prematurely terminating its execution.
//   It is often used when a certain
// condition is met, and you want to stop the loop from continuing further.

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Loop will break at i = " + i);
    break;
  }
  console.log("Current i: " + i);
}

//continue Statement:

// The continue statement is used to skip the current
//  iteration of a loop and proceed to the next iteration.
//   It's often used when you want to
//  skip certain values or conditions within the loop without exiting the loop entirely.

for (let j = 1; j <= 5; j++) {
  if (j === 3) {
    console.log("Skipping iteration at j = " + j);
    continue;
  }
  console.log("Current j: " + j);
}
