// Task 3: The "Safe" Data Fetcher

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

const getZipCode = (responseData: UserResponse): string => {
  return responseData?.info?.address?.zipCode ?? "00000";
};

const zipCode = {
  info: {
    address: {
      zipCode: "123455",
    },
  },
};

// console.log(getZipCode(zipCode));

const user = {};
console.log(user?.name ?? "Anonymous");

const user1 = {
  profile: {
    name: "Niloy",
  },
};

console.log(user1?.profile?.name ?? "No Name");

const user3 = {
  profile: {},
};

console.log(user3?.profile?.name ?? "No name");

type Data = {
  product?: {
    price?: number;
  };
};

const data: Data = {
  product: {
    price: 54,
  },
};

const getPrice = (data: Data): number=>{
    return data?.product?.price ?? 0
}

console.log(getPrice(data))


const data1 = {
  product: {
    price: 44
  }
};

console.log(data1?.product?.price ?? 0)
