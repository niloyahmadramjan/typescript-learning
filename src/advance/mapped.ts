// mapped types

// map

const arrayOfNum: number[] = [1, 2, 5, 47, 8];

const arrayOfString: string[] = ["1", "3", "5"];

const arrayOfStringUsingMap = arrayOfNum.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

type AreaOfNumber = {
  height: number;
  width: number;
};

type height = AreaOfNumber["height"];

type AreaOfString = {
  height: string;
  width: string;
};

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{
  height: string;
  width: number;
}> = {
  height: "30",
  width: 564,
};
