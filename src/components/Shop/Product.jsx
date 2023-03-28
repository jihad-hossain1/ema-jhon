import React from 'react';

const Product = (props) => {
    // console.log(props.produc);
    // console.log(props.product);
    const { id, img, name, quantity, ratings, seller, stock, price } = props.product;

    const handleAddToCart = props.handleAddToCart;
    return (
        <div className="m-2">
            <div className="card w-full h-full bg-base-100 shadow-xl relative">
                <figure><img className="m-2 rounded" src={img} alt="Shoes" /></figure>
                <div className="card-body my-3">
                        <h2 className="card-title"> {name}</h2>
                        <p><span className=''>Price:</span> $ {price}</p>
                        <p>Seller: {seller}</p>
                        <div>
                            <button className="btn btn-error btn-outline btn-xs">Qty: {quantity}</button>
                        </div>
                    
                </div>
                   
                <button onClick={() => handleAddToCart(props.product)} className="w-full rounded-b-lg bg-primary absolute bottom-0 py-2">add to cart</button>
            </div>
        </div>
    );
};

export default Product;