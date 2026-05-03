interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface NonBrandWatch {
  heartRate: string;
  stopWatch: boolean;
}
interface Bike {
  brand: "Yamaha";
  engineCapacity: "150cc";
}

const poorDeveloper: Developer<NonBrandWatch, Bike> = {
  name: "Mr. poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "98",
    stopWatch: true,
  },
};

interface BrandWatch {
  heartRate: string;
  stopWatch: boolean;
  callSupport: boolean;
  AiFeature: boolean;
}

const richDeveloper: Developer<BrandWatch> = {
  name: "Mr. rich",
  salary: 200,
  device: {
    brand: "hp",
    model: "x30",
    releasedYear: "2016",
  },
  smartWatch: {
    heartRate: "98",
    stopWatch: true,
    callSupport: true,
    AiFeature: true,
  },
};
