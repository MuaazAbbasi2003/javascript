// Parent class
class Shape {
  area() {
    return 0; // default area
  }
}

// Subclass Circle
class Circle extends Shape {
  constructor(radius) {
    super(); // call parent constructor
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius; // πr²
  }
}

// Subclass Rectangle
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height; // width × height
  }
}

// Example usage
let circle = new Circle(5);
console.log("Circle area:", circle.area());

let rectangle = new Rectangle(4, 6);
console.log("Rectangle area:", rectangle.area());

let shape = new Shape();
console.log("Generic shape area:", shape.area());
