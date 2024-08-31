import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png";
import { FiMenu } from 'react-icons/fi';

const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const content = (
        <div className='lg:hidden bg-transparent border-2 border-cyan-500 shadow-lg z-10 transition'>
            <ul className='text-center text-xl'>
                <li className='my-4 py-4 text-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]'>
                    <Link to="/">Home</Link>
                </li>
                <li className='my-4 py-4 text-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]'>
                    <Link to="/about">About</Link>
                </li>
                <li className='my-4 py-4 text-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className='my-4 py-4 text-cyan-500 hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_20px_cyan]'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );

    return (
        <>
            <nav className='py-2'>
                <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-4 sm:px-10 md:px-20 py-4 flex-1'>
                    <div className="flex flex-shrink-0 items-center">
                        <img className="mx-2 w-10" src={logo} alt="logo" />
                    </div>
                    <div className='hidden md:flex lg:flex-1 items-center justify-end font-normal'>
                        <ul className='flex gap-8 mr-16 text-[20px] lg:text-[25px] py-1'>
                            <li className="text-white hover:text-cyan-500  transition-colors duration-300  border-2 px-4 rounded-3xl hover:border-cyan-500">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-white hover:text-cyan-500 transition-colors duration-300 font-thin">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="text-white hover:text-cyan-500 transition-colors duration-300 font-thin">
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className="text-white hover:text-cyan-500 transition-colors duration-300 font-thin">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <button className='block md:hidden transition' onClick={handleClick}>
                        {click ? <FaTimes /> : <FiMenu size={32} />}
                    </button>
                </div>
            </nav>
            {click && <div className='md:hidden'>{content}</div>}
        </>
    )
}

export default Nav;
