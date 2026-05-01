// spread operator

// array spread operator
const friend = ["Rahim", "karim"];

const scholFriends = ["Ataur", "rafiq", "nayon"];

const collegeFriends = ["Mr. Joy", "Mr. Shakib"];

// friend.push(scholFriends) // ts early notic the error

friend.push(...scholFriends);
friend.push(...collegeFriends);
console.log(friend);

// object spread operator

const user = {
  name: "Ramjan",
  phone: "018000000000",
};
const otherInfo = {
  hobby: "travel",
  favoriteColor: "Black",
};

const userInfo = {
    ...user,
    ...otherInfo
}

console.log(userInfo)

