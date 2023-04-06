import React, { useState } from 'react';
import logo from '../images/Logo.svg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            
        <div className="bg-neutral flex justify-between py-3 px-10 items-center">
            <img className='' src={logo} alt="" />
                <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                    <span>{
                    isOpen == true ? <FontAwesomeIcon className='ml-4 w-4 h-4' icon={faXmark} /> : <FontAwesomeIcon className='ml-4 w-4 h-4' icon={faXmark} />
                    }</span>
                    <ul className={`text-white md:static bg-slate-400 rounded ${open ? 'right-3' : 'right-48'}`}>
                        <li><Link className='mr-3' to="/">Shop</Link></li>
                        <li><Link className='mr-3' to="/orders">Orders</Link></li>
                        <li><Link className='mr-3' to="/inventory">Inventory</Link></li>
                        <li><Link className='mr-3' to="/login">Login</Link></li>
                    
                    </ul>      
            </div>
        </div>
        </>
    );
};

export default Header;