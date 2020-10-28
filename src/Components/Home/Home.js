import React, { useContext, useState } from 'react'
import Products from './Products'
import HomeInfoBar from './HomeInfoBar'
import SideCart from '../Cart/SideCart'
import { CartContext } from '../Context/CartContext'
import SearchBar from '../SearchBar'


function Home() {
    const dataContext = useContext(CartContext)
    const { products } = dataContext
    return (
        <div className="container-fluid m-0">
            <div className="row ml-2 mt-4">
                    <div className="col-9">
                        <div className="row mb-3" >
                            <p className="text-left col-4">Showing 1-9 of {products.length} results</p>
                            <SearchBar />
                            <HomeInfoBar />
                        </div>
                        <Products />
                    </div>
                    <div className="cart-container col-3">
                        <SideCart/> 
                    </div>
            </div>
        </div>
    )
}

export default Home
