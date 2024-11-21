// import React from 'react'
// import { ReactTyped } from "react-typed";
// import About from './About';
// import CarouselComponent from './Carouselcomponent';

// // import ReactTypingEffect from 'react-typing-effect';

// const Layout = () => {
//     return (
//         <>

//             <div
//                 id='home'
//                 className="h-screen w-full flex  relative  "
//             // style={{

//             //     backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('/background.jpg')",
//             // }}
//             >
//                 <div className=" h-screen w-full justify-center flex-col items-center flex inset-0  z-0">
//                     <CarouselComponent />

//                     <div className='absolute'>
//                         <div className='text-white flex font-serif justify-center text-6xl font-bold'>
//                             I am Justin Scott
//                         </div>
//                         {/* mt-[100px] */}
//                         <div className='text-white font-serif mt-4 flex justify-center text-4xl'>
//                             <ReactTyped
//                                 strings={['A Software Engineer', 'A Web Developer', 'A Tech Enthusiast']}
//                                 typeSpeed={50}
//                                 backSpeed={50}
//                                 loop
//                             />
//                         </div>
//                     </div>




//                 </div>



//             </div>

//             <About />

//         </>

//     )
// }

// export default Layout










// import React from 'react';
// import { ReactTyped } from 'react-typed';
// import About from './About';
// import CarouselComponent from './Carouselcomponent';

// const Layout = () => {
//     return (
//         <>
//             <div
//                 id="home"
//                 className="h-screen w-full relative flex justify-center items-center bg-cover bg-center"
//                 // style={{
//                 //     backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/background.jpg')",
//                 // }}
//             >
//                 {/* Carousel */}
//                 <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
//                     <CarouselComponent />
//                 </div>

//                 {/* Content */}
//                 <div className="absolute flex flex-col items-center text-center text-white">
//                     <h1 className="text-4xl lg:text-6xl font-bold mb-4">I am Justin Scott</h1>
//                     <div className="text-2xl lg:text-4xl font-medium">
//                         <ReactTyped
//                             strings={['A Software Engineer', 'A Web Developer', 'A Tech Enthusiast']}
//                             typeSpeed={50}
//                             backSpeed={50}
//                             loop
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* About Section */}
//             <About />
//         </>
//     );
// }

// export default Layout;




import React from 'react';
import { ReactTyped } from 'react-typed';
import About from './About';
import CarouselComponent from './Carouselcomponent';

const Layout = () => {
    return (
        <>
            <div
                id="home"
                className=" w-full min-h-screen flex justify-center items-center"
                // Add background gradient if needed
                // style={{
                //     backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/background.jpg')",
                // }}
            >
                {/* Carousel Component */}
                <div className="absolute top-1/2 transform -translate-y-1/2 w-full">
                    <CarouselComponent />
                </div>

                {/* Content Section */}
                <div className="absolute flex flex-col items-center text-center text-white px-4 md:px-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">I am Justin Scott</h1>
                    <div className="text-2xl md:text-4xl font-medium">
                        <ReactTyped
                            strings={['A Software Engineer', 'A Web Developer', 'A Tech Enthusiast']}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="mt-12 md:mt-20">
                <About />
            </div>
        </>
    );
};

export default Layout;
