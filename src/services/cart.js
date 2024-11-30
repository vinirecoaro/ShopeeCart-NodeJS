export async function addItem(userCart, item) {
    userCart.push(item)
}

export async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal, 0)
    console.log("\nShopee Cart total is:")
    console.log(`Total: R$ ${result}`)
}

export async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((item) => item.name === itemName)
    if(index !== -1){
        userCart.splice(index, 1)
    }
}

export async function reduceItemAmount(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    if(indexFound == -1){
        console.log("Item não encontrado")
        return
    }
    
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
    }

    else if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
    }
}

export async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal R$ ${item.subtotal}`)
    })
}