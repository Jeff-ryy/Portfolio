import React from 'react';
import AccordionUsage from './Accordian';
import Contact from './Contact';

const Faq = () => {
    return (
        <>
            <div
                id="FYQ"
                className="w-full min-h-screen font-serif flex flex-col items-center justify-center mt-8 space-y-8 md:space-y-0"
            >
                <div className="flex flex-col md:flex-row w-11/12">
                    {/* Left text section */}
                    <div className="w-full md:w-1/3 text-3xl md:text-4xl text-center md:text-left pt-8 md:pl-20 md:pr-8">
                        <p>
                            Frequently <br /> Asked <br /><b>Questions ?</b>
                        </p>
                        <p className="text-base md:text-lg pt-4 px-4 md:px-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quibusdam harum consectetur, quisquam quam at ipsa accusamus impedit dolorum ab sint, quia, optio cupiditate. Corporis.
                        </p>
                    </div>

                    {/* Right accordion section */}
                    <div className="w-full md:w-2/3 pt-8 px-4 md:px-8">
                        <div className="mb-5">
                            <AccordionUsage />
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
};

export default Faq;
