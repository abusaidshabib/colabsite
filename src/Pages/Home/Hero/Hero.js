import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-section md:text-left text-center px-16 py-20 text-white'>
            <h1 className='md:text-5xl text-4xl font-bold leading-tight mb-16'>DESIGN YOUR WEBSITE WITH <br />
                HOSTING AND USE BEST MARKETING<br />
                STRATEGY
            </h1>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <div>
                    <p className='md:pr-16 mb-12'>
                        We will design your website with the best options and help to complete our full services.
                    </p>
                    <div className='flex items-center justify-center md:justify-start'>
                        <Link className='mr-10'>
                            <button className=" bg-blue-500 font-semibold hover:bg-white hover:text-blue-500 py-2 px-4 rounded">
                                Portfolio
                            </button>
                        </Link>
                        <p className='mr-10'>or</p>
                        <Link>
                            About Us
                        </Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Hero;