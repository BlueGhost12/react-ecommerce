import React from 'react'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { getTotalCartPrice } from './utils'

function CartPage() {
    const dataContext = useContext(CartContext);
    const { cart, removeFromCart } = dataContext;

    return (
        <div>
            <h1 className="text-center">
                My Cart
            </h1>
            {
                cart.length ?
                <table class="text-center table table-sm table-bordered align-items-center" style={{width: "65%", margin: "auto", marginTop: "100px" }}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(cartProduct => (
                                <tr>
                                    <th>
                                        <div className="text-center btn" onClick={() => removeFromCart(cartProduct)}> 
                                            <FaRegTrashAlt /> 
                                        </div> 
                                    </th>
                                    <td>
                                        <img src={cartProduct.picture} style={{height: "5rem", maxWidth: "10rem", backgroundSize:"cover", backgroundPosition:"center center"}} alt={cartProduct.title} />
                                    </td>
                                    <td className="align-middle text-capitalize"> {cartProduct.title} </td>
                                    <td className="align-middle"> ${cartProduct.price} </td>
                                    <td className="align-middle"> {cartProduct.instance} </td>
                                    <td className="align-middle"> ${cartProduct.subtotal} </td>
                                </tr>
                            ))
                        }
                        {
                            cart.length ? 
                            <>
                                <tr className="font-weight-bold">
                                    <td colspan="5" className="text-right">
                                        Total
                                    </td>
                                    <td colspan="1" className="text-center">
                                        ${getTotalCartPrice(cart)}
                                    </td>
                                </tr>
                                <Link to="/">
                                    <button className="btn btn-dark btn-sm text-right mt-2">Update cart</button>
                                </Link>
                            </>
                            :
                            <>
                            </>
                        }
                    </tbody>
                </table>
                :
                <>
                </>
            }
        </div>
    )
}

export default CartPage
