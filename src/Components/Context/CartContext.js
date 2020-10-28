import React, { useState, useEffect } from 'react'
import data from '../../db.json'

export const CartContext = React.createContext()


const CartProvider = (props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState('LTH')
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        const fetchProducts = () => {
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const addProductStock = (commodity, amount, typeOfCommodity) => {
        if(typeOfCommodity === "product"){
            let productsInstance = [...products]
            productsInstance.forEach(item => {
                if(item === commodity){
                    item.stock += amount
                }
            })
            setProducts(productsInstance)
        }else if(typeOfCommodity === "cart"){
            let productsInstance = [...products]
            productsInstance.forEach(productInstance => {
            if(productInstance._id === commodity.id){
                productInstance.stock += amount
            }
        })
        setProducts(productsInstance)
        }
    }

    const updateItemInCart = (cartProduct, amount) => {
        // Adding products to cart
        let cartInstance = [...cart]
        cartInstance.forEach(cartProductInstance => {
            if(cartProductInstance.id === cartProduct.id){
                cartProductInstance.instance += amount 
                cartProductInstance.subtotal = cartProductInstance.price * cartProductInstance.instance
            }
        })
        setCart(cartInstance)
        // Adding stock to products
        addProductStock(cartProduct, -amount, "cart")
    }

    const removeFromCart = (cartProduct) => {
        // removing from cart
        const cartInstance = [...cart]
        const indexOfProductInCart = cartInstance.indexOf(cartProduct)
        const newCartInstance = [...cartInstance.slice(0, indexOfProductInCart), ...cartInstance.slice(indexOfProductInCart + 1)]  
        setCart(newCartInstance)
        // Adding stock to products
        addProductStock(cartProduct, cartProduct.instance, "cart")
    }

    const addProductToCart = (product) => {
        if(cart.find(item => item.id === product._id)){
            let cartInstance = [...cart]
            cartInstance.forEach(item => {
                if(item.id === product._id){
                    item.instance++
                    item.subtotal = item.price * item.instance
                }
            })
            setCart(cartInstance)
        }else{
            const newProduct = {
                id: product._id,
                title: product.title,
                instance: 1,
                picture: product.picture,
                price: product.price,
                subtotal: product.price
            }
            setCart(old => [...old, newProduct])
        }
        addProductStock(product, -1, "product")
    }

    const dataContext = {
        setProducts,
        setCart,
        addProductToCart,
        removeFromCart,
        updateItemInCart,
        setOrder,
        setSearchValue,
        searchValue,
        order,
        products,
        cart
    }
    return(
        <CartContext.Provider value={dataContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider