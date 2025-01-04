// import React from "react";
// import Background from "../component/Background";
// import Mcard from "../component/Mcard";
// import PatronCard from "../component/PatronCard";
// import TeamCard from "../component/TeamCard";
// import TeamMembers from "../component/TeamMembers";
// const About = () => {
//     const cards = [
//         {
//             image: "../src/assets/mission.png",
//             heading: "Mission",
//             description: "Build a stronger connection between academia and industry, making IIT Roorkee a hub of innovation and research.",
//         },
//         {
//             image: "../src/assets/vision.png",
//             heading: "Vision",
//             description: "Bridging the gap between academia and industries through strategic programs and initiatives.",
//         },
//         {
//             image: "../src/assets/objective.png",
//             heading: "Objective",
//             description: "Create a robust platform for students to engage with industry experts, gaining valuable insights into the corporate world.",
//         },
//     ];

//     const patroncards = [
//         {
//             image: '../src/assets/director.jpeg',
//             name: 'Prof. K.K. Pant',
//             designation: 'Director, IIT Roorkee',
//         },
//         {
//             image: '../src/assets/sric.jpg',
//             name: 'Prof. Akshay Dvivedi',
//             designation: 'Dean, SRIC',
//         },
//         {
//             image: '../src/assets/adci.jpg',
//             name: 'Prof. Sai Ramudu Meka',
//             designation: 'Associate Dean(Corporate Interaction)',
//         },
//         {
//             image: '../src/assets/vishal.jpg',
//             name: 'Mr. Vishal Tiwari',
//             designation: 'Project Officer, IIT Roorkee',
//         },
//     ];
//     const teamMembers = [
//         {
//             imgSrc: "../src/assets/director.jpeg",
//             name: "Hardik",
//             designation: "Chairperson",
//             contactLinks: [
//                 { href: "tel:1234567890", icon: "../src/assets/call.png", alt: "Call" },
//                 { href: "mailto:example@mail.com", icon: "../src/assets/mail.png", alt: "Mail" },
//                 {
//                     href: "https://www.linkedin.com/in/example",
//                     icon: "../src/assets/linkedinw.png",
//                     alt: "LinkedIn",
//                 },
//             ],
//         },
//         // Add other team members here
//     ];


