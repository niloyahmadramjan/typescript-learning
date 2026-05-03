// Conditional type :

type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;

type RichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
};

type checkVehicale<T> = T extends keyof RichPeopleVehicle ? true : false;
type HasBike = checkVehicale<"test">;
