import React, {  useContext } from 'react'
import { GrCart, GrClear } from 'react-icons/gr'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

function Products() {
    const dataContext = useContext(CartContext);
    const { searchValue, products, addProductToCart } = dataContext;

    return (
        <div className="row row-cols-md-3">
        {
            products.map(product => (
                product.title.indexOf(searchValue) !== -1 ?
                <div className="col mb-3 p-1 card-deck mr-2" key={product._id} style={{listStyleType: "none"}}>
                    <div className="card">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.picture} style={{height: "20rem", backgroundSize:"cover", backgroundPosition:"center center"}} className="card-img-top p-1" alt="..."/>
                        </Link>
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title text-center text-capitalize mb-auto"> {product.title} </h3>
                            <h4 className="text-danger text-center mt-3"> ${product.price} </h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            {
                                product.stock > 0 ?  
                                <button className="btn btn-light" onClick={() => addProductToCart(product)}>
                                    <span className="mr-2"><GrCart/></span>
                                    <span className="text-dark"> Add To Cart</span>
                                </button> 
                                :
                                product.stock === 0 &&
                                <button className="btn btn-danger">
                                    <span className="mr-2"><GrClear/></span>
                                    <span>Item Out Of Stock</span>
                                </button>
                            }
                            <h4> Stock: {product.stock} </h4>
                        </div>
                    </div>
                </div>
                :
                <>
                </>
            ))
        }
        </div>
    )
}

export default Products
