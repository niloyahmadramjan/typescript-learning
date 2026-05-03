/**
 * keyof Constraint with Generics
 *
 * `keyof` is used to restrict a generic key so it must exist in an object.
 *
 * Why use:
 * - Prevent invalid property access
 * - Improve type safety
 * - Ensure the key belongs to the given object
 *
 * How it works:
 * - Use `Key extends keyof T`
 *
 * Example:
 * function getValue<T, Key extends keyof T>(obj: T, key: Key) {
 *   return obj[key];
 * }
 *
 * Rule:
 * Use `keyof` when a generic depends on object property names.
 */

type RicePeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle = "bike" | "car" | "cng";
type MyVehicle1 = keyof RicePeopleVehicle;

const MyVehicle: MyVehicle1 = "car";

type User = {
    id: number,
    name: string,
    address: object
}


const user: User = {
  id: 545,
  name: "Ramjan",
  address: {
    city: "ctg",
  },
};

// const myId = user.id
const myId = user["id"]
const myName = user["name"]
const myAddress = user["address"]

console.log(myId, myName,myAddress)


const getPropertyFromObj = <X>(obj: X, key: keyof X)=>{
    return obj[key]
}


const result = getPropertyFromObj(user, "address")
console.log(result)


const product = {
    brand: "HP"
}

const result2 = getPropertyFromObj(product, "brand")
console.log(result2)