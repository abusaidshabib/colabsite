import React from 'react';
import logo from '../../../assets/CodeZerox-new-update.png';

const Header = () => {
    return (
        <div>
            <div className='border-b-2'>
                <div className='grid grid-cols-2 container mx-auto h-20 items-center'>
                    <div className='text-right'>
                        <img className='w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-56' src={logo} alt="" />
                    </div>
                    <div className='text-right'>
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Button
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-20'>

            </div>
        </div>
    );
};

export default Header;