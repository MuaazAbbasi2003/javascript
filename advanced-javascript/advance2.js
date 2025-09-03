// Write a function `greet(language)` that returns another function.
// That function should accept a name and greet in that languag

function greet(language) {
  if (language === "en") {
    return function (obj) {
      return `hello ${obj} in English`;
    };
  }
  if (language === "sp") {
    return function (obj) {
      return `hola ${obj} in Spanish`;
    };
  }
}
const greetEnglish = greet("sp");
console.log(greetEnglish("Ali"));
