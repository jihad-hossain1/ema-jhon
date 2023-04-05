import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems'


const Orders = () => {
    const cart = useLoaderData();
    // console.log(cart);
    return (
        <div className='grid md:grid-cols-[4fr,1fr] lg:grid-cols-[4fr,1fr] m-2'>
            <div>
                <h2>Order page- Total prodcuts: {cart.length}</h2>
                <div>
                    {
                        cart.map(product => <ReviewItems product={product}></ReviewItems> )
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