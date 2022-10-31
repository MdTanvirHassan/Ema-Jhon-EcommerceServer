import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt=""  />
           <nav>
                <a href='/logo'>Shop</a>
                <a href='/review'>Order review</a>
                <a href='/manage'>Manage Inventory</a>
                <input id='search' type="text" placeholder='Search' />
                <button className='srcBtn'>Search</button>
           </nav>
        </div>
    );
};

export default Header;