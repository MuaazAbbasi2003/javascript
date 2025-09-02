class Vehicle {
  make;
  model;
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: [${this.make}], Model: [${this.model}]`;
  }
  move() {
    return `the car is moving`;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return `the engine has started `;
  }
  move() {
    return `muaaz is here `;
  }
}

let honda = new Car("Civic", 2021);
console.log(honda.move());
