import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ product,handleRemoveFromCart }) => {
    // console.log(product);
    const { name, price, shipping, img ,id} = product;
    return (
        <div className='flex md:flex justify-between items-center border m-2 shadow rounded p-3'>
            <div className='flex '>
                <div className=''>
                    <img className='rounded w-12 ' src={img} alt="products" />
                </div>
                <div className='ml-3'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className=''>Price: <span className='text-yellow-500'>${price}</span></p>
                    <p>Shiping Charge: <span className='text-yellow-500 '>${ shipping}</span></p>
                </div>
            </div>
            <div>
                <span onClick={()=>handleRemoveFromCart(id)} className='text-red-500 bg-red-200 p-2 rounded-xl mx-4 cursor-pointer'><FontAwesomeIcon icon={faTrash} /></span>
            </div>
        </div>
    );
};

export default ReviewItems;