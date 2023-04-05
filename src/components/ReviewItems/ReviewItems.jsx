import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({ product }) => {
    console.log(product);
    const { name, price, shipping, img} = product;
    return (
        <div className='flex md:flex justify-between items-center border m-2 shadow rounded p-3'>
            <div className='flex '>
                <div className=''>
                    <img className='rounded w-12 ' src={img} alt="products" />
                </div>
                <div className='ml-3'>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p>Price: <span className='text-yellow-500'>${price}</span></p>
                    <p>Shiping Charge: <span className='text-yellow-500'>${ shipping}</span></p>
                </div>
            </div>
            <div>
                <span className='text-red-500 bg-red-200 p-2 rounded-xl mx-4'><FontAwesomeIcon icon={faTrash} /></span>
            </div>
        </div>
    );
};

export default ReviewItems;