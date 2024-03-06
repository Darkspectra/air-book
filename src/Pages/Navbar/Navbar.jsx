import React from 'react';
import Banner from '../Banner/Banner';

const Navbar = () => {
    return (
        <nav className="py-4 px-4 md:px-8 lg:px-16 xl:px-40 flex flex-col md:flex-row items-center justify-between">
            {/* Left side */}
            <div className="text-xl font-bold mb-4 md:mb-0 md:mr-4">
                <span className='text-orange-500'>Air</span><span className='text-blue-500'>Book</span>
            </div>

            {/* Middle portion */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 font-medium">
                <a href="#" className="hover:text-blue-300">Blog</a>
                <a href="#" className="hover:text-blue-300">Offer</a>
                <a href="#" className="hover:text-blue-300">Airlines</a>
                <a href="#" className="hover:text-blue-300">About</a>
            </div>

            {/* Right side */}
            <div className="mt-4 md:mt-0">
                <button className="bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-yellow-300">Sign In</button>
            </div>
        </nav>
    );
};



export default Navbar;
