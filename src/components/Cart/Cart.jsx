import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
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
        <div className="py-3 lg:py-6 bg-primary px-2 lg:px-9 rounded sticky top-0">
            <h2 className="text-center font-semibold py-3">Order Summary</h2>
            <div className='gap-2'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shiping: $ {totalShiping}</p>
                <p>Tax: $ {tax.toFixed(2)}</p>
                <h6>Grand Total: $ {grandTotal.toFixed(2)}</h6>
            </div>            
        </div>
    );
};

export default Cart;