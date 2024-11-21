// import React from 'react'
// import Layout from './Layout'
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//     return (
//         <>
//             <div className="  fixed font-serif flex items-center justify-between text-white bg-black  z-50 h-20 w-full">
//                 <div className=" text-3xl font-bold ml-4">
//                     <a href="#home">PortFolio</a>
//                 </div>
//                 <ul className="flex space-x-10 mr-4 h-full items-end">
//                     <li className="hover:text-gray-400 cursor-pointer align-bottom"><a href='#home'>Home</a>
//                     </li>
//                     <li className="hover:text-gray-400 cursor-pointer"><a href="#about">About</a></li>
//                     <li className="hover:text-gray-400 cursor-pointer"><a href="#services">Services</a></li>
//                     <li className="hover:text-gray-400 cursor-pointer">Projects</li>
//                     <li className="hover:text-gray-400 cursor-pointer"><a href="#Contact">Contact</a></li>
//                 </ul>
//             </div>
//             <Layout />

//         </>
//     )
// }

// export default Navbar






import React, { useState } from 'react';
import Layout from './Layout';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-black text-white font-serif z-50">
                {/* Container for Navbar */}
                <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="text-3xl font-bold">
                        <a href="#home">Portfolio</a>
                    </div>

                    {/* Hamburger Icon (visible on small screens) */}
                    <div className="lg:hidden" onClick={toggleMenu}>
                        <button className="text-3xl focus:outline-none">
                            ☰
                        </button>
                    </div>

                    {/* Desktop Navbar Links */}
                    <ul className="hidden lg:flex space-x-10">
                        <li className="hover:text-gray-400">
                            <a href="#home">Home</a>
                        </li>
                        <li className="hover:text-gray-400">
                            <a href="#about">About</a>
                        </li>
                        <li className="hover:text-gray-400">
                            <a href="#services">Services</a>
                        </li>
                        <li className="hover:text-gray-400">
                            <a href="#FYQ">FYQ</a>
                        </li>
                        <li className="hover:text-gray-400">
                            <a href="#contact">Contact</a>
                        </li>
                        
                    </ul>

                    {/* Mobile Navbar Links (toggle menu) */}
                    {isMenuOpen && (
                        <ul className="absolute top-20 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 lg:hidden">
                            <li className="hover:text-gray-400">
                                <a href="#home" onClick={toggleMenu}>Home</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="#about" onClick={toggleMenu}>About</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="#services" onClick={toggleMenu}>Services</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="#FYQ" onClick={toggleMenu}>FYQ</a>
                            </li>
                            <li className="hover:text-gray-400">
                                <a href="#contact" onClick={toggleMenu}>Contact</a>
                            </li>
                           
                        </ul>
                    )}
                </div>
            </nav>
            
            <Layout />
        </>
    );
};

export default Navbar;
