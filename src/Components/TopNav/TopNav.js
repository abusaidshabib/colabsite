import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo-svg.svg';
import './TopNav.css'

const TopNav = () => {
    return (
        <div className='top-nav'>
            <div className='top-nav-logo'>
                <img alt='Codezerox' src={logo}/>
            </div>
            <div className='nav-contact'>
                <Link>Contact Us</Link>
            </div>
        </div>
    );
};

export default TopNav;