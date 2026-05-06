// OOP - instance of type guard narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfHours: number){
        console.log(`${this.name} sleep everyday ${numOfHours} hours`)
  }
}


class Student extends Person {
    constructor(name: string){
        super(name)
    }

    doStudy(numOfHours: number){
        console.log(`${this.name} everyday study ${numOfHours}`)
    }
}

class Teacher extends Person {
    constructor(name: string){
        super(name)
    }
    takeClass(numOfHours: number){
        console.log(`${this.name} take the daily class ${numOfHours} hours`)
    }
}

// const person = new Person("Ramjan")
// person.getSleep(7)


// function guard

const isStudent = (user: Person)=>{
    return user instanceof Student
}


const isTeacher = (user: Person)=>{
    return user instanceof Teacher
}

const getUserInfo = (user: Person)=>{
    if(isStudent(user)){
        user.doStudy(8)
    }else if (isTeacher(user)){
        user.takeClass(5)
    }else{
        user.getSleep(7)
    }
}

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");
const person1 = new Person("Mr. Person");

getUserInfo(person1);