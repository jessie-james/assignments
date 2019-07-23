
let employees = [];

function Employee(name, jobTitle, salary, status = "Full-Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function () {
        console.log(`Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
    }
    }

let person1 = new Employee("John", "CEO", "$100,000");
let person2 = new Employee("Terry", "C0O", "$220,000", "Contract");
let person3 =new Employee("Tracy", "Janator", "$10,000", "Part-Time");
// person1.printEmployeeForm();
// person2.printEmployeeForm();
// person3.printEmployeeForm();
employees.push(person1, person2, person3);

console.log(employees);
