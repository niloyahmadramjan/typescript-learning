// inharitance


class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common
  getSleep(numOfhours: number) {
    console.log(`${this.name}  ${numOfhours} hours sleep`);
  }
}

class Stundent extends Person {
  rollNumber: number;

  constructor(name: string, age: number, address: string, rollNumber: number) {
    super(name, age, address);
    this.rollNumber = rollNumber;
  }
}

const Stundent1 = new Stundent("Rakib", 18, "Bangladesh", 444);

console.log(Stundent1);

class Teacher extends Person {
  designation: string; // own property
  constructor(name: string, age: number, address: string, designation: string){
    super(name, age, address)
    this.designation = designation
  }

  // own method 
  takeClass(numOfClass: number){
    console.log(`${this.name} ${numOfClass} class daily take`)
  }

}

const teacher1 = new Teacher(
    "Mr. smart teacher",
    25,
    "Dhaka",
    "seinor teacher"
)

teacher1.takeClass(44)