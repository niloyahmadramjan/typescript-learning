// // static type

// class Counter {
//   static count: number = 0;

//   increment() {
//     return Counter.count = Counter.count + 1;
//   }
//   decrement() {
//     return Counter.count = Counter.count + 1;
//   }
// }


// const instance = new Counter()

// console.log(instance.increment())
// console.log(instance.increment())
// console.log(instance.increment())
// console.log(instance.increment())
// console.log(instance.increment())

// const instance1 = new Counter()

// console.log(instance1.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())
// console.log(instance1.increment())



// static type

class Counter {
  static count: number = 0;

  static increment() {
    return (Counter.count = Counter.count + 1);
  }
  static decrement() {
    return (Counter.count = Counter.count + 1);
  }
}


console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());


console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());
