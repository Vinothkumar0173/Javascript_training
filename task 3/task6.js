let employee = {
    name: "Vinoth Kumar",
    age: 25,
    role: "Software Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["B.E Computer Science", "JavaScript Certification"]
};

console.log("Employee Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First Skill:", employee.skills[0]);
console.log("Last Qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working Status:", employee.isWorking);