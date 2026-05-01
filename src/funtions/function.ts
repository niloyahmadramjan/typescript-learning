/**
 * Funtion
 * arow funtion , normal funtion
 */

// number number and assigned for return result number
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// arrow funtion assign type and return number
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(add(2, 1));
console.log(sum(3, 5));

// object == funtion => method

const poorUser = {
  name: "Ramjan",
  balance: 0,
  addBalance(value: number): number {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(500)

// call back funtion 
const arr: number[]= [1,2,3,5]

const sqrArray = arr.map((e: number): number=> e*e)
console.log(sqrArray)