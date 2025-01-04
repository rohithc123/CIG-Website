import React, { useState, useEffect } from 'react';
import Background from "../component/Background";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Home = () => {


    const [collaborations, setcollaborations] = useState([]);

    const fetchcollaborations = async () => {
        try {
            const response = await fetch('/api/admin/getcollaborations', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setcollaborations(data.photos); // Assuming the data returned has a 'patrons' array
            } else {
                console.error("Error fetching patron data");
            }
        } catch (error) {
            console.error('Error fetching patron data:', error);
        }
    };

    useEffect(() => {
        fetchcollaborations();
    }, []);


    const [FeaturedWorks, setFeaturedWorks] = useState([]);

    const fetchFeaturedWorks = async () => {
        try {
            const response = await fetch('/api/admin/getFeaturedWorks', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setFeaturedWorks(data.photos); // Assuming the data returned has a 'patrons' array
            } else {
                console.error("Error fetching patron data");
            }
        } catch (error) {
            console.error('Error fetching patron data:', error);
        }
    };

    useEffect(() => {
        fetchFeaturedWorks();
    }, []);

    const [Testimonials, setTestimonials] = useState([]);

    const fetchTestimonials = async () => {
        try {
            const response = await fetch('/api/admin/getTestimonials', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setTestimonials(data.photos); // Assuming the data returned has a 'patrons' array
            } else {
                console.error("Error fetching patron data");
            }
        } catch (error) {
            console.error('Error fetching patron data:', error);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);




    return (
        <div className=' overflow-hidden'>
            <Background />
            <div className="w-full flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]">
                <div className="aboutContent w-[90vw] flex max-900:flex-col-reverse max-900:items-center relative justify-evenly">
                    <div className="w-[50vw] max-900:w-[80vw] max-900:mt-1">
                        <div data-aos="fade-right" className="">
                            <p className="name text-5xl max-900:text-[24px] text-[#3C4DC2] my-6 max-900:my-3 font-montserrat">Bridging the gap between Corporate and Academia</p>
                            <p className="tagline text-xl max-900:text-[14px] text-[#1F1F1F] my-2 italic font-cormorant">
                                By providing a platform for academia and industry to interact. CIG proffers to
                            </p>
                            <p className="tagline text-4xl max-900:text-[14px] text-[#1F1F1F] mt-2 mb-6 mx-0 font-bold font-popins">
                                Connect | Collaborate | Innovate
                            </p>
                        </div>
                        <div className="w-72 max-900:w-52 max-900:m-auto h-12 max-900:h-9 bg-[#3C4DC2] flex items-center hover:shadow-custom
                        justify-center"><a className="font-montserrat no-underline text-[16px] max-900:text-[14px] text-white" href="https://www.linkedin.com/in/cig-iitroorkee">Let’s Connect</a></div>
                    </div>
                    <div className="flex items-center max-900:w-[80vw]">
                        <img data-aos="fade-left" src="./src/assets/home.png" alt="PC Mohanty" className="h-[500px] max-900:h-auto" />
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden flex justify-center">
                <div className="w-[90vw] flex max-900:flex-col-reverse justify-evenly">
                    <div className="flex w-[50vw] justify-start max-900:w-[80vw] max-900:my-6 items-center">
                        <img src="../src/assets/corporate.png" alt="corporate" />
                    </div>

                    <div className="flex flex-col justify-center my-16 max-900:m-0">
                        <p className="text-[#3C4DC2] font-montserrat text-4xl max-900:text-2xl my-6">
                            Benefits for Corporate
                        </p>

                        <ul className="text-[#1F1F1F] font-poppins list-disc pl-6 mb-5 text-base max-900:text-sm">
                            <li className="m-2">Access to IIT Roorkee’s World-renowned resources.</li>
                            <li className="m-2">Cost-effective & high-quality solutions.</li>
                            <li className="m-2">Identify and cultivate high-potential talent.</li>
                            <li className="m-2">
                                Leverage our extensive industry connections and partnerships.
                            </li>
                        </ul>

                        <div className="w-72 max-900:w-52 max-900:m-auto h-12 max-900:h-9 bg-[#3C4DC2] flex items-center hover:shadow-custom
                        justify-center shadow-lg my-12">
                            <a
                                href="https://channeli.in/feed"
                                className="font-montserrat no-underline text-[16px] max-900:text-[14px] text-white"
                            >
                                View Resources
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden flex justify-center">
                <div className="w-[90vw] flex max-900:flex-col justify-evenly">
                    <div className="flex flex-col justify-center my-16 max-900:m-0">
                        <p className="text-[#3C4DC2] font-montserrat text-4xl max-900:text-2xl my-6">
                            Benefits for Academia
                        </p>

                        <ul className="text-[#1F1F1F] font-poppins list-disc pl-6 mb-5 text-base max-900:text-sm">
                            <li className="m-2">
                                Collaborate with industry partners to translate your knowledge.
                            </li>
                            <li className="m-2">
                                Access funding and equipment through strategic partnerships.
                            </li>
                            <li className="m-2">
                                Create enriching learning opportunities through industry collaborations.
                            </li>
                            <li className="m-2">Illustrate the Intrinsic Value of IIT Roorkee</li>
                            <li className="m-2">
                                Enhance Faculty and Student's Participation.
                            </li>
                        </ul>

                        <div className="w-72 max-900:w-52 max-900:m-auto h-12 max-900:h-9 bg-[#3C4DC2] flex items-center hover:shadow-custom
                        justify-center shadow-lg my-12">
                            <a
                                href="https://channeli.in/feed"
                                className="font-montserrat no-underline text-[16px] max-900:text-[14px] text-white"
                            >
                                View Resources
                            </a>
                        </div>
                    </div>
                    <div className="flex w-[50vw] justify-end max-900:w-[80vw] max-900:my-6 items-center">
                        <img src="../src/assets/academic.png" alt="academic" />
                    </div>
                </div>
            </div>
            <div
                style={{
                    boxShadow: "0px 0px 15px 4px rgba(151, 151, 151, 0.5)",
                }}
                className="w-[100vw] overflow-hidden flex bg-[#3C4DC2] pb-[1%] justify-evenly"
                data-aos="zoom-in-down"
            >
                <div className="w-auto max-900:w-[436px] h-auto max-900:h-[119px] py-6 flex flex-col items-center">
                    <h1 className="text-6xl max-900:text-2xl font-montserrat text-white text-center">
                        06
                    </h1>
                    <p className="text-lg max-900:text-sm font-montserrat text-white text-center">
                        Workshops
                    </p>
                </div>

                <div className="w-auto max-900:w-[436px] h-auto max-900:h-[119px] py-6 flex flex-col items-center">
                    <h1 className="text-6xl max-900:text-2xl font-montserrat text-white text-center">
                        20+
                    </h1>
                    <p className="text-lg max-900:text-sm font-montserrat text-white text-center">
                        Lecture & Seminars
                    </p>
                </div>

                <div className="w-auto max-900:w-[436px] h-auto max-900:h-[119px] py-6 flex flex-col items-center">
                    <h1 className="text-6xl max-900:text-2xl font-montserrat text-white text-center">
                        273+
                    </h1>
                    <p className="text-lg max-900:text-sm font-montserrat text-white text-center">
                        Clients Served
                    </p>
                </div>
            </div>
            <div className="w-full overflow-hidden items-center bg-white mb-12" id="Books">
                <h1 className="text-[#1f1f1f] text-3xl max-900:text-2xl font-montserrat py-16 text-center">
                    Successful Collaborations
                </h1>
                <div className="flex max-900:w-4/5 max-900:flex-col max-900:items-center max-900:mx-auto justify-evenly my-2">
                    {collaborations.map((collaboration, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            className="w-1/5 max-900:w-4/5 max-900:my-5 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-1000 ease-in-out p-6 text-center mb-6"
                        >
                            <img
                                src={collaboration.url}
                                alt={collaboration.name}
                                className="mb-4 w-[150px] h-[150px] mx-auto"
                            />
                            <h5 className="text-lg max-900:text-sm text-[#1f1f1f] mb-4 font-montserrat">
                                {collaboration.name}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
            <div className="awards overflow-hidden bg-[#3c4dc2] py-10" id="Awards">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">
                    Featured Works
                </h1>
                <Swiper
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    speed={1000}
                    className="mySwiper w-[70vw] max-900:w-full">
                    {FeaturedWorks.map((work, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex flex-col max-900:w-[50vw] items-center justify-center font-poppins w-[420px]">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    src={work.url}
                                    alt={work.heading}
                                    className="w-[60%] max-900:w-[70%] items-center shadow-lg mb-4"
                                />
                                <h3 className="text-white text-lg text-center">{work.heading}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next" style={{ color: "black" }}></div>
                    <div className="swiper-button-prev" style={{ color: "black" }}></div>
                </Swiper>

            </div>
            <div
                className="testimonial slide-testi bg-white text-[#1F1F1F] mb-12 px-4 md:px-12"
                data-aos="fade-down"
            >
                <h1 className="text-[#1F1F1F] font-montserrat text-3xl md:text-4xl text-center py-8">
                    Testimonials
                </h1>
                <Swiper
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    speed={1000}
                    className="mySwiper work-slide w-[70vw] max-900:w-full"
                >
                    {Testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className="testi-slide bg-no-repeat bg-left bg-[url('../src/assets/comma.png')] flex flex-col items-center justify-center text-center p-6"
                        >
                            <div className="slideBar flex justify-center items-center mb-4 w-full">
                                <img
                                    src={testimonial.url}
                                    alt={testimonial.name}
                                    className="rounded-full w-[10vw] h-[23vh] max-900:w-52 max-900:h-52 object-cover"
                                />
                            </div>
                            <h2 className="font-semibold text-lg">{testimonial.name}</h2>
                            <h4 className="text-sm font-medium">{testimonial.designation}</h4>
                            <p className="text-sm text-center mt-2">{testimonial.description}</p>
                        </SwiperSlide>
                    ))}
                    <div
                        className="swiper-button-next text-black pr-8"
                        style={{ color: "black" }}
                    ></div>
                    <div
                        className="swiper-button-prev text-black pl-8"
                        style={{ color: "black" }}
                    ></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;