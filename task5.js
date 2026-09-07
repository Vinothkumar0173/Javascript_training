// ==================================================
// Q1: What is the difference between var, let, const?
// ==================================================

/*
var   - Function scoped, can be redeclared and reassigned.
let   - Block scoped, cannot be redeclared but can be reassigned.
const - Block scoped, cannot be redeclared or reassigned.
*/


// ==================================================
// Q2: Can you re-declare a variable with var?
// ==================================================

/*
Yes, var can be redeclared.

let and const cannot be redeclared in the same scope.
*/

var a = 10;
var a = 20;

console.log(a); // 20


// ==================================================
// Q3: What is the output?
// ==================================================

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;

console.log(x, y, z);

// Output:
// TypeError: Assignment to constant variable.


// ==================================================
// Q4: Difference between declaring and initializing?
// ==================================================

/*
Declaration means creating a variable.

Example:
let age;

Initialization means assigning a value for the first time.

Example:
age = 20;

Both can be done together:

let age = 20;
*/


// ==================================================
// Q5: What will be the output?
// ==================================================

let b;

console.log(b);

// Output:
// undefined


// ==================================================
// Q6: What is hoisting?
// ==================================================

/*
Hoisting is JavaScript's behavior of processing variable
and function declarations before executing the code.

Example:
*/

console.log(c);
var c = 10;

// Output:
// undefined


// ==================================================
// Q7: Difference between null and undefined?
// ==================================================

/*
undefined - A variable has been declared but has no value.

null - Represents an intentional absence of a value.

Example:
*/

let d;
let e = null;

console.log(d); // undefined
console.log(e); // null


// ==================================================
// Q8: What will be the output?
// ==================================================

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Output:
// object
// undefined
// object
// object


// ==================================================
// Q9: Difference between == and ===?
// ==================================================

/*
==  compares values after type conversion.
=== compares both value and data type.

Example:
*/

console.log(5 == "5");   // true
console.log(5 === "5");  // false


// ==================================================
// Q10: Difference between ++i and i++?
// ==================================================

/*
++i - Pre-increment: increases the value first and then uses it.

i++ - Post-increment: uses the value first and then increases it.
*/

let i = 5;

console.log(++i); // 6

let j = 5;

console.log(j++); // 5
console.log(j);   // 6


// ==================================================
// Q11: What will be the output?
// ==================================================

let p = 10;
let q = "5";

console.log(p + q);
console.log(p - q);
console.log(p * q);
console.log(p / q);

// Output:
// 105
// 5
// 50
// 2


// ==================================================
// Q12: What are logical operators?
// ==================================================

/*
Logical operators are used to combine or reverse conditions.

&&  - AND
||  - OR
!   - NOT

Examples:
*/

console.log(10 > 5 && 20 > 10); // true
console.log(10 > 20 || 20 > 10); // true
console.log(!(10 > 5)); // false


// ==================================================
// Q13: What will be the output?
// ==================================================

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Output:
// true
// true
// false


// ==================================================
// Q14: What is the ternary operator?
// ==================================================

/*
The ternary operator is a short way of writing if-else.

Syntax:
condition ? valueIfTrue : valueIfFalse
*/

let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult


// ==================================================
// Q15: Difference between implicit and explicit casting?
// ==================================================

/*
Implicit type casting happens automatically by JavaScript.

Explicit type casting is done manually by the programmer.

Implicit example:
*/

console.log("10" - 5); // 5

// Explicit example:

let number = Number("10");

console.log(number); // 10


// ==================================================
// Q16: What will be the output?
// ==================================================

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

// Output:
// 123
// NaN
// 1
// 0
// false
// true


// ==================================================
// Q17: What is NaN?
// ==================================================

/*
NaN means "Not a Number".

It occurs when a value cannot be converted into
a valid number.
*/

let value = Number("hello");

console.log(value);

// Output:
// NaN


// ==================================================
// Q18: Difference between if-else and switch?
// ==================================================

/*
if-else is useful for conditions, comparisons and ranges.

switch is useful when checking one value against
multiple fixed cases.

Example of if-else:
*/

let marks = 80;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Example of switch:

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}


// ==================================================
// Q19: What will be the output?
// ==================================================

let studentAge = 20;

if (studentAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Adult


// ==================================================
// Q20: What is nested if?
// ==================================================

/*
A nested if means using an if statement inside another
if statement.
*/

let userAge = 20;
let hasID = true;

if (userAge >= 18) {
    if (hasID) {
        console.log("Allowed");
    }
}

// Output:
// Allowed


// ==================================================
// Q21: Check if a number is even or odd using ternary.
// ==================================================

let num = 10;

let answer = num % 2 === 0 ? "Even" : "Odd";

console.log(answer);

// Output:
// Even


// ==================================================
// Q22: Difference between while and do-while?
// ==================================================

/*
while:
The condition is checked before executing the loop.

do-while:
The loop executes once first and then checks the condition.
*/

let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}

// Output:
// 1
// 2
// 3


// ==================================================
// Q23: What will be the output?
// ==================================================

for (let k = 1; k <= 5; k++) {
    console.log(k);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// ==================================================
// Q24: Difference between for-of and for-in?
// ==================================================

/*
for-of gives the values of an iterable.

for-in gives the keys or indexes.
*/

let numbers = [10, 20, 30];

for (let value of numbers) {
    console.log(value);
}

// Output:
// 10
// 20
// 30

for (let index in numbers) {
    console.log(index);
}

// Output:
// 0
// 1
// 2


// ==================================================
// Q25: Find the sum of numbers from 1 to 100.
// ==================================================

let sum = 0;

for (let n = 1; n <= 100; n++) {
    sum = sum + n;
}

console.log(sum);

// Output:
// 5050


// ==================================================
// Q26: Difference between slice and splice?
// ==================================================

/*
slice()  - Returns a portion of an array without changing
           the original array.

splice() - Adds, removes or replaces elements and changes
           the original array.
*/

let arr1 = [1, 2, 3, 4, 5];

console.log(arr1.slice(1, 4));

// Output:
// [2, 3, 4]

let arr2 = [1, 2, 3, 4, 5];

arr2.splice(1, 2);

console.log(arr2);

// Output:
// [1, 4, 5]


// ==================================================
// Q27: What will be the output?
// ==================================================

let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Output:
// [1, 2, 3]


// ==================================================
// Q28: Difference between function declaration and
// function expression?
// ==================================================

/*
Function Declaration:

function greet() {
    console.log("Hello");
}

Function Expression:

const greet = function() {
    console.log("Hello");
};

Function declarations are hoisted, while function expressions
are assigned to variables.
*/


// ==================================================
// Q29: What is an arrow function?
// ==================================================

/*
An arrow function is a shorter way to write a function.
*/

const add = (a, b) => a + b;

console.log(add(10, 20));

// Output:
// 30


// ==================================================
// Q30: What will be the output?
// ==================================================

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

// Output:
// Hello