// Task 17 - Mini Student Profile

// Variables
let name = "Vinoth";
let age = 22;
let city = "Chennai";
let college = "123 College";

// Array
let subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "SQL"
];

// Object
let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

// Printing student details
console.log("Student Name:", student.name);

console.log("Student Age:", student.age);

console.log("City:", student.city);

console.log("First Subject:", student.subjects[0]);

console.log("Last Subject:", student.subjects[student.subjects.length - 1]);

console.log("Total Subjects:", student.subjects.length);

console.log("Complete Object:", student);