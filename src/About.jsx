// import React from "react";
// import Services from "./Services";
// import LinearWithValueLabel from "./Progressbar";

// const about = () => {
//     return (
//         <>
//             <div
//                 id="about"
//                 className=" relative h-screen mt-28 flex justify-center items-center">
//                 <div className="relative bg-#e1e1e1 w-11/12 h-5/6 flex justify-center items-center shadow-[0_0_15px_5px_rgba(208,208,208)]">
//                     <div className="relative h-full w-1/2 flex flex-col items-start">
//                         <div className="flex flex-row h-2/5">
//                             <div className="items-start pl-4 pt-4 h-10 w-80 ">
//                                 <img src="/background.jpg" alt="" />
//                             </div>

//                             <div className="pt-4 pl-4">
//                                 <ul className="flex flex-col gap-3">
//                                     <li>
//                                         <b> Name:</b>
//                                         <u className="text-blue-900"> Jusitn Scott</u>
//                                     </li>
//                                     <li>
//                                         <b>Profile:</b> SoftWare Engineer
//                                     </li>
//                                     <li>
//                                         <b>Email:</b> Justin@gmail.com
//                                     </li>
//                                     <li>
//                                         <b>Phone:</b> 9898989454
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                         <div className="items-start h-3/5 w-full" >
//                             <p className="pl-4 pt-4 text-lg"><b>Skills</b></p>
//                             <div className=" pl-4 pr-1">
//                                 <p className=" pt-3 text-sm">HTML</p>
//                                 <LinearWithValueLabel value={90} />
//                                 <p className=" pt-3 text-sm">CSS</p>
//                                 <LinearWithValueLabel value={85} />
//                                 <p className=" pt-3 text-sm">JAVASCRIPT</p>
//                                 <LinearWithValueLabel value={75} />
//                                 <p className=" pt-3 text-sm">PYTHON</p>
//                                 <LinearWithValueLabel value={70} />
//                                 <p className=" pt-3 text-sm">AWS</p>
//                                 <LinearWithValueLabel value={80} />
//                             </div>
//                         </div>
//                     </div>

//                     <div className="relative h-full w-1/2 flex font-serif text-justify flex-col items-start  pl-4 pr-4 pt-4">
//                         <p className="font-bold text-3xl">About Me</p>
//                         <p className="pt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, iure! Odio optio autem, quo velit possimus alias hic consequuntur quis facere maiores aliquid sint. Vero aut pariatur sint maxime mollitia ipsum architecto veritatis itaque hic reiciendis, iusto, expedita alias doloremque.</p>
//                         <br />
//                         <p> Vel consectetur veniam corrupti beatae eos autem nulla earum ad quo placeat culpa quis sed ut commodi voluptas reiciendis cum quibusdam numquam, nisi expedita! Vitae iusto aspernatur ipsum odit, id totam beatae maiores deserunt qui, repellendus sit earum, repellat repudiandae eius voluptatum possimus accusamus ipsam neque.</p>
//                         <br />
//                         <p>Architecto sunt ipsa quidem tempora quae ut rerum dicta veniam quos. Atque, placeat blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque tempora, nostrum enim delectus alias recusandae excepturi vitae ipsum facilis voluptate!</p>
//                     </div>
//                 </div>
//             </div>
//             <Services />
//         </>
//     );
// };

// export default about;










// import React from "react";
// import Services from "./Services";
// import LinearWithValueLabel from "./Progressbar";

// const About = () => {
//     return (
//         <>
//             <div
//                 id="about"
//                 className="relative min-h-screen flex justify-center items-center px-4">
                
//                 <div className="relative bg-white w-full max-w-6xl h-full lg:h-5/6 flex flex-col lg:flex-row justify-center items-center shadow-[0_0_15px_5px_rgba(208,208,208)] p-4 lg:p-8">

//                     {/* Left Section */}
//                     <div className="w-full lg:w-1/2 flex flex-col items-start mb-8 lg:mb-0">
//                         <div className="flex flex-col lg:flex-row items-start lg:items-center w-full h-full mb-4">
//                             <div className="w-full lg:w-auto h-32 mb-4 lg:mb-0">
//                                 <img src="/background.jpg" alt="Profile background" className="h-full w-full object-cover rounded-lg" />
//                             </div>

//                             <div className="lg:pl-4">
//                                 <ul className="flex flex-col gap-2 text-sm">
//                                     <li><b>Name:</b> <u className="text-blue-900">Justin Scott</u></li>
//                                     <li><b>Profile:</b> Software Engineer</li>
//                                     <li><b>Email:</b> Justin@gmail.com</li>
//                                     <li><b>Phone:</b> 9898989454</li>
//                                 </ul>
//                             </div>
//                         </div>

