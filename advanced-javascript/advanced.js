// // closures

// function close() {
//   let counter = 0;
//   return function () {
//     counter++;
//     return counter;
//   };
// }
// let mz = close();
// console.log(mz());
// console.log(mz());
// console.log(mz());

// Create a function `createCounter` that returns two methods:
// - increment() → increases the counter by 1
// - decrement() → decreases the counter by 1
// - getValue() → returns current value

function createCounter() {
  let counter = 0;
  return {
    increment: function () {
      counter++;
      return counter;
    },
    decrement: function () {
      counter--;
      return counter;
    },
    getValue: function () {
      return console.log(counter);
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.increment();
counter.increment();
counter.increment();
counter.getValue();
