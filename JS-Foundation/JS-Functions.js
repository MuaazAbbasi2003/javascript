// function myName(obj) {
//   return obj();
// }

// myName(() => {
//   console.log("function inside a function");

//   function innerFunction() {
//     console.log("this is a nested function inside the callback");
//   }

//   innerFunction();
// });

// function makeTea(type) {
//   return type;
// }

// function processTeaOrder(fn) {
//   return fn("earl gray");
// }
// let ordere = processTeaOrder(makeTea);
// console.log(order);

// function createTeaMaker(name) {
//   return function (teatype) {
//     return teatype + name;
//   };
// }
// let order = createTeaMaker("saad");
// console.log(order("muaaz"));

// function stringToNumber(input) {
//   let x = Number(input);
//   if (isNaN(x)) {
//     return "Not a Number";
//   }
//   return x;
// }

// let answer = stringToNumber("12301203asdasd");
// console.log(answer);

// function flipBoolean(input) {
//   if (input === true) {
//     return false;
//   } else {
//     return true;
//   }
// }
// let answer = flipBoolean(false);
// console.log(answer);

// function whatAmI(input) {
//   let x = typeof input;
//   if (x === "number") {
//     return "i am a number";
//   }
//   if (x === "string") {
//     return "i am a string";
//   }
//   if (x === "boolean") {
//     return "i am a bool";
//   } else {
//     return "i dont know what you are ";
//   }
// }
// let answer = whatAmI();
// console.log(answer);

// function stringToNumber(input) {
//   let x = Number(input);
//   if (isNaN(x)) {
//     return "its a string ";
//   }
//   return "its a number";
// }
// let answer = stringToNumber("akaksd");
// console.log(answer);

function isItTruthy(input) {
  if (input === true) {
    return "It's truthy!";
  }
  return "It's falsey!";
}
