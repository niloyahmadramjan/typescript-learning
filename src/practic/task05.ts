// Task 5: Generic Constraints


// const  logLength<T>(input: T).

const logLength = <T extends {length: number}>(input: T)=>{
   return input.length
}

console.log(logLength("hello typescript"))