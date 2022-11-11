import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-section text-left px-16 py-20 text-white'>
            <h1 className='text-5xl font-bold leading-tight mb-16'>DESIGN YOUR WEBSITE WITH <br />
                HOSTING AND USE BEST MARKETING<br />
                STRATEGY
            </h1>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='pr-8'>
                        We will design your website with the best options and help to complete our full services.
                    </p>
                    <Link>
                        <button class="btn btn-blue">
                            Button
                        </button>
                    </Link>
                    <p>or</p>
                    <Link>
                        About Us
                    </Link>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Hero;