//     return (
//         <>
//             <Background />
//             <div className="w-full flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]">
//                 <div className="aboutContent w-[90vw] flex max-900:flex-col-reverse max-900:items-center relative justify-evenly">
//                     <div className="aboutContentLeft w-[50vw] max-900:w-[80vw] max-900:mt-1" data-aos="fade-right">
//                         <div className="aboutContentInfo">
//                             <p className="name text-[48px] max-900:text-[24px] text-[#3C4DC2] my-6 max-900:my-3 font-montserrat">Corporate Interactions Group</p>
//                             <p className="tagline text-[18px] max-900:text-[14px] text-[#1F1F1F] italic my-2 font-cormorant">
//                                 Corporate Interactions Group (CIG) is a student body of IITR founded on 01st October 2015 that works for
//                                 creating and nurturing excellent relationships with industries catering to technological and research needs
//                                 of industry.
//                             </p>
//                         </div>
//                     </div>
//                     <div className="flex items-center max-900:w-[80vw]" data-aos="fade-left">
//                         <img src="./src/assets/about.png" alt="PC Mohanty" className="" />
//                     </div>
//                 </div>
//             </div>
//             <div className="w-full bg-white flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]" >
//                 <div className="w-full max-900:items-center relative flex max-900:flex-col overflow-hidden max-900:w-[75vh] justify-evenly">
//                     {cards.map((card, index) => (
//                         <Mcard key={index} image={card.image} heading={card.heading} description={card.description} />
//                     ))}
//                 </div>
//             </div>
//             <div className="w-full h-auto overflow-hidden bg-white">
//                 <h1 className="text-[#1f1f1f] font-montserrat text-center py-16 text-4xl max-900:text-2xl">Our Patrons</h1>
//                 <div className="flex max-900:flex-col justify-evenly max-900:items-center">
//                     <PatronCard
//                         image={patroncards[0].image}
//                         name={patroncards[0].name}
//                         designation={patroncards[0].designation}
//                     />
//                     <PatronCard
//                         image={patroncards[1].image}
//                         name={patroncards[1].name}
//                         designation={patroncards[1].designation}
//                     />
//                     <PatronCard
//                         image={patroncards[2].image}
//                         name={patroncards[2].name}
//                         designation={patroncards[2].designation}
//                     />
//                 </div>
//                 <div className="flex justify-evenly">
//                     <PatronCard
//                         image={patroncards[3].image}
//                         name={patroncards[3].name}
//                         designation={patroncards[3].designation}
//                     />
//                 </div>
//             </div>
//             <div className="w-full h-auto overflow-hidden bg-white">
//                 <h1 className="text-[#1f1f1f] font-montserrat text-center py-16 text-4xl max-900:text-2xl">Our Team</h1>
//                 <h2 className="text-[#1f1f1f] font-montserrat text-center pb-8 text-2xl max-900:text-lg">Team Heads</h2>
//                 <div className="flex justify-evenly max-900:flex-col max-900:items-center">
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                 </div>
//                 <div className="flex justify-evenly max-900:flex-col max-900:items-center">
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                 </div>
//                 <div className="flex justify-evenly max-900:flex-col max-900:items-center">
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                         <TeamCard
//                             imgSrc={teamMembers[0].imgSrc}
//                             name={teamMembers[0].name}
//                             designation={teamMembers[0].designation}
//                             contactLinks={teamMembers[0].contactLinks}
//                         />
//                 </div>
//             </div>
//             <div className="w-full h-auto overflow-hidden mt-8 bg-white">
//             <h2 className="text-[#1f1f1f] font-montserrat text-center pb-8 text-2xl max-900:text-lg">Team Members</h2>
//             <TeamMembers/>
//             </div>
//         </>
//     )
// }

// export default About;





import React, { useState, useEffect } from 'react';
import Background from "../component/Background";
import Mcard from "../component/Mcard";
// import PatronCard from "../component/PatronCard";
// import TeamCard from "../component/TeamCard";
import TeamMembers from "../component/TeamMembers";

