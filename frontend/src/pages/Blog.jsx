import React, { useState, useEffect } from 'react';
import Background from "../component/Background";

const Blog = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);
  
    const [BlogData, setBlogData] = useState([]);

    // Fetch teamMembers data from MongoDB (via backend API)
    const fetchBlogData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/admin/getBlog', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setBlogData(data.photos); // Assuming the data returned has a 'patrons' array
            } else {
                console.error("Error fetching patron data");
            }
        } catch (error) {
            console.error('Error fetching patron data:', error);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    const closePopup = () => setSelectedPerson(null);

    const ResearchCard = ({ image, name, title, onClick }) => {
        return (
            // <div
            //     className="shadow-md w-auto  p-4 mb-10 transition-transform transform hover:scale-105"
            //     data-aos="fade-up"
            // >
            //     <img src={image} alt={name} className="mb-4 w-72 h-auto" />
            //     <div className="flex justify-between items-center">
            //         <div>
            //             <h5 className="text-lg font-montserrat text-[#1f1f1f] mb-4">{name}</h5>
            //             <p className="text-[16px] font-poppins text-[#1f1f1f]">{title}</p>
            //         </div>
            //         <button onClick={onClick} className="">
            //             <img src="../src/assets/send.png" alt="Details" className="rounded-full h-9" />
            //         </button>
            //     </div>
            // </div>


            <div

            className="flex flex-col font-poppins gap-8 bg-white p-4 shadow-md rounded-lg"
        >
            <img src={image} alt={title}
                className="rounded-xl w-auto h-[250px]"
            />
            <div className="flex flex-col justify-center">
                <div className="font-medium text-2xl">{title}</div>
                <div className="text-[#183059] font-medium text-base">{name}</div>
                <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                <button onClick={onClick}  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Details
                </button>
            </div>

        </div>
        );
    };

    const Popup = ({ isVisible, onClose, name, image, description }) => {
        return isVisible ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white w-auto max-900:w-[90vw] p-7 rounded shadow-lg relative">
                    <h1 className="text-2xl right-[120px] mr-[99px] font-montserrat text-[#3C4DC2] top-4 pb-8 max-900:pb-4 max-900:mr-[15px]">
                        {name}
                    </h1>
                    <div
                        onClick={onClose}
                        className="w-[100px] max-900:w-[55px] h-[36px] max-900:h-[30px] absolute top-7 right-4 max-900:top-7 max-900:right-2 cursor-pointer bg-[#3C4DC2] flex items-center shadow-custom justify-center"
                    >
                        <button className="font-montserrat text-[12px] max-900:text-[9px] text-white">
                            <i className="fas fa-times"></i>&nbsp; Close
                        </button>
                    </div>
                    <p className="text-[#1f1f1f] font-poppins text-sm mb-3">
                        {description}
                    </p>
                </div>
            </div>
        ) : null;
    };

    return (
        <>
            <Background />

            <div className="w-full flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]">
                <div className="aboutContent w-[90vw] flex max-900:flex-col-reverse max-900:items-center relative justify-evenly">
                    <div className="w-[50vw] max-900:w-[80vw] max-900:mt-1">
                        <div data-aos="fade-right" className="">
                            <p className="name text-5xl max-900:text-[24px] text-[#3C4DC2] my-6 max-900:my-3 font-montserrat">Corporate Leader Interaction</p>
                            <p className="tagline text-4xl max-900:text-[14px] text-[#1F1F1F] my-2 font-bold font-popins">
                                Connect | Collaborate | Innovate
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center max-900:w-[80vw]">
                        <img data-aos="fade-left" src="./src/assets/cli.jpg" alt="PC Mohanty" className="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-auto bg-[#f7f7f7]">
                <div className="w-full h-180px max-900:h-auto bg-[#3C4DC2]">
                    <h1 className="text-white font-montserrat text-4xl max-900:text-2xl py-16 text-center">Recent Interactions</h1>
                </div>
                <div className="flex justify-center items-center min-h-screen w-[100%] bg-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-4">
                        {BlogData.map((person, index) => (
                            <ResearchCard
                                key={index}
                                image={`http://localhost:3000/${person.path}`}
                                name={person.name}
                                title={person.title}
                                onClick={() => setSelectedPerson(person)}
                            />
                        ))}
                    </div>
                    {selectedPerson && (
                        <Popup
                            isVisible={!!selectedPerson}
                            onClose={closePopup}
                            name={selectedPerson.name}
                            description={selectedPerson.description}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Blog;
