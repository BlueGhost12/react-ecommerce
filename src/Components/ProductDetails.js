import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import SideCart from '../Components/Cart/SideCart'

function ProductDetails() {
    const dataContext = useContext(CartContext);
    const { products, addProductToCart } = dataContext;
    const { productId } = useParams();
    // let product = null
    // const product = products.find(product => product._id === productId)
    // const henlo = products[0]
    // console.log(product)
    let product = null;
    for(let i = 0; i < products.length; i++){
        if(products[i]._id === parseInt(productId)){
            console.log("hello")
            product = products[i]
            console.log(product)
            break;
        }
    }

    return (
        <div className="container-fluid m-0">
            <div className="row justify-content-center ml-2 mt-4">
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6">
                                <img src={product.picture} style={{height: "20rem", maxWidth: "32rem", backgroundSize:"cover", backgroundPosition:"center center"}} alt={product.title} />
                            </div>
                            <div className="col-6 justify-content-start">
                                <h3 className="font-weight-bold text-capitalize">
                                    {product.title}
                                </h3>
                                <div>
                                    <h5 className="text-danger"> ${product.price} </h5>
                                </div>
                                <div>
                                    <h5 className="text-muted mt-3"> {product.description.slice(0, 150)} </h5>
                                </div>
                                <div className="d-flex flex-row mt-3">
                                    <div className="border border-secondary mr-2 text-center" style={{width: "70px"}} > {product.stock} </div>
                                    <button type="button" className="btn btn-dark btn-sm" onClick={() => {addProductToCart(product)}}>Add To Cart</button>
                                </div>
                            </div>
                        </div>        
                        <div className="row d-flex justify-content-start mt-4">
                            <div className="border-bottom" style={{width: "3%"}}></div>
                            <div className="text-center col-md-auto border border-bottom-0" style={{width: "10%"}}>
                                Description
                            </div>
                            <div className="border-bottom flex-stretch" style={{width: "87%"}}></div>
                        </div>
                        <h5 className="text-muted text-start mt-3">
                            {product.description}
                        </h5>
                    </div>
                    <div className="cart-container col-3">
                        <SideCart/> 
                    </div>
            </div>
        </div>
    )
}

export default ProductDetails
