/**
 *  Type Assertion in TypeScript
 *
 * Type assertion is a way to tell TypeScript:
 * "I know more about this value's type than you do."
 *
 * It does NOT change the actual runtime value.
 * It only helps the compiler understand the type.
 *
 *  Why use type assertion?
 * - When TypeScript cannot correctly infer the type
 * - When working with union types (e.g. string | number)
 * - When you are sure about the return type after certain logic
 * - When handling data from external sources (API, user input, etc.)
 *
 *  Syntax:
 * - value as Type   (recommended)
 * - <Type>value     (older, avoid in TSX/React)
 *
 *  Example:
 * const result1 = kgToGmConv(2) as number;
 * const result2 = kgToGmConv("2 kg") as string;
 *
 * Simple rule:
 * Use assertion when YOU are sure, not when TypeScript is unsure.
 */


let anything: any;

anything = "Ramjan";

// (anything as number)  wrong but typescript will be know it number 

const kgToGmConv = (input: string | number):  string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `converted output is : ${Number(value) * 1000}`;
  }
};

const result1 = kgToGmConv(2) as number;
console.log(result1);
const result2 = kgToGmConv("2 kg") as string;
console.log(result2);

