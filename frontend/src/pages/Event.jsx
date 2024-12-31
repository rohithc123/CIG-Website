import React, {useState} from "react";
import Background from "../component/Background";
import Popup from "../component/Popup";
import ResearchCard from "../component/ResearchCard";

const Event = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const people = [
        {
            image: "../src/assets/event/ukps/ukps1.png",
            name: "Uttrakhand Plastics Summit' 2023",
            title: "Date: 10/10/2023",
            description: "A summit focused on sustainable plastic use in Uttarakhand.",
        },
        {
            image: "../src/assets/event/5g/5g1.png",
            name: "5G Lab, Global Digital Innovation",
            title: "Date: 27/10/2023",
            description: "Innovations in 5G technology and global advancements.",
        },
        {
            image: "../src/assets/event/swaraj/swaraj1.png",
            name: "CLS by Prof. Chetan Singh Solanki, Swaraj Foundation",
            title: "Date: 9/04/2023",
            description: "A lecture on sustainability and renewable energy by Prof. Solanki.",
        },
        {
            image: "../src/assets/event/army/army1.png",
            name: "Army Weapon Exhibition, 15 Garhwal Rifles",
            title: "Date: 14/08/2023",
            description: "An exhibition showcasing modern weaponry by the Indian Army.",
        },
        {
            image: "../src/assets/event/alumTalk/alumTalk1.jpg",
            name: "Corporate Alumni Talk' 2023",
            title: "Date: 7/04/2023",
            description: "An interactive session with alumni sharing corporate experiences.",
        },
        {
            image: "../src/assets/event/ukum/ukum1.png",
            name: "Uttrakhand Udyog Mahotsava' 2023",
            title: "Date: 18/03/2023",
            description: "A celebration of industries and entrepreneurship in Uttarakhand.",
        },
        {
            image: "../src/assets/event/ird/ird1.jpg",
            name: "Institute Research Day' 2023",
            title: "Date: 13/03/2023",
            description: "A showcase of innovative research projects at the institute.",
        },
        {
            image: "../src/assets/event/ind/ind1.jpg",
            name: "Industrial Visit to HeroMoto Corp.",
            title: "Date: 11/02/2023",
            description: "An educational visit to the HeroMoto Corp manufacturing unit.",
        },
        {
            image: "../src/assets/event/wrksp/wrksp1.png",
            name: "MathWorks Workshop",
            title: "Date: 30/11/2021",
            description: "A workshop on advanced computational tools and techniques by MathWorks.",
        },
    ];
    

    const closePopup = () => setSelectedPerson(null);
    return (
        <>
            <Background />
            <div className="w-full flex overflow-hidden max-900:mt-[5vh] justify-center my-[20vh]">
                <div className="aboutContent w-[90vw] flex max-900:flex-col-reverse max-900:items-center relative justify-evenly">
                    <div className="w-[50vw] max-900:w-[80vw] max-900:mt-1">
                        <div data-aos="fade-right" className="">
                            <p className="name text-5xl max-900:text-[24px] text-[#3C4DC2] my-6 max-900:my-3 font-montserrat">ADCI's Initiatives</p>
                            <p className="tagline text-4xl max-900:text-[14px] text-[#1F1F1F] my-2 font-bold font-popins">
                                Connect | Collaborate | Innovate
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center max-900:w-[80vw]">
                        <img data-aos="fade-left" src="./src/assets/event.png" alt="PC Mohanty" className="" />
                    </div>
                </div>
            </div>
            <div className="w-full h-auto bg-[#f7f7f7]">
                <div className="w-full h-180px max-900:h-auto bg-[#3C4DC2]">
                    <h1 className="text-white font-montserrat text-4xl max-900:text-2xl py-16 text-center">Recent Initiatives</h1>
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
                                    image={people[3].image}
                                    name={people[3].name}
                                    title={people[3].title}
                                    onClick={() => setSelectedPerson(people[3])}
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
    );
};

export default Event;