function person(name, age, greet) {
  if (age <= 0) {
    throw new Error("Please Enter a valid age ");
  }
  this.age = age;
  this.name = name;
  this.greet = () => {
    return `my name is ${this.name} and my age is ${this.age}`;
  };
  return greet;
}
let muaaz = new person("muaaz", 1);
console.log(muaaz.greet());
