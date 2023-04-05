import React from 'react';
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            
        <div className="bg-neutral flex justify-between py-3 px-10 items-center">
            <img className='' src={logo} alt="" />
            <div className=" text-white">
                <Link className='mr-3' to="/">Shop</Link>
                <Link className='mr-3' to="/orders">Orders</Link>
                <Link className='mr-3' to="/inventory">Inventory</Link>
                <Link className='mr-3' to="/login">Login</Link>

            </div>
        </div>
        </>
    );
};

export default Header;