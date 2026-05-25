const employees = [
  { name: "Ali", department: "Engineering" },
  { name: "Sana", department: "HR" },
  { name: "Ahmed", department: "Engineering" },
];

const grouped = {};

employees.forEach((item) => {
  const key = item.department;

  if (!grouped[key]) {
    grouped[key] = [];
  }

  grouped[key].push(item);
});
console.log(grouped);

// second as per requiremnt
const employeess = [
  { name: "Ali", dept: "Engineering" },
  { name: "Sara", dept: "HR" },
  { name: "Ahmed", dept: "Engineering" },
];

const groupedby = employees.reduce((acc, employee) => {
  const dept = employee.dept;

  if (!acc[dept]) {
    acc[dept] = [];
  }

  acc[dept].push(employee);

  return acc;
}, {});

console.log(grouped);
