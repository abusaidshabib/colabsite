import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-section md:text-left 2xl:pl-48 min-h-screen text-center px-16 2xl:py-28 py-20 text-white'>
            <h1 className='md:text-5xl text-4xl 2xl:text-7xl font-bold 2xl:leading-snug leading-tight mb-16'>DESIGN YOUR WEBSITE WITH <br />
                HOSTING AND USE BEST MARKETING<br />
                STRATEGY
            </h1>
            <div className='w-1/5 bg-white h-2'>
                
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 2xl:mt-10'>
                <div>
<<<<<<< HEAD
                    <p className='pr-16 mb-12 2xl:text-3xl 2xl:leading-normal'>
=======
                    <p className='md:pr-16 mb-12'>
>>>>>>> efc45ce36594b89eb6dc9bf1c0a5281615d66ee4
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
    );
};

export default Hero;