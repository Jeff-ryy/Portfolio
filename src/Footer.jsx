

import React from 'react';

const Footer = () => {
    return (
        <div
            className="w-full h-48 flex flex-col justify-center items-center text-center space-y-4 mt-20 px-4 bg-gradient-to-r from-[#654A81] to-[#5b9fea]"
            // style={{
            //     backgroundImage: "linear-gradient(to bottom, rgba(72, 131, 209, 0), rgba(72, 131, 209, 1.8))",
            // }}
        >
            <span className="text-sm sm:text-base">© Copyright Portfolio All Rights Reserved</span>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
                <a
                    href="https://x.com/?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-[#4662AB] cursor-pointer transition-transform duration-300 transform hover:scale-105"
                >
                    <img src="/twitter.png" alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-[#4662AB] cursor-pointer transition-transform duration-300 transform hover:scale-105"
                >
                    <img src="/fb.png" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-[#4662AB] cursor-pointer transition-transform duration-300 transform hover:scale-105"
                >
                    <img src="/ig.png" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                    href="https://in.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-[#4662AB] cursor-pointer transition-transform duration-300 transform hover:scale-105"
                >
                    <img src="/linkden.png" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
            </div>

            <span className="text-sm sm:text-base">Designed by Justin Scott</span>
        </div>
    );
};

export default Footer;
