



import React from 'react'
import Faq from './FAQ'
const Expereince = () => {
    return (
        <>
            <div 
                className="bg-gradient-to-r from-[#654A81] to-[#5b9fea] relative w-full h-96 flex justify-center items-center mt-6"
                // style={{
                //     backgroundImage: "linear-gradient(to bottom, rgba(72, 131, 209, 0), rgba(72, 131, 209, 1.8))"
                // }}
            >
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ml-4 flex flex-col sm:flex-row justify-around items-center w-full h-64 space-y-6 sm:space-y-0">
                    <div className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center text-center">
                        <b className="text-white">259</b>
                        <h4 className="text-base sm:text-lg text-gray-300"><b>Awards</b></h4>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center text-center">
                        <b className="text-white">521</b>
                        <h4 className="text-base sm:text-lg text-gray-300"><b>Clients</b></h4>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center text-center">
                        <b className="text-white">1253</b>
                        <h4 className="text-base sm:text-lg text-gray-300"><b>Projects</b></h4>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-110 flex flex-col items-center text-center">
                        <b className="text-white">1899</b>
                        <h4 className="text-base sm:text-lg text-gray-300"><b>Hours Of Support</b></h4>
                    </div>
                </div>
            </div>
            <Faq />
        </>
    )
}

export default Expereince
