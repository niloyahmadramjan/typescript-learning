/**
# Type Alias
- Used to define custom types
- Can represent primitives, unions, arrays, functions, and objects
- Flexible and widely used

# Interface
- Mainly used for defining object structures
- Supports extension (`extends`)
- Commonly used in large-scale applications
*/

type User = {
  name: string;
  age: number;
};

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role;

type IsAdmin = boolean;

const isAdmin: IsAdmin = true;

// type interface : worki with object type : array , object , function

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: IUserWithRole = {
  name: "x",
  age: 23,
  role: "admin",
};

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];

const friends1: Friends = ["a", "b", "c"];

interface IFriends {
  [index: number]: string;
}

const friends2: IFriends = ["a", "b", "c"];