const About = () => {

    const [PatronCardData, setPatronCardData] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);

    // Fetch teamMembers data from MongoDB (via backend API)
    const fetchTeamData = async () => {
        try {
            const response = await fetch('/api/admin/getteamMembers', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setTeamMembers(data.photos); // Assuming the data returned has a 'patrons' array
            } else {
                console.error("Error fetching patron data");
            }
        } catch (error) {
            console.error('Error fetching patron data:', error);
        }
    };

    useEffect(() => {
        fetchTeamData();
    }, []);

    // Fetch PatronCard data from MongoDB (via backend API)
    const fetchPatronData = async () => {
        try {
            const response = await fetch('/api/admin/getpatroncards', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                setPatronCardData(data.photos); // Assuming the data returned has a 'patrons' array
            } else {
                console.error("Error fetching patron data");
            }
        } catch (error) {
            console.error('Error fetching patron data:', error);
        }
    };

    useEffect(() => {
        fetchPatronData();
    }, []);

    const cards = [
        {
            image: "../src/assets/mission.png",
            heading: "Mission",
            description: "Build a stronger connection between academia and industry, making IIT Roorkee a hub of innovation and research.",
        },
        {
            image: "../src/assets/vision.png",
            heading: "Vision",
            description: "Bridging the gap between academia and industries through strategic programs and initiatives.",
        },
        {
            image: "../src/assets/objective.png",
            heading: "Objective",
            description: "Create a robust platform for students to engage with industry experts, gaining valuable insights into the corporate world.",
        },
    ];

    return (
        <>
            <Background />
            <div className="w-full flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]">
                <div className="aboutContent w-[90vw] flex max-900:flex-col-reverse max-900:items-center relative justify-evenly">
                    <div className="aboutContentLeft w-[50vw] max-900:w-[80vw] max-900:mt-1" data-aos="fade-right">
                        <div className="aboutContentInfo">
                            <p className="name text-[48px] max-900:text-[24px] text-[#3C4DC2] my-6 max-900:my-3 font-montserrat">Corporate Interactions Group</p>
                            <p className="tagline text-[18px] max-900:text-[14px] text-[#1F1F1F] italic my-2 font-cormorant">
                                Corporate Interactions Group (CIG) is a student body of IITR founded on 01st October 2015 that works for
                                creating and nurturing excellent relationships with industries catering to technological and research needs
                                of industry.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center max-900:w-[80vw]" data-aos="fade-left">
                        <img src="./src/assets/about.png" alt="PC Mohanty" className="" />
                    </div>
                </div>
            </div>

            <div className="w-full bg-white flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]" >
                <div className="w-full max-900:items-center relative flex max-900:flex-col overflow-hidden max-900:w-[75vh] justify-evenly">
                    {cards.map((card, index) => (
                        <Mcard key={index} image={card.image} heading={card.heading} description={card.description} />
                    ))}
                </div>
            </div>

            <div className="font-bold  font-poppins text-center text-[66px] text-[#BFBFBF]">
                <h1 className="text-[#1f1f1f] font-montserrat text-center py-5 text-4xl max-900:text-2xl">Our Patrons</h1>
                <div className="w-[100%] gap-8 mx-auto mt-4 p-4 justify-center">
                    <div className="flex justify-center items-center h-auto w-[100%] bg-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto px-4 py-[80px]">
                            {PatronCardData.length > 0 ? (
                                PatronCardData.map((data) => (
                                    <div
                                        key={data.name}
                                        className="flex flex-row font-poppins gap-8 bg-white p-4 shadow-md rounded-lg"
                                    >
                                        <img
                                            className="rounded-xl w-[200px] h-[250px]"
                                            src={`http://localhost:3000/${data.path}`}
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-center">
                                            <div className="font-medium text-2xl">{data.name}</div>
                                            <div className="text-[#183059] font-medium text-base">{data.designation}</div>
                                            <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                                            <div className="text-[#ABABAB] font-medium text-base">Phone no.: {data.phone}</div>
                                            <div className="text-[#ABABAB] font-medium text-base">Email : {data.email}</div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center col-span-1 lg:col-span-2">
                                    Loading team data or no data available.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="font-bold  font-poppins text-center text-[66px] text-[#BFBFBF]">
                <h1 className="text-[#1f1f1f] font-montserrat text-center py-5 text-4xl max-900:text-2xl">Our Team</h1>
                <h2 className="text-[#1f1f1f] font-montserrat text-center pb-5 text-2xl max-900:text-lg">Team Heads</h2>
                <div className="w-[100%] gap-8 mx-auto mt-4 p-4 justify-center">
                    <div className="flex justify-center items-center h-auto w-[100%] bg-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto px-4 py-[80px]">
                            {teamMembers.length > 0 ? (
                                teamMembers.map((data) => (
                                    <div
                                        key={data.name}
                                        className="flex flex-row font-poppins gap-8 bg-white p-4 shadow-md rounded-lg"
                                    >
                                        <img
                                            className="rounded-xl w-[200px] h-[250px]"
                                            src={`http://localhost:3000/${data.path}`}
                                            alt=""
                                        />
                                        <div className="flex flex-col justify-center">
                                            <div className="font-medium text-2xl">{data.name}</div>
                                            <div className="text-[#183059] font-medium text-base">{data.designation}</div>
                                            <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                                            <div className="text-[#ABABAB] font-medium text-base">Phone no.: {data.phone}</div>
                                            <div className="text-[#ABABAB] font-medium text-base">Email : {data.email}</div>
                                            <a href={data.Linkedin} target="_back" className="text-[#2f67f4] font-medium text-base">Linkedin</a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center col-span-1 lg:col-span-2">
                                    Loading team data or no data available.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto overflow-hidden mt-8 bg-white">
                <h2 className="text-[#1f1f1f] font-montserrat text-center pb-8 text-2xl max-900:text-lg">Team Members</h2>
                <TeamMembers />
            </div>
        </>
    );
};

export default About;