//                         {/* Skills Section */}
//                         <div className="w-full">
//                             <p className="text-lg font-bold mb-3">Skills</p>
//                             <div>
//                                 <p className="text-sm mb-1">HTML</p>
//                                 <LinearWithValueLabel value={90} />
//                                 <p className="text-sm mt-3 mb-1">CSS</p>
//                                 <LinearWithValueLabel value={85} />
//                                 <p className="text-sm mt-3 mb-1">JavaScript</p>
//                                 <LinearWithValueLabel value={75} />
//                                 <p className="text-sm mt-3 mb-1">Python</p>
//                                 <LinearWithValueLabel value={70} />
//                                 <p className="text-sm mt-3 mb-1">AWS</p>
//                                 <LinearWithValueLabel value={80} />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Section (About Me Text) */}
//                     <div className="w-full lg:w-1/2 text-justify text-sm lg:text-base mt-8 lg:mt-0 lg:pl-8">
//                         <p className="font-bold text-2xl lg:text-3xl mb-4">About Me</p>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, iure! Odio optio autem, quo velit possimus alias hic consequuntur quis facere maiores aliquid sint. Vero aut pariatur sint maxime mollitia ipsum architecto veritatis itaque hic reiciendis, iusto, expedita alias doloremque.</p>
//                         <br />
//                         <p>Vel consectetur veniam corrupti beatae eos autem nulla earum ad quo placeat culpa quis sed ut commodi voluptas reiciendis cum quibusdam numquam, nisi expedita! Vitae iusto aspernatur ipsum odit, id totam beatae maiores deserunt qui, repellendus sit earum, repellat repudiandae eius voluptatum possimus accusamus ipsam neque.</p>
//                         <br />
//                         <p>Architecto sunt ipsa quidem tempora quae ut rerum dicta veniam quos. Atque, placeat blanditiis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque tempora, nostrum enim delectus alias recusandae excepturi vitae ipsum facilis voluptate!</p>
//                     </div>
//                 </div>
//             </div>
//             <Services />
//         </>
//     );
// };

// export default About;








import React from "react";
import Services from "./Services";
import LinearWithValueLabel from "./Progressbar";

const About = () => {
    return (
        <>
            <div
                id="about"
                className="min-h-screen flex justify-center items-center px-4"
            >
                <div className="relative bg-white w-full max-w-6xl h-full lg:h-5/6 flex flex-col lg:flex-row justify-center items-center shadow-[0_0_15px_5px_rgba(208,208,208)] p-4 lg:p-8 mb-8 lg:mb-12">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start mb-8 lg:mb-0">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full h-full mb-4">
                            <div className="w-full lg:w-auto h-32 mb-4 lg:mb-0">
                                <img
                                    src="/background.jpg"
                                    alt="Profile background"
                                    className="h-full w-full object-cover rounded-lg"
                                />
                            </div>

                            <div className="lg:pl-4">
                                <ul className="flex flex-col gap-2 text-sm">
                                    <li>
                                        <b>Name:</b> <u className="text-[#4883d1] ">Justin Scott</u>
                                    </li>
                                    <li>
                                        <b>Profile:</b> Software Engineer
                                    </li>
                                    <li>
                                        <b>Email:</b> Justin@gmail.com
                                    </li>
                                    <li>
                                        <b>Phone:</b> 9898989454
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="w-full">
                            <p className="text-lg font-bold mb-3">Skills</p>
                            <div>
                                <p className="text-sm mb-1">HTML</p>
                                <LinearWithValueLabel value={90} />
                                <p className="text-sm mt-3 mb-1">CSS</p>
                                <LinearWithValueLabel value={85} />
                                <p className="text-sm mt-3 mb-1">JavaScript</p>
                                <LinearWithValueLabel value={75} />
                                <p className="text-sm mt-3 mb-1">Python</p>
                                <LinearWithValueLabel value={70} />
                                <p className="text-sm mt-3 mb-1">AWS</p>
                                <LinearWithValueLabel value={80} />
                            </div>
                        </div>
                    </div>

                    {/* Right Section (About Me Text) */}
                    <div className="w-full lg:w-1/2 text-justify text-sm lg:text-base mt-8 lg:mt-0 lg:pl-8">
                        <p className="font-bold text-2xl lg:text-3xl mb-4">About Me</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                            iure! Odio optio autem, quo velit possimus alias hic consequuntur quis
                            facere maiores aliquid sint. Vero aut pariatur sint maxime mollitia ipsum
                            architecto veritatis itaque hic reiciendis, iusto, expedita alias
                            doloremque.
                        </p>
                        <br />
                        <p>
                            Vel consectetur veniam corrupti beatae eos autem nulla earum ad quo
                            placeat culpa quis sed ut commodi voluptas reiciendis cum quibusdam
                            numquam, nisi expedita! Vitae iusto aspernatur ipsum odit, id totam
                            beatae maiores deserunt qui, repellendus sit earum, repellat repudiandae
                            eius voluptatum possimus accusamus ipsam neque.
                        </p>
                        <br />
                        <p>
                            Architecto sunt ipsa quidem tempora quae ut rerum dicta veniam quos.
                            Atque, placeat blanditiis? Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Neque tempora, nostrum enim delectus alias
                            recusandae excepturi vitae ipsum facilis voluptate!
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="mt-5 lg:mt-5">
                <Services />
            </div>
        </>
    );
};

export default About;
