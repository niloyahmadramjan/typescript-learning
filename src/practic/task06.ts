// Task 6: The Property Guard

const product = { id: 101, name: "Keyboard", price: 50 };

const getProductProp=<T, K extends keyof T>(obj: T , key:K)=>{
        return obj[key]
}

console.log(getProductProp(product, "price"))