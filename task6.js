// ==================================================
// Task 1 — Student Result Analyzer
// ==================================================

function analyzeResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;

    let result;
    let grade;

    if (average >= 90) {
        grade = "A";
        result = "Pass";
    } else if (average >= 75) {
        grade = "B";
        result = "Pass";
    } else if (average >= 60) {
        grade = "C";
        result = "Pass";
    } else if (average >= 50) {
        grade = "D";
        result = "Pass";
    } else {
        grade = "Fail";
        result = "Fail";
    }

    console.log("Student Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}

analyzeResult("Arun", "Computer Science", 85, 90, 78, 88, 92);


// ==================================================
// Task 2 — Employee Salary Calculator
// ==================================================

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 0.15;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 0.10;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Employee Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


// ==================================================
// Task 3 — Product Filter System
// ==================================================

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// 1. Products above ₹2,000

let above2000 = products.filter(product => product.price > 2000);

console.log("Products above ₹2,000:");
console.log(above2000);


// 2. Only electronics

let electronics = products.filter(product => product.category === "electronics");

console.log("Electronics:");
console.log(electronics);


// 3. First product below ₹1,000

let below1000 = products.find(product => product.price < 1000);

console.log("First product below ₹1,000:");
console.log(below1000);


// 4. Total price of all products

let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);


// 5. Any product above ₹50,000

let expensiveProduct = products.some(product => product.price > 50000);

console.log("Any product above ₹50,000:", expensiveProduct);


// 6. Every product above ₹500

let allAbove500 = products.every(product => product.price > 500);

console.log("Every product above ₹500:", allAbove500);


// ==================================================
// Task 4 — Employee Management
// ==================================================

let employees = [
    { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
    { id: 102, name: "Arun", role: "Backend Developer", salary: 50000 },
    { id: 103, name: "Priya", role: "UI Designer", salary: 45000 },
    { id: 104, name: "Dinesh", role: "Full Stack Developer", salary: 65000 },
    { id: 105, name: "Meena", role: "HR Manager", salary: 55000 },
    { id: 106, name: "Ravi", role: "Software Engineer", salary: 70000 }
];


// 1. Display all employee names

let employeeNames = employees.map(employee => employee.name);

console.log("Employee Names:");
console.log(employeeNames);


// 2. Employees earning above ₹40,000

let highEarners = employees.filter(employee => employee.salary > 40000);

console.log("Employees earning above ₹40,000:");
console.log(highEarners);


// 3. Find employee with ID 103

let employee103 = employees.find(employee => employee.id === 103);

console.log("Employee with ID 103:");
console.log(employee103);


// 4. Calculate total salary

let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);


// 5. Find highest-paid employee

let highestPaid = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});

console.log("Highest Paid Employee:");
console.log(highestPaid);


// 6. Sort employees from highest salary to lowest

let sortedEmployees = [...employees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log("Employees sorted by salary:");
console.log(sortedEmployees);


// 7. Create array containing only employee names

let namesOnly = employees.map(employee => employee.name);

console.log("Names Only:");
console.log(namesOnly);


// ==================================================
// Task 5 — Shopping Cart
// ==================================================

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    let discount = 0;

    if (total > 50000) {
        discount = total * 0.10;
    }

    let finalAmount = total - discount;

    console.log("Total Cart Value:", total);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);


// ==================================================
// Task 6 — Student Search System
// ==================================================

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];


// 1. Display all student names

let studentNames = students.map(student => student.name);

console.log("Student Names:");
console.log(studentNames);


// 2. Students who scored above 80

let above80 = students.filter(student => student.mark > 80);

console.log("Students above 80:");
console.log(above80);


// 3. Find student named Priya

let priya = students.find(student => student.name === "Priya");

console.log("Student named Priya:");
console.log(priya);


// 4. Calculate average mark

