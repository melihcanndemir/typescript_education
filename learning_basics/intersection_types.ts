interface Employee {
    name: string;
    salary: number;
}

interface Department {
    departmentName: string;
}

type WorkerInfo = Employee & Department;

const firstEmployee: WorkerInfo = {
    name: "Alice",
    salary: 50000,
    departmentName: "Software Development"
};

console.log(firstEmployee.departmentName)