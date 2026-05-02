// 
/**
# Dynamically generalize : Generics in TypeScript

# What are Generics?
- Generics allow creating reusable and flexible components
- Helps write code that works with multiple data types
- Improves type safety without losing flexibility
*/


type GenetricArray<T> = Array<T>;

// const friends: string[] = ["x", "y", "z"];
const friends: Array<string> = ["x", "y", "z"];
// const friends0:GenetricArray = ["x", "y", "z"];

// const rollNum: number[] = [1, 5, 4, 6, 4, 89, 6, 5];
const rollNum: Array<number> = [1, 5, 4, 6, 4, 89, 6, 5];

// const isEligibaleList: boolean[] = [true, false];

const isEligibaleList: Array<boolean> = [true, false];

// Generics array
const Gfriends: GenetricArray<string> = ["x", "y", "z"];
const GrollNum: GenetricArray<Number> = [1, 5, 4, 6, 4, 89, 6, 5];
const GisEligibaleList: GenetricArray<boolean> = [true, false];

type Coordinates = [number, number];

const coordinates: Coordinates = [20, 30];

type Coordinates1<x, y> = [x, y];

const coordinates1: Coordinates1<number, number> = [20, 30];

// for array of obj

const userList: GenetricArray<{
  name: string;
  age: number;
}> = [
  {
    name: "x",
    age: 21,
  },
  {
    name: "y",
    age: 23,
  },
];
