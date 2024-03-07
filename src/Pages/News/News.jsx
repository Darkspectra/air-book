import React from 'react';
import img1 from "../../assets/letter/l.png";

const News = () => {
    return (
        <div className="flex flex-col md:flex-row gap-x-10 items-center justify-center p-4">
            <div className="mb-4 md:mb-0">
                <img src={img1} alt="" className="w-full max-w-md" />
            </div>
            <div>
                <h2 className="text-2xl md:text-4xl mb-2">Subscribe to our <br className="md:hidden" /> Newsletter!</h2>
                <h2 className="text-lg md:text-2xl"><span className='text-blue-500'>Subscribe to our newsletter and stay updated.</span></h2>
                <div className="flex flex-col md:flex-row items-center">
                    <input className="border border-blue-500 rounded-md mb-2 md:mb-0 md:mr-2" type="text" defaultValue="Your Email" />
                    <button className="btn btn-warning px-4 md:px-6">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default News;
