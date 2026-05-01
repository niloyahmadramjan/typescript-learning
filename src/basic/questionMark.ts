/**
 * ?:  ternary operator → decision making
 * ??  nullish coalescing → fallback for null/undefined
 * ?.  optional chaining → safe property access
 */

//  ternary operator → decision making

const forVoteEligible = (age: number) => {
  const result =
    age >= 18 ? "You are eligible for vote" : "your are not eligible for vote";

  console.log(result);
};

forVoteEligible(14);

//  nullish coalescing → fallback for null/undefined

// const userTheme = '';  // not work
// const userTheme = null; // will work
const userTheme = undefined; // will work

const selectedTheme = userTheme ?? "light";

console.log(selectedTheme);

// const isAuthenticated = ""
const isAuthenticated = null;
const resultWithTernary = isAuthenticated
  ? isAuthenticated
  : "your are guest !";
const resultWithNullish = isAuthenticated ?? "your are guest !";

console.log({ resultWithTernary }, { resultWithNullish });

// optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "banani",
  },
};

const postalCode = user?.address?.postalCode;

console.log(postalCode);
