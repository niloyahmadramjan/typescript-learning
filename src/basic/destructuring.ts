/**
 * Destructuring
 * object Destructuring
 * array Destructuring
 */


// object Destructuring
const user = {
  id: 212,
  name: {
    firstName: "x",
    middleName: "y",
    lastname: "z",
  },
  gender: "male",
  favoriteColor: "black",
};


// const myFavoriteColor= user.favoriteColor;
// const myLastName= user.name.lastname;

const {favoriteColor: myFav, name: {lastname: myLN}}=user;

console.log(myFav)
console.log(myLN)


const friends = ["x","y","z"]

const myBestFriend = friends[1];
console.log(myBestFriend)

// array Destructuring

// const [a, bestFriend,c] =friends;
// const [, bestFriend] = friends;
const [, , bestFriend] = friends;

console.log(bestFriend)

