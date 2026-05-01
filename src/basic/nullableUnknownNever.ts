// Nullable types

const getUser = (input: string) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: All User");
  }
};

getUser(null);

// unknown type

const productDisCal = (input: unknown) => {
    if ( typeof input ==='number'){
        const disPrice = input * 0.1
        console.log(disPrice)
    } else if (typeof input === "string"){
        const [disPrice] = input.split(" ")
        const result = Number(disPrice)*0.1
        console.log(result)
    }else{
        console.log("wrong input")
    }
};

productDisCal(100);
productDisCal("100 tk");
productDisCal(null);


// void

const throwError = (msg: string) : never=>{
    throw new Error(msg)
}
// throwError("error....")