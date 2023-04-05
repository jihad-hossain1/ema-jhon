import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems'
import { removeFromDb } from '../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData();
    // console.log(cart);
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
        const remaing = cart.filter(p => p.id !== id);
        setCart(remaing);
        removeFromDb(id)
    }
    return (
        <div className='grid md:grid-cols-[4fr,1fr] lg:grid-cols-[4fr,1fr] m-2'>
            <div>
                <h2>Order page- Total prodcuts: {savedCart.length}</h2>
                <div className='md:mx-20 lg:mx-72'>
                    {
                        cart.map(product => <ReviewItems product={product} key={product.id} handleRemoveFromCart={handleRemoveFromCart}></ReviewItems> )
                    }
                </div>
            </div>
            <div className='py-3 lg:py-6 bg-primary px-2 lg:px-9 rounded sticky top-0'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;