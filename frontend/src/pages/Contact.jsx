import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="w-full h-auto bg-[#3C4DC2] flex flex-col pb-9 mb-1 max-900:flex-col  lg:flex-row justify-evenly">

                <div className="w-full lg:w-[40vw] max-900:p-9 text-white" data-aos="fade-right">
                    <h1 className="text-4xl font-montserrat pt-8 lg:pt-32 pb-8">Get in Touch</h1>
                    <p className="text-base font-poppins">
                        We would love to hear from you! If you have any questions, comments, or suggestions, please feel free to get in touch with us using the contact info below. We will do our best to respond to your inquiry as soon as possible. Thank you for visiting our website!
                    </p>

                    <div className="flex font-poppins items-center my-8">
                        <a className="flex items-center" href="tel:+91-8791023775">
                            <img src="./src/assets/call.png" alt="call icon" className="mr-6 w-6 h-6" />
                            +91-8791023775
                        </a>
                    </div>
                    <div className="flex font-poppins items-center my-8">
                        <a className="flex items-center" href="mailto:cig@iitr.ac.in">
                            <img src="./src/assets/mail.png" alt="mail icon" className="mr-6 w-6 h-6" />
                            cig@iitr.ac.in
                        </a>
                    </div>
                    <div className="flex font-poppins items-center my-8">
                        <img src="./src/assets/loc.png" alt="location icon" className="mr-6 w-6 h-6" />
                        <p>104, SAC building IIT Roorkee, India</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/cig_iitr/">
                            <img
                                className="transition-opacity bg-white rounded-full duration-100 hover:opacity-50"
                                src="./src/assets/insta.png"
                                alt="Instagram"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/cig-iitroorkee">
                            <img
                                className="transition-opacity bg-white rounded-full duration-100 hover:opacity-50"
                                src="./src/assets/linkedin.png"
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="https://www.facebook.com/cig.iitroorkee">
                            <img
                                className="transition-opacity bg-white rounded-full duration-100 hover:opacity-50"
                                src="./src/assets/facebook.png"
                                alt="Facebook"
                            />
                        </a>
                        <a href="https://x.com/cig_iitr">
                            <img
                                className="transition-opacity bg-white rounded-full duration-100 hover:opacity-50"
                                src="./src/assets/x.png"
                                alt="X"
                            />
                        </a>
                    </div>
                </div>

                <div className="w-full lg:w-[40vw] lg:pt-32">
                    <div className="overflow-hidden max-w-full h-[400px]">
                        <div className="w-full max-900:p-9 h-full">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed/v1/place?q=CIG+IITR,+Indian+Institute+of+Technology+Roorkee,+Roorkee,+Uttarakhand,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                                title="CIG IITR Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
