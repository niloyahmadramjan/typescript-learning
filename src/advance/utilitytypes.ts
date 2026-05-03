// Utility t ypes

type Products = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};

// type ProductsSummary = {
//   id: number;
//   name: string;
//   price: string;
// };

type ProductsSummary = Pick<
  Products,
  "id" | "name" | "color" | "price" | "stock"
>;

type ProductsWithOutStock = Omit<Products, "stock">;

type ProductsWithColor = Required<Products>;

const product: ProductsWithColor = {
  id: 234,
  name: "mobile",
  price: 4553,
  stock: 33,
  color: "black",
};

type OptionalProducts = Partial<Products>;

type ProductReadOnly = Readonly<Products>;

const products1 = {
  id: 234,
  name: "mobile",
  price: 4553,
  stock: 33,
  color: "black",
};


const emptyObj:  object = {}

const emptyObj1: Record<string, unknown> = {} /// best way