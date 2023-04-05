import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div className='grid md:grid-cols-[4fr,1fr] lg:grid-cols-[4fr,1fr] m-2'>
            <div>
                <h2>Order page</h2>
            </div>
            <div className='py-3 lg:py-6 bg-primary px-2 lg:px-9 rounded sticky top-0'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;