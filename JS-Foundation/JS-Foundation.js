// let i = 5;
// let count = [];
// while (i >= 1) {
//   count.push(i);
//   i--;
//   console.log(count);
// }

let teaCollection = [];
let tea = "";
do {
  tea = prompt(`enter your favorite tea type (Enter"stop to stop the loop")`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
