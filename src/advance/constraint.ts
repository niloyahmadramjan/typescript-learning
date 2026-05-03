/**
 * Generic Constraints in TypeScript
 *
 * Constraint means restricting a generic type to follow a specific structure.
 *
 * Why use constraints:
 * - Ensure required properties exist (e.g. length, id)
 * - Prevent invalid types
 * - Improve type safety
 *
 * How it works:
 * - Use `extends` to apply a constraint
 *
 * Example:
 * <T extends { length: number }>
 *
 * This means T must have a `length` property.
 *
 * Note:
 * - Constraint limits allowed types, it does not fix the type
 *
 * Rule:
 * Use constraints when your generic depends on specific properties.
 */


type Student = {id: number, name: string, dob: string , class: string}


const addStudentToCourse = <T extends Student>(studentsInfo: T) => {
    return {
        course: "next level",
        ...studentsInfo
    }
};

const students1 = {
  id: 124,
  name: "Ramjan", 
  hasPen: true,
};
const students2 = {
  id: 124,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
  dob: "10-10-2004",
  class: "Next level"
};

const students3 = {
    id: 22,
    name: "y",
    hasWatch: true
}

console.log(addStudentToCourse(students2))