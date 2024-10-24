import React from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <div className="  fixed font-serif flex items-center justify-between text-white bg-black  z-50 h-20 w-full">
                <div className=" text-3xl font-bold ml-4">
                    PortFolio
                </div>
                <ul className="flex space-x-10 mr-4 h-full items-end">
                    <li className="hover:text-gray-400 cursor-pointer align-bottom"><a href='#home'>Home</a>
                    </li>
                    <li className="hover:text-gray-400 cursor-pointer"><a href="#about">About</a></li>
                    <li className="hover:text-gray-400 cursor-pointer"><a href="#services">Services</a></li>
                    <li className="hover:text-gray-400 cursor-pointer">Projects</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                </ul>
            </div>
            <Layout />

        </>
    )
}

export default Navbar