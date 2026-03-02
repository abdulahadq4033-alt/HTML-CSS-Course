// Program to print student details in JavaScript
// Define a student object
const student = {
    name: "Marcos Rafinho",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "History"]
};
const student2 = {
    name: "Maria Silva",
    age: 22,
    grade: "B",
    subjects: ["Literature", "Art", "Physical Education"]
};
// Function to print student details
function printStudentDetails(student) {
    console.log("Student Details:");
    console.log("Name: " + student.name);
    console.log("Age: " + student.age);
    console.log("Grade: " + student.grade);
    console.log("Subjects: " + student.subjects.join(", "));
}
// Call the function to print the student details
printStudentDetails(student);
printStudentDetails(student2);

// Open terminal (vs code) and run the program using the command: node student_details.js