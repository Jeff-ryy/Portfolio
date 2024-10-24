import React from 'react'
import { ReactTyped } from "react-typed";
import About from './About';
import CarouselComponent from './Carouselcomponent';

// import ReactTypingEffect from 'react-typing-effect';

const Layout = () => {
    return (
        <>

            <div
                id='home'
                className="h-screen w-full flex  relative  "
            // style={{

            //     backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/background.jpg')",
            // }}
            >
                <div className=" h-screen w-full justify-center flex-col items-center flex inset-0  z-0">
                    <CarouselComponent />

                    <div className='absolute'>
                    <div className='text-white flex font-serif justify-center text-6xl font-bold'>
                        I am Justin Scott
                    </div>
                    {/* mt-[100px] */}
                    <div className='text-white font-serif mt-4 flex justify-center text-4xl'>
                        <ReactTyped
                            strings={['A Software Engineer', 'A Web Developer', 'A Tech Enthusiast']}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </div>
                    </div>




                </div>



            </div>

            <About />

        </>

    )
}

export default Layout