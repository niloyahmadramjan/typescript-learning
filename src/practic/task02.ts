// Task 2: Merging User Profiles

type Person = { name: string; age: number };
type JobDetails = { role: string; salary: number };

type Employee = Person & JobDetails;

const getProfile = (employee: Employee) => {
    const name = employee.name
    const role = employee.role
    const result = `Name: ${name}, Role: ${role}`
    return result
};

const employee: Employee = {
  name: "Ramjan",
  age: 24,
  role: "developer",
  salary: 20,
};

console.log(getProfile(employee))
