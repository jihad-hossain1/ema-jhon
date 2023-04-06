import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
    // const cart = props.cart;
    // const handleClearCart = props.handleClearCart
    // const { cart } = props.cart;
    let total = 0;
    let totalShiping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        // if (product.quantity === 0 ) {
        //     product.quantity = 1;
        // }
        total = total + product.price * product.quantity;
        totalShiping = totalShiping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7 / 100;
    const grandTotal = total + totalShiping + tax;
    return (
        <div className="py-2 bg-primary px-2 lg:px-4 rounded sticky top-0 h-96">
            <h2 className="text-center font-semibold py-3">Order Summary</h2>
            <div className='gap-2 flex flex-col'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shiping: $ {totalShiping}</p>
                <p>Tax: $ {tax.toFixed(2)}</p>
                <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
                <div className='mt-6'>
                    <button onClick={handleClearCart} className='bg-red-400 px-4 py-2 w-full rounded text-white flex justify-between items-center mb-auto'><span>Clear Cart</span> <FontAwesomeIcon className='ml-4 w-4 h-4' icon={faTrash} /></button>
                    
                </div>
                {children}
                
            </div>            
        </div>
    );
};

export default Cart;