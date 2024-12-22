import React from "react";
import Background from "../component/Background";
import Popup from "../component/Popup";
import ResearchCard from "../component/ResearchCard";
import { useState } from "react";

const Blog = () => {

    const [selectedPerson, setSelectedPerson] = useState(null);

    const people = [
        {
            name: "Mr. Anand RamaMoorthy",
            title: "MD, Micron India",
            image: "../src/assets/CLI/AnandRamaMoorthy.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        },
        {
            name: "Mr. Shravan Tickoo",
            title: "Product Management Expert",
            image: "../src/assets/CLI/ShravanTickoo.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        },
        {
            name: "Mr. Arpit Sharma",
            title: "MD, NEAR Foundation India",
            image: "../src/assets/CLI/ArpitSharma.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        },
        {
            name: "Mr. Mandar Joshi",
            title: "Angel Investor, Strategist",
            image: "../src/assets/CLI/MandarJoshi.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
        },
    ];

    const closePopup = () => setSelectedPerson(null);
    return (
        <>
            <Background />
            <div className="w-full flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]">
                <div className="aboutContent w-[90vw] flex max-900:flex-col-reverse max-900:items-center relative justify-evenly">
                    <div className="aboutContentLeft w-[50vw] max-900:w-[80vw] max-900:mt-1" data-aos="fade-right">
                        <div className="aboutContentInfo">
                            <p className="name text-5xl max-900:text-[24px] text-[#3C4DC2] my-6 max-900:my-3 font-montserrat">Corporate Leader Interaction</p>
                            <p className="tagline text-4xl max-900:text-[14px] text-[#1F1F1F] my-2 font-bold font-popins">
                                Connect | Collaborate | Innovate
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center max-900:w-[80vw]" data-aos="fade-left">
                        <img src="./src/assets/cli.jpg" alt="PC Mohanty" className="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-auto bg-[#f7f7f7]">
                <div className="w-full h-180px max-900:h-auto bg-[#3C4DC2]">
                    <h1 className="text-white font-montserrat text-4xl max-900:text-2xl py-16 text-center">Recent Interactions</h1>
                </div>
                <div>

                    <div className="px-4 py-8">
                        <div className="flex max-900:flex-col justify-evenly max-900:items-center">
                                <ResearchCard
                                    image={people[0].image}
                                    name={people[0].name}
                                    title={people[0].title}
                                    onClick={() => setSelectedPerson(people[0])}
                                />
                                <ResearchCard
                                    image={people[1].image}
                                    name={people[1].name}
                                    title={people[1].title}
                                    onClick={() => setSelectedPerson(people[1])}
                                />
                        </div>
                        <div className="flex max-900:flex-col justify-evenly max-900:items-center">
                                <ResearchCard
                                    image={people[2].image}
                                    name={people[2].name}
                                    title={people[2].title}
                                    onClick={() => setSelectedPerson(people[2])}
                                />
                                <ResearchCard
                                    image={people[0].image}
                                    name={people[0].name}
                                    title={people[0].title}
                                    onClick={() => setSelectedPerson(people[0])}
                                />
                        </div>
                        {selectedPerson && (
                            <Popup
                                isVisible={!!selectedPerson}
                                onClose={closePopup}
                                name={selectedPerson.name}
                                image={selectedPerson.image}
                                description={selectedPerson.description}
                            />
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blog;