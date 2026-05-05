type DataType<T> = T extends any[] ? "Large" : "Small";

// Tests
type A = DataType<string[]>;  // "Large"
type B = DataType<number>;    // "Small"