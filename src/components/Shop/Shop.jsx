import React, { useEffect, useState } from 'react';
import Product from './Product';

const Shop = () => {
    const [products, setproducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    }, [])
    // const addToCart = (products) => {
    //     console.log(products);
    // }
    const handleAddToCart = (product) => {
        console.log(product);
    }
    return (
        <div className="grid md:grid-cols-[4fr,1fr] lg:grid-cols-[4fr,1fr] m-2">
            <div className='products-here'>
                <h2>Products comming here total: <span className="btn btn-xs">{products.length}</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            // addToCart={addToCart}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
                </div>
            </div>
            <div className='cart-products'>
                products cart Heare: 
            </div>
        </div>
    );
};

export default Shop;