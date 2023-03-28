import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.produc);
    // console.log(props.product);
    const { id, img, name, quantity, ratings, seller, stock, price } = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="m-2">
            <div className="card w-full h-full bg-base-100 shadow-xl relative">
                <figure className="rounded-lg p-2"><img className="m-2 rounded" src={img} alt="Shoes" /></figure>
                <div className="card-body my-3">
                        <h2 className="card-title"> {name}</h2>
                    <div>
                        <p><span className=''>Price:</span> $ {price}</p>
                        <p>Seller: {seller}</p>
                        <div>
                            <button>stock: <span className="btn btn-error btn-outline btn-xs">{stock}</span></button>
                        </div>
                        </div>
                    
                </div>
                   
                <button onClick={() => handleAddToCart(props.product)} className="w-full rounded-b-lg bg-primary absolute bottom-0 py-2 hover:bg-yellow-300">add to cart
                <span className='mx-2'><FontAwesomeIcon icon={faShoppingCart} /></span>
                </button>
            </div>
        </div>
    );
};

export default Product;