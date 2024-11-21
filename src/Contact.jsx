import React, { useState } from 'react';
import FullWidthTextField from './TextField';
import Footer from './Footer';
import IconLabelButtons from './Button';
import axios from 'axios';


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    console.log(formData);

    const [responseMessage, setResponseMessage] = useState(''); // To display backend response

    // Update form data as user types
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value );
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async () => {
        console.log("asasasasa")
        try {
            const response = await axios.post('http://13.203.74.200:8000/api/contact/submit/',
                formData,
                {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setResponseMessage('Form submitted successfully!');
            console.log(response.data.message);
            setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
        } catch (error) {
            console.error('Submission error:', error.response?.data || error.message);
            setResponseMessage('Something went wrong. Please try again.');
        }
    };


    return (
        <>
            <div id="contact" className="flex flex-col w-full text-black space-y-6 sm:space-y-8 lg:space-y-10"
                style={{
                    backgroundImage: "url('/contact-banner.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>

                {/* Header Section */}
                <div className="flex flex-col items-center justify-center text-center mt-4 text-3xl text-white">
                    <p><b>Contact Us</b></p>
                    <div className="horizontal-line-container pt-5"></div>
                    <p className="text-sm pt-5 pb-6 max-w-xs sm:max-w-lg mx-auto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, officia!
                    </p>
                </div>

                {/* Contact Info */}
                <div className="w-full mb-4"> {/* Reduced margin-bottom here */}
                    <div className="flex flex-col sm:flex-row w-11/12 max-w-screen-lg mx-auto justify-between shadow-md p-4 sm:p-8 space-y-4 sm:space-y-0 bg-white">

                        {/* Address */}
                        <div className="flex items-start space-x-4 text-left">
                            <div className="h-16 w-16 bg-gradient-to-r from-[#654A81] to-[#5b9fea] flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                                <img className="w-10 object-contain" src="/location.png" alt="Location" />
                            </div>
                            <div>
                                <h1 className="font-semibold">Address</h1>
                                <p className="text-sm">A108 Adam Street, New York</p>
                            </div>
                        </div>

                        {/* Call Us */}
                        <div className="flex items-start space-x-4 text-left">
                            <div className="h-16 w-16 bg-gradient-to-r from-[#654A81] to-[#5b9fea] flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                                <img className="w-10 object-contain" src="/call.png" alt="Call" />
                            </div>
                            <div>
                                <h1 className="font-semibold">Call Us</h1>
                                <p className="text-sm">12345678A108</p>
                            </div>
                        </div>

                        {/* Email Us */}
                        <div className="flex items-start space-x-4 text-left">
                            <div className="h-16 w-16 bg-gradient-to-r from-[#654A81] to-[#5b9fea] flex justify-center items-center rounded-full transition-transform duration-300 hover:scale-105">
                                <img className="w-10 object-contain" src="/email.png" alt="Email" />
                            </div>
                            <div>
                                <h1 className="font-semibold">Email Us</h1>
                                <p className="text-sm">info@email.com</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div className="w-full flex justify-center pb-6 sm:pb-8  "> {/* Adjusted bottom padding here */}
                    <div className="w-11/12 max-w-lg mx-auto flex flex-col space-y-4 shadow-md p-6 sm:p-8 rounded-lg bg-white ">

                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            <FullWidthTextField
                                placeholder="Name"
                                name="name"
                                height="50px"
                                value={formData.name}
                                onChange={handleChange}

                            />
                            <FullWidthTextField
                                placeholder="Email"
                                name="email"
                                height="50px"
                                value={formData.email}
                                onChange={handleChange}

                            />
                        </div>

                        <FullWidthTextField
                            placeholder="Subject"
                            name="subject"
                            height="50px"
                            value={formData.subject}
                            onChange={handleChange} />

                        <FullWidthTextField
                            placeholder="Message"
                            name="message"
                            height="130px"
                            value={formData.message}
                            onChange={handleChange} />

                        <span className='justify-center flex'>
                            <IconLabelButtons onClick={handleSubmit} />
                        </span>

                        {/* Display response message */}
                        {responseMessage && (
                            <p className="text-center text-sm text-gray-600">{responseMessage}</p>
                        )}

                    </div>
                </div>

            </div>

            <Footer />

        </>
    );
};

export default Contact;







