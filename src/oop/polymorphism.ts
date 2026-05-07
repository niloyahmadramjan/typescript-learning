class Person {
  getSleep() {
    console.log("Normal person sleeps 8 hours");
  }
}

class Student extends Person {
  getSleep() {
    console.log("Student sleeps 7 hours");
  }
}

class NextLevelDev extends Person {
  getSleep() {
    console.log("NextLevelDev sleeps 3 hours");
  }
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDev();

// person1.getSleep()
// person2.getSleep()
// person3.getSleep()

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(width: number, height: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle(20);
const rectangle = new Rectangle(20, 30);

// console.log(circle.getArea())
// console.log(rectangle.getArea())
