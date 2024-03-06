import React from 'react';
import img1 from "../../assets/banner.png";

const Banner = () => {
    return (

        <div className="relative bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: `url(${img1})` }}>

            <div className="p-8 text-white bg-white rounded-lg grid grid-cols-1 md:grid-cols-5 gap-4">
                <h1 className="text-4xl font-bold mb-4 text-center text-black">Welcome to <span className='text-orange-500'>AirBook</span></h1>

                <div className="flex items-center">
                    <input type="radio" id="oneWay" name="tripType" className="mr-2" />
                    <span className='text-black'>One Way</span>
                </div>

                <div className="flex items-center">
                    <input type="radio" id="roundTrip" name="tripType" className="mr-2" />
                    <span className='text-black'>Round Trip</span>
                </div>

                <div className="relative mt-4 md:mt-0">
                    <span className="block text-gray-600">Traveller</span>
                    <select className="appearance-none bg-white border border-gray-300 py-2 px-4 rounded focus:outline-none focus:border-blue-500">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>

                <div className="relative mt-4 md:mt-0">
                    <span className="block text-gray-600">Economy</span>
                    <select className="appearance-none bg-white border border-gray-300 py-2 px-4 rounded focus:outline-none focus:border-blue-500">
                        <option>1</option>
                    </select>
                </div>

                <button className="btn">Dhaka</button>
                <button className="btn">Cox's Bazar</button>
                <button className="btn">September</button>

                <button className="btn bg-blue-500 text-white px-2 py-2 rounded-full hover:bg-yellow-300">Search</button>
            </div>
        </div>
    );
};

export default Banner;
