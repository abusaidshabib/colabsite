import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-section grid items-center text-center md:text-left text-white py-20 px-16 md:px-24 lg:px-28 xl:px-32 2xl:pl-48 2xl:py-28 min-h-screen'>
            <div>
                <h1 className='text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold md:leading-snug lg:leading-snug 2xl:leading-snug mb-16'>DESIGN YOUR WEBSITE WITH <br />
                    HOSTING AND USE BEST MARKETING<br />
                    STRATEGY
                </h1>
                <div className='w-1/5 bg-white h-1'>

                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 2xl:mt-10'>
                    <div>
                        <p className='pr-16 mb-12 2xl:text-3xl 2xl:leading-normal'>
                            We will design your website with the best options and help to complete our full services.
                        </p>
                        <div className='flex items-center justify-center 2xl:text-xl md:justify-start 2xl:mt-20'>
                            <Link className='mr-10'>
                                <button className="portfoliobtnBg hover:bg-transparent font-semibold hover:bg-white hover:text-blue-500 2xl:py-3 2xl:px-6 py-2 px-4 rounded">
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
        </div>
    );
};

export default Hero;