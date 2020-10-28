export const getStock = (cartProduct, products) => {
    for(let i = 0 ; i < products.length; i++){
        if(products[i]._id === cartProduct.id){
            return products[i].stock;
        }
    }
}

export const getTotalCartPrice = (cart) => {
    let sum = 0
    for(let i = 0; i < cart.length; i++){
        sum += cart[i].subtotal
    }
    return sum
}

export const getTotalItemsInCart = (cart) => {
    let sum = 0
    for(let i = 0; i < cart.length; i++){
        sum += cart[i].instance
    }
    return(sum)
}
