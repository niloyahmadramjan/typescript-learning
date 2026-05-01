# TypeScript Learning Journey

This repository contains my personal practice and learning notes for **TypeScript**.  
I am learning step by step from basic to advanced concepts.

---

## 📚 What I have learned so far

### 🔹 Primitive Data Types
- `string`
- `number`
- `boolean`
- `null`
- `undefined`

### 🔹 Arrays
- String arrays
- Mixed arrays (union types)

```ts
let bazarList: string[] = ["eggs", "milk", "sugar"];
let mixedArr: (string | number)[] = ["eggs", 123];
```

Tuples

Fixed structure arrays with defined types
```ts 
let coordinates: [number, number] = [20, 30];
let nameAndRoll: [string, number] = ["ramjan", 3434];
```

Objects

Working with object types, optional properties, and readonly fields

```ts
const user: {
  readonly organization: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Drakilo",
  firstName: "Ramjan",
  lastName: "Ali",
  isMarried: false,
};

```


## 🔹 Functions in TypeScript

Functions are used to define reusable logic. In TypeScript, we can clearly define parameter types and return types.

---

###  Normal Function
###  Arrow Function
### Object Method (Function inside object)
### Callback Function (Array map)



## 🔹 Rest & Spread Operator

Rest and Spread operators use the same syntax (`...`) but serve different purposes depending on where they are used.

---

###  Spread Operator (`...`)

The spread operator is used to **expand elements** from arrays or objects.

---

####  Array Spread

```ts
const numbers1: number[] = [1, 2, 3];
const numbers2: number[] = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2];

console.log(combinedNumbers); // [1,2,3,4,5,6]
```



Key Concepts Learned
Type annotations
Type inference
Union types
Tuple types
Optional properties (?)
Readonly properties
Basic array operations

Goal of this repo
Strengthen my TypeScript fundamentals
Build strong typing discipline
Prepare for real-world backend/frontend development
Improve problem-solving with type safety