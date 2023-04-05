import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ReviewItems = ({ product }) => {
    console.log(product);
    return (
        <div className='md:flex justify-between items-center border m-2 shadow rounded p-3'>
            <div>
                <div>
                    <img src="" alt="products" />
                </div>
                <div>
                    <h3>Title</h3>
                    <p>Price</p>
                    <p>Shiping Charge</p>
                </div>
            </div>
            <div>
                <p className='text-red-200'><FontAwesomeIcon icon="fa-duotone fa-trash" /></p>
                <p>icon</p>
            </div>
        </div>
    );
};

export default ReviewItems;