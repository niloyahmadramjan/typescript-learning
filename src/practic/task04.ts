// Task 4: Type Assertion

let secretValue: unknown = "typescript is awesome";

const upperValue = (secretValue as string).toUpperCase();

console.log(upperValue);

let value: unknown = "hello typescript";

// 👉 Convert to string using as
// 👉 Store in result
// 👉 Get .length

const conStr = value as string;
console.log(conStr);

let value2: unknown = 42;

// 👉 Convert to number
// 👉 Multiply by 2

const conNum = (value2 as number) * 2;
console.log(conNum);

let data: unknown = "100";

// 👉 Treat it as string
// 👉 Convert to number
// 👉 Output: 100 + 50 = 150

// (Hint: first assert string, then Number())

console.log(Number(data as string) + 50);

let value3: unknown = "frontend";

// 👉 Convert to string
// 👉 Get first character
// 👉 Output: "f"

console.log((value3 as string).split("")[0]);

let user: unknown = {
  name: "Niloy",
  age: 22,
};

// 👉 Assert it as:

// { name: string; age: number }

user as { name: string; age: number };
console.log(user);
