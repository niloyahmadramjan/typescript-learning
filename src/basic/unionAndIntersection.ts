/**
 * union intersection
 */

// union
type UserRole = "admin" | "user";

const getDashboaard = (role: UserRole) => {
  if (role === "admin") {
    return "admin Dashboard";
  } else if (role === "user") {
    return "User dashbaord";
  } else {
    return "Guest dashbaord";
  }
};

getDashboaard("admin");

// intersection
type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowhuryShaheb: EmployeeManager = {
  id: "12323",
  name: "Chowdhury Shaheb",
  phoneNo: "018000",
  designation: "manager",
  teamSize: 5,
};
