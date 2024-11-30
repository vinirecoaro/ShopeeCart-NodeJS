export default async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        get subtotal(){
            return this.price*this.quantity
        } 
    }
}
