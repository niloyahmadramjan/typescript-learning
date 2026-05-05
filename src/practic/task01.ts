// Task 1: The "Optional" Shopping Cart

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const cardItem: CartItem = {
  name: "Ramjan",
  price: 2,
};

const calculateTotal = (data: CartItem) => {
  const { name, price, quantity = 1 } = data;
  const result = price * quantity;
  return result;
};

console.log(calculateTotal(cardItem))
