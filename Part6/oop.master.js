let car = {
  make: "toyota",
  year: 2023,
  start: function () {
    return `the ${this.make} ${this.year} is started`;
  },
};
console.log(car.start());
