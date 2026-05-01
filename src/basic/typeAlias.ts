/**
 * type ALias typescript
 */

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contractNum: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Md",
    lastName: "Ramjan",
  },
  gender: "male",
  contractNum: "0180000000",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "y",
    lastName: "x",
  },
  gender: "male",
  contractNum: "0180000000",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

type Name = string;

const myName: Name = "Ramjan";


// funtion alias

type AddFun = (num1: number, num2: number) => number;

const addFuntion: AddFun = (num1, num2) => {
  return num1 + num2;
};