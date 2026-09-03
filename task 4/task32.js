let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Naveen",
        age: 26,
        department: "IT",
        role: "Software Engineer",
        salary: 45000
    }
];


console.log("EMPLOYEE DETAILS");

for (let employee of employees) {
    console.log(employee);
}


console.log("\nKEYS AND VALUES");

for (let employee of employees) {
    for (let key in employee) {
        console.log(key, employee[key]);
    }
    console.log("----------------");
}


function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


console.log("\nEMPLOYEE INFORMATION");

for (let employee of employees) {
    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

    console.log("----------------");
}


function getSalary(employee) {
    return employee.salary;
}

console.log("\nSALARY DETAILS");

for (let employee of employees) {
    let salary = getSalary(employee);

    console.log(employee.name + " Salary:", salary);

   
    if (salary >= 40000) {
        console.log("Salary is 40000 or above");
    } else {
        console.log("Salary is below 40000");
    }
}


let annualSalary = (salary) => {
    return salary * 12;
};

console.log("\nANNUAL SALARY");

for (let employee of employees) {
    console.log(
        employee.name + ":",
        annualSalary(employee.salary)
    );
}


function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("\nEMPLOYEE BENEFITS");

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}