let totalMarks = students.reduce((total, student) => {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark);


// 5. Check whether anyone failed

let anyoneFailed = students.some(student => student.mark < 50);

console.log("Anyone Failed:", anyoneFailed);


// 6. Check whether everyone scored above 40

let everyoneAbove40 = students.every(student => student.mark > 40);

console.log("Everyone scored above 40:", everyoneAbove40);


// 7. Sort students by marks

let sortedStudents = [...students].sort((a, b) => {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:");
console.log(sortedStudents);


// ==================================================
// Task 7 — Array Transformation Challenge
// ==================================================

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// 1. Numbers multiplied by 2

let doubledNumbers = numbers.map(number => number * 2);

console.log("Numbers × 2:");
console.log(doubledNumbers);


// 2. Even numbers

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even Numbers:");
console.log(evenNumbers);


// 3. Numbers greater than 15

let greaterThan15 = numbers.filter(number => number > 15);

console.log("Numbers greater than 15:");
console.log(greaterThan15);


// 4. First number greater than 20

let firstGreater20 = numbers.find(number => number > 20);

console.log("First number greater than 20:");
console.log(firstGreater20);


// 5. Total of all numbers

let numberTotal = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log("Total:", numberTotal);


// 6. Check whether any number is greater than 40

let anyGreater40 = numbers.some(number => number > 40);

console.log("Any number greater than 40:", anyGreater40);


// 7. Check whether every number is positive

let allPositive = numbers.every(number => number > 0);

console.log("Every number is positive:", allPositive);


// 8. Sort from highest to lowest

let descendingNumbers = [...numbers].sort((a, b) => b - a);

console.log("Highest to Lowest:");
console.log(descendingNumbers);


// ==================================================
// Task 8 — String Analyzer
// ==================================================

let sentence = "JavaScript is very powerful";

console.log("Original Sentence:", sentence);


// Total characters

console.log("Total Characters:", sentence.length);


// Uppercase sentence

console.log("Uppercase:", sentence.toUpperCase());


// Lowercase sentence

console.log("Lowercase:", sentence.toLowerCase());


// Check whether it contains JavaScript

console.log("Contains JavaScript:", sentence.includes("JavaScript"));


// First character

console.log("First Character:", sentence.slice(0, 1));


// Last character

console.log("Last Character:", sentence.slice(-1));


// Number of words

let words = sentence.trim().split(" ");

console.log("Number of Words:", words.length);


// Replace JavaScript with Python

let replacedSentence = sentence.replace("JavaScript", "Python");

console.log("Replaced Sentence:", replacedSentence);


// Convert sentence into an array

console.log("Sentence Array:", sentence.split(" "));


// ==================================================
// FINAL MINI PROJECT — Employee Dashboard
// ==================================================

let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// ==================================================
// 1. Employee List
// ==================================================

console.log("All Employees:");
console.log(dashboardEmployees);


// ==================================================
// 2. Search Employee by Name
// ==================================================

let searchName = "Priya";

let searchedEmployee = dashboardEmployees.find(employee => {
    return employee.name === searchName;
});

console.log("Search Result:");
console.log(searchedEmployee);


// ==================================================
// 3. Department Filter
// ==================================================

let department = "IT";

let departmentEmployees = dashboardEmployees.filter(employee => {
    return employee.department === department;
});

console.log("IT Employees:");
console.log(departmentEmployees);


// ==================================================
// 4. Salary Filter
// ==================================================

let salaryEmployees = dashboardEmployees.filter(employee => {
    return employee.salary > 50000;
});

console.log("Employees earning more than ₹50,000:");
console.log(salaryEmployees);


// ==================================================
// 5. Calculate Total Company Salary
// ==================================================

let companySalary = dashboardEmployees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", companySalary);


// ==================================================
// 6. Find Highest Salary
// ==================================================

let highestSalaryEmployee = dashboardEmployees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});

console.log("Highest Paid Employee:");
console.log(highestSalaryEmployee);


// ==================================================
// 7. Employees with more than 3 years experience
// ==================================================

let experiencedEmployees = dashboardEmployees.filter(employee => {
    return employee.experience > 3;
});

console.log("Employees with more than 3 years experience:");
console.log(experiencedEmployees);


// ==================================================
// 8. Sorting — Low to High
// ==================================================

let salaryLowToHigh = [...dashboardEmployees].sort((a, b) => {
    return a.salary - b.salary;
});

console.log("Salary Low to High:");
console.log(salaryLowToHigh);


// ==================================================
// 8. Sorting — High to Low
// ==================================================

let salaryHighToLow = [...dashboardEmployees].sort((a, b) => {
    return b.salary - a.salary;
});

console.log("Salary High to Low:");
console.log(salaryHighToLow);


// ==================================================
// 9. Statistics
// ==================================================

let totalEmployees = dashboardEmployees.length;

let totalCompanySalary = dashboardEmployees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

let highestSalary = Math.max(
    ...dashboardEmployees.map(employee => employee.salary)
);

let averageSalary = totalCompanySalary / totalEmployees;

console.log("====================================");
console.log("EMPLOYEE DASHBOARD STATISTICS");
console.log("====================================");

console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalCompanySalary);
console.log("Highest Salary: ₹" + highestSalary);
console.log("Average Salary: ₹" + Math.round(averageSalary));