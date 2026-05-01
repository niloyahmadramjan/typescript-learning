// rest operator

// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Send Invitation to ${friend1}`);
//   console.log(`Send Invitation to ${friend2}`);
//   console.log(`Send Invitation to ${friend3}`);

  
// };

// sendInvite("x","y","z")

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string)=> console.log(`Send Invitation to ${friend}`))
  
};

sendInvite("x","y","z","t","m")