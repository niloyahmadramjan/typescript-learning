/**
 * Generic Interfaces in TypeScript
 *
 * A generic interface allows you to define flexible and reusable structures
 * where the type of properties can be decided later.
 *
 * Instead of fixing a specific type, we use a type parameter (e.g. <T>)
 * to make the interface adaptable for different data types.
 *
 * Why use generic interfaces?
 * - To create reusable and scalable data structures
 * - To maintain strong type safety across different use cases
 * - To avoid rewriting similar interfaces for different types
 *
 * How it works:
 * We define a type parameter in the interface:
 *
 * interface ApiResponse<T> {
 *   data: T;
 *   success: boolean;
 * }
 *
 * Then we specify the type when using it:
 *
 * const userResponse: ApiResponse<{ name: string; age: number }> = {
 *   data: { name: "Ramjan", age: 25 },
 *   success: true,
 * };
 *
 * Real use cases:
 * - API response handling
 * - Reusable data models
 * - Lists, wrappers, or containers
 *
 * Important:
 * - The generic type is defined once but used many times
 * - It ensures the correct type is used throughout the structure
 *
 * Best practice:
 * - Use clear type names when needed (T, DataType, ResponseType)
 * - Combine with constraints if specific structure is required
 *
 * Simple rule:
 * Define the structure once, reuse it with different types safely.
 */

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
