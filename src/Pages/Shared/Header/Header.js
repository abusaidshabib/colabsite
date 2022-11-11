import React from 'react';
import logo from '../../../assets/CodeZerox-new-update.png';
import './Header.css';
import home from '../../../assets/menu-icons/Home.png';
import service from '../../../assets/menu-icons/Service.png';
import portfolio from '../../../assets/menu-icons/Portfolio.png';
import blog from '../../../assets/menu-icons/Blog.png';
import faq from '../../../assets/menu-icons/FAQ.png';

const Header = () => {
    return (
        <div>
            <div className='border-b-2'>
                <div className='grid grid-cols-2 container mx-auto h-20 items-center'>
                    <div className='text-right'>
                        <img className='w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-56' src={logo} alt="" />
                    </div>
                    <div className='text-right'>
                        <button className="bg-transparent 2xl:py-3 2xl:px-6 2xl:text-xl contactbtn font-semibold hover:text-white py-2 px-4 btnBorder rounded">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-20 fixed left-0'>
                <img className='w-10' src={home} alt=""/>
                <br/>
                <img className='w-10' src={service} alt=""/>
                <br/>
                <img className='w-10' src={portfolio} alt=""/>
                <br/>
                <img className='w-10' src={blog} alt=""/>
                <br/>
                <img className='w-10' src={faq} alt=""/>
                <br/>
            </div>
        </div>
    );
};

export default Header;