// function muaaz(name, height) {
//   this.name = name;
//   this.height = height;
// }
// let mz = new muaaz("muaaz", 176);
// console.log(mz);

// function tea(type) {
//   this.type = type;
//   this.discribe = () => {
//     return `this is  a ${this.type}`;
//   };
// }

// let teatype = new tea("chai");
// tea.prototype.milk = () => `funck you${2 * 2}`;

// console.log(teatype.milk());

// function Drink(name) {
//   if (!new.target) {
//     throw new error("please use new leyword befoe the object");
//   }
//   this.name = name;
// }

// let mz = new Drink("chai");
// console.log(mz);

// function muaaz(name) {
//   return name;
// }
// let mz = muaaz(() => {
//   return 2 * "3";
// });
// console.log(mz());

// function muaaz(name, age) {
//   this.age = age;
//   this.name = name;
// }
// muaaz.prototype.height = "2121";

// let mz = new muaaz("muaaz", "21", "13213");
// let mz1 = new muaaz("ameer", "21");
// console.log(mz);
