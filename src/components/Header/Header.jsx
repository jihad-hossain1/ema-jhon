import React from 'react';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
        <>
            
        <div className="bg-neutral flex justify-between py-3 px-10 items-center">
            <img className='' src={logo} alt="" />
            <div className=" text-white">
                <a className='mr-3' href="/shop">shop</a>
                <a className='mr-3' href="/order">order</a>
                <a className='mr-3' href="/inventory">inventory</a>
                <a className='mr-3' href="/login">Login</a>

            </div>
        </div>
        </>
    );
};

export default Header;