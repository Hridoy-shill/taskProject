import React from 'react';
import img from '../assets/8-Easy-Guitar-Songs-For-Every-Beginner (1).png'
import img2 from '../assets/WhatsApp Image 2023-06-17 at 20.24.34 (1).png'
import { FaBookOpen, FaCartPlus, FaRegClock, FaRegStar, FaRegUser, FaVideo } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mt-10 grid md:grid-cols-3 px-5'>
               
                <div className="card w-96 bg-base-100 shadow-xl border-2 border-opacity-5 mx-auto mb-11">
                    <figure><img className='p-2' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={img2} />
                                    </div>
                                </div>
                                <p className='font-semibold'>Adam John</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <p><FaRegStar className='text-orange-400'></FaRegStar></p>
                                <p className='font-semibold text-gray-400'>(4.7)</p>
                            </div>
                        </div>
                        <p className='font-semibold text-justify my-2'>The Ultimate SEO Training 2023 + SEO For Wordpress Websites</p>
                        <div className='flex justify-between'>
                            <div className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <FaBookOpen className='text-gray-400'></FaBookOpen>
                                    <p className='text-gray-400 font-semibold'>10 Lesson</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaRegClock className='text-gray-400'></FaRegClock>
                                    <p className='text-gray-400 font-semibold'>1 hr 50 min</p>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <FaRegUser className='text-gray-400'></FaRegUser>
                                    <p className='text-gray-400 font-semibold'>125 Students</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaVideo className='text-gray-400'></FaVideo>
                                    <p className='text-gray-400 font-semibold'>12 Lectures</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions justify-between items-center mt-3">
                            <div className='flex items-center space-x-3'>
                                <p className='text-xl font-semibold'>$45.00</p>
                                <p className='text-xl font-semibold text-gray-400 line-through'>$55.00</p>

                            </div>
                            <button className="bg-sky-500 text-white font-semibold px-5 py-2 rounded flex items-center"> <FaCartPlus className='me-2'></FaCartPlus> Add to Cart</button>
                        </div>
                    </div>
                </div>











                <div className="card w-96 bg-base-100 shadow-xl border-2 border-opacity-5 mx-auto mb-11">
                    <figure><img className='p-2' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={img2} />
                                    </div>
                                </div>
                                <p className='font-semibold'>Adam John</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <p><FaRegStar className='text-orange-400'></FaRegStar></p>
                                <p className='font-semibold text-gray-400'>(4.7)</p>
                            </div>
                        </div>
                        <p className='font-semibold text-justify my-2'>The Ultimate SEO Training 2023 + SEO For Wordpress Websites</p>
                        <div className='flex justify-between'>
                            <div className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <FaBookOpen className='text-gray-400'></FaBookOpen>
                                    <p className='text-gray-400 font-semibold'>10 Lesson</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaRegClock className='text-gray-400'></FaRegClock>
                                    <p className='text-gray-400 font-semibold'>1 hr 50 min</p>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <FaRegUser className='text-gray-400'></FaRegUser>
                                    <p className='text-gray-400 font-semibold'>125 Students</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaVideo className='text-gray-400'></FaVideo>
                                    <p className='text-gray-400 font-semibold'>12 Lectures</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions justify-between items-center mt-3">
                            <div className='flex items-center space-x-3'>
                                <p className='text-xl font-semibold'>$45.00</p>
                                <p className='text-xl font-semibold text-gray-400 line-through'>$55.00</p>

                            </div>
                            <button className="bg-sky-500 text-white font-semibold px-5 py-2 rounded flex items-center"> <FaCartPlus className='me-2'></FaCartPlus> Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-2 border-opacity-5 mx-auto mb-11">
                    <figure><img className='p-2' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-2'>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={img2} />
                                    </div>
                                </div>
                                <p className='font-semibold'>Adam John</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <p><FaRegStar className='text-orange-400'></FaRegStar></p>
                                <p className='font-semibold text-gray-400'>(4.7)</p>
                            </div>
                        </div>
                        <p className='font-semibold text-justify my-2'>The Ultimate SEO Training 2023 + SEO For Wordpress Websites</p>
                        <div className='flex justify-between'>
                            <div className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <FaBookOpen className='text-gray-400'></FaBookOpen>
                                    <p className='text-gray-400 font-semibold'>10 Lesson</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaRegClock className='text-gray-400'></FaRegClock>
                                    <p className='text-gray-400 font-semibold'>1 hr 50 min</p>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                <div className='flex items-center space-x-2'>
                                    <FaRegUser className='text-gray-400'></FaRegUser>
                                    <p className='text-gray-400 font-semibold'>125 Students</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <FaVideo className='text-gray-400'></FaVideo>
                                    <p className='text-gray-400 font-semibold'>12 Lectures</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions justify-between items-center mt-3">
                            <div className='flex items-center space-x-3'>
                                <p className='text-xl font-semibold'>$45.00</p>
                                <p className='text-xl font-semibold text-gray-400 line-through'>$55.00</p>

                            </div>
                            <button className="bg-sky-500 text-white font-semibold px-5 py-2 rounded flex items-center"> <FaCartPlus className='me-2'></FaCartPlus> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;