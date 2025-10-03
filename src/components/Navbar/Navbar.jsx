import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='text-center border mt-5 text-blue-500'>
            <ul className=''>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/mobiles">Mobiles</NavLink></li>
                <li><NavLink to="/laptops">Laptops</NavLink></li>
                <li><NavLink to="/something">Something</NavLink></li>
                
            </ul>
        </div>
    );
};

export default Navbar;