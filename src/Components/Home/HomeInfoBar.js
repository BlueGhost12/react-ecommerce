import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'

function HomeInfoBar() {
    const dataContext = useContext(CartContext)
    const { products, order, setOrder } = dataContext
    
    if(order === "LTH"){
        products.sort((a, b) => {
            return a.price - b.price;
        })
    }
    else if(order === "HTL"){
        products.sort((b, a) => {
            return a.price - b.price;
        })
    }

    return (
        <>
            <div className="dropdown col-4 text-center">
                <button className="btn btn-outline-dark btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Default Sorting
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                    <button className={order === 'HTL' ? "dropdown-item active" : "dropdown-item"} type="button" onClick={() => setOrder('HTL')} >Sort by price high to low</button>
                    <div className="dropdown-divider"></div>
                    <button className={order === 'LTH' ? "dropdown-item active" : "dropdown-item"} type="button" onClick={() => setOrder('LTH')} >Sort by price low to high</button>
                </div>
            </div>
        </>
    )
}

export default HomeInfoBar
