import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems'
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Orders = () => {
    const savedCart = useLoaderData();
    // console.log(cart);
    const [cart, setCart] = useState(savedCart);
    const handleRemoveFromCart = (id) => {
        const remaing = cart.filter(p => p.id !== id);
        setCart(remaing);
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Cart cart={cart} handleClearCart={handleClearCart}><Link to="/checkout"><button className='bg-stone-500 px-4 py-2 w-full rounded text-white flex justify-between items-center mb-auto'><span>Checkout</span> <FontAwesomeIcon className='ml-4 w-4 h-4' icon={faArrowRight} /></button></Link></Cart>
            </div>
        </div>
    );
};

export default Orders;