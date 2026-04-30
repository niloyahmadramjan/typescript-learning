// array object non-primitive data type

let bazarList: string[] = ["eggs", "milk", "sugar"];
bazarList.push("salts");

console.log(bazarList);

let mixedArr: (string | number)[] = ["eggs", 2343, "milk"];
mixedArr.push("dsjfdsf");

// ts -tuple
let coordinates: [number, number] = [20, 30];
let couple: [string, string] = ["x", "y"];

let nameAndRoll: [string, number] = ["ramjan", 3434];

nameAndRoll[0] = "sdfdf";

let destination: [string, string, number] = ["Dhaka", "chittagong", 4];

// Object type  reference type : object

// const user: {
//   organization: "Drakilo"; // literal type
//   firstName: string;
//   middleName?: string; // optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Drakilo",
//   firstName: "Ramjan",
//   middleName: "md",
//   lastName: "Ali",
//   isMarried: false,
// };


// user.organization = "Drakilo team"
// console.log(user)



const user: {
   readonly organization: string;// access modifier
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Drakilo",
  firstName: "Ramjan",
  middleName: "md",
  lastName: "Ali",
  isMarried: false,
};


// user.organization = "Drakilo team" // it can't use becouse of read-only assigned
console.log(user)