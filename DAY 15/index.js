/* Constructor Function: regular functions used to create and initialise multiple
   objects with the same properties and methods.
   It must begin with a capital letter .
*/

// ways to initialise an array
// using []
const numbers = [1, 2, 3, 4];
//using constructor function(make sure to pass more than one value, otheriwise it will initialise an array of size x)
const sameNumbers = new Array(1, 2, 3, 4);
console.log(numbers);
console.log(sameNumbers);
console.log(numbers == sameNumbers);
//false, since both are different arrays at different memory location

//accessing elements in an array
// console.log(array[index]);
// for accessing every element in the array, we can use for loop

//adding elements in array
// push()- adding at the end, it returns the size of array after adding
// unshift()- adding at the start

//removing elements in array
// pop()- removing from the end, it returns the element removed
// shift()- removing from the start


//slice()- copy, immutable way

Array.isArray([1, 2, 3, 4]);
//true
Array.isArray(1);
//false

//Array Destructuring
//const [one, two, three] = [1, 2, 3];
//console.log(one)

//nested array can be accessed using array[index of nested array][index of element in nested array]

//Rest: goes with variables, left of =
const [one, ...rest] = [1, 2, 3];
console.log(rest);
//Spread: goes with array values, right of =
const someNumbers = [2, 4, 6, 8];
const someNumbersCopy = [...someNumbers];

//swap using destructuring
// let x;
// let y;
//[x, y] = [y, x];

// merge using destructuring
// const z = [...x, ...y];

//length: array.length
//array methods, immutability, grouping data
// array-like to array: using spread or from()


//Tasks
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];
const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//filter employees who work in the "Engineering" department
const engineeringDepartment = employees.filter((employee) => {
  return employee.departmentId === 2;
});
console.log(engineeringDepartment);

//Create a new array that combines employee names and department names in the format: "Alice (HR)"
const employeeDetails = employees.map((employee) => {
  const departmentNames = departments.find((department) =>
    department.id === employee.departmentId
  );
return `${employee.name} (${departmentNames.name})`;
});

console.log(employeeDetails);

//Find the highest salary among employees.
const highestSalary = employees.reduce((max, employee) => {
  return employee.salary > max ? employee.salary : max;
}, 0);

console.log(highestSalary);

//Check if there is at least one employee in the "Sales" department.
const isSalesEmployee = employees.some((employee) => {
  const department = departments.find(
    (dept) => dept.id === employee.departmentId
  );

  return department.name === "Sales";
});

console.log(isSalesEmployee);

//Calculate the total salary of all employees
const totalSalary = employees.reduce((sum, employee) => {

  return sum + employee.salary;
}, 0);

console.log(totalSalary);

//Check if all employees earn more than 4000.
const checkSalary = employees.every((employee) => {

  return employee.salary > 4000;
});
console.log(checkSalary);

//Increment each employee's salary by 10%
const incrementSalary = employees.map((employee) => {

  return employee.salary * 1.1;
});
console.log(incrementSalary);

//Find the total salary of all employees working in the "Engineering" department.
const totalSalaryEngineering = employees.reduce((sum, employee) => {
  const department = departments.find(
    (dept) => dept.id === employee.departmentId
  )
  if (department.name === "Engineering") {
    return sum + employee.salary;
  }
  return sum;

}, 0);

console.log(totalSalaryEngineering);

//Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
for (const [index, employee] of employees.entries()) {
  console.log(index, employee.name);
}
