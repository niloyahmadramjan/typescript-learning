// Task 7: Constant Literal Types

const Colors = {
Primary: "RED",
Secondary: "BLUE"
} as const; // it will be readonly and literal types, not generic strings


type ValidColor =  typeof Colors[keyof typeof Colors]

const setColor = (c:ValidColor)=>{
    console.log("Color set to : ", c)
}

setColor("RED")
setColor("BLUE")
// setColor("Green") // type error
