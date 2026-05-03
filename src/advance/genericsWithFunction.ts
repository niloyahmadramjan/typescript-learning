// Generic Function

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithUserObj = (value: { id: number; name: string }) => {
  return [value];
};

// const arrString = createArrayWithString("apple")
// const arrNumber = createArrayWithNumber(1234565)
// const arrObj = createArrayWithUserObj({id: 144, name: "x"})

// generic funtion

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("apple");
const arrNumber = createArrayWithGeneric(1234565);
const arrObj = createArrayWithGeneric({ id: 144, name: "x" });

//tupple

const createArrayWirhTupple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayTuppleWithGenerics = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTuppleWithGenerics("Ramjan", false);
const res2 = createArrayTuppleWithGenerics(22, { name: "Ramjan" });

const addStudentToCourse = <T>(studentsInfo: T) => {
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
};

console.log(addStudentToCourse(students2))