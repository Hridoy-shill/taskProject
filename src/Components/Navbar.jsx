import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <FaPaperPlane className='text-green-400'></FaPaperPlane> website</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    <li className=''>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                    <li>item5</li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a className="btn">Buy</a>
                <a className="btn bg-green-400 text-white font-semibold">Button</a>
            </div>
        </div>
    );
};

export default Navbar;