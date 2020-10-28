import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { GrFormAdd, GrFormSubtract, GrFormTrash } from "react-icons/gr";
import { getStock, getTotalCartPrice, getTotalItemsInCart } from '../utils'
import { Link } from 'react-router-dom';

function SideCart() {
    const dataContext = useContext(CartContext);
    const { products, cart, removeFromCart, updateItemInCart } = dataContext;
    return (
        <>
            {
                getTotalItemsInCart(cart) ?
                <h4 className="d-flex justify-content-around">
                    <div className="flex-fill text-left">Items in Cart</div>
                    <div className="badge badge-secondary badge-pill text-right" >
                        {
                            getTotalItemsInCart(cart)
                        } 
                    </div>
                </h4>
                :
                <h4 className="d-flex justify-content-around">
                    <span>Your cart is empty!</span>
                </h4>
            }
            <ul className="list-group">
                {
                    cart.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                        <span>
                            <img src={item.picture} style={{height: "5rem", backgroundSize:"cover", backgroundPosition:"center center"}} alt={item.title} />   
                        </span>
                        <div className="ml-2">
                            <h6 className="my-0 text-capitalize">
                                {item.title}
                            </h6>
                            <div>
                                <div className="d-flex row mb-2">
                                    { 
                                        getStock(item, products) > 0 ?
                                        <div className="flex-fill text-center btn" onClick={() => updateItemInCart(item, 1)}> <GrFormAdd /> </div>
                                        :
                                        <div className="flex-fill text-center btn" disabled> <GrFormAdd /> </div>
                                    }
                                    {
                                        item.instance > 0?
                                        <div className="flex-fill text-center btn" onClick={() => updateItemInCart(item, -1)}> <GrFormSubtract/> </div>
                                        :
                                        removeFromCart(item)
                                    }
                                    <div className="flex-fill text-center btn" onClick={() => removeFromCart(item)}> <GrFormTrash/> </div>
                                </div>
                                <h6 className="text-muted text-center">
                                    <small>
                                        {item.instance} x ${item.price} = ${item.subtotal.toFixed(2)} 
                                    </small>
                                </h6>
                            </div>
                        </div>
                    </li>
                    ))
                }
                {
                    getTotalItemsInCart(cart) ?
                    <>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>
                                $
                                {
                                    getTotalCartPrice(cart).toFixed(2)
                                }
                            </strong>
                        </li>
                        <div className="d-flex flex-row mt-2">
                            <Link to="/cart">
                                <button className="btn btn-dark btn-sm mr-2">View cart</button>
                            </Link>
                            <Link>
                                <button className="btn btn-dark btn-sm ml-2" >Checkout</button>
                            </Link>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
            </ul>
        </>
    )
}

export default SideCart
