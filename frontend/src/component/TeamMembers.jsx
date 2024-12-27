import React, { useCallback, useState } from "react";
import TeamCard from "./TeamCard";

const TeamMembers = () => {
    const [activeTab, setActiveTab] = useState("event");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const tabs = [
        { id: "event", label: "Events" },
        { id: "editorial", label: "Editorial" },
        { id: "newconnection", label: "Corporate Connection" },
        { id: "media", label: "Media" },
        { id: "development", label: "Web Development" },
        { id: "design", label: "Design" },
    ];
    const teamMembers = [
        {
            imgSrc: "../src/assets/director.jpeg",
            name: "Hardik",
            designation: "Executive",
            contactLinks: {
                call: "tel:1234567890",
                mail: "mailto:example@mail.com",
                linkedin: "https://www.linkedin.com/in/example",

            },
        },
    ];

    return (
        <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 rounded font-medium transition-colors
                        ${activeTab === tab.id
                                ? "bg-[#3C4DC2] text-white"
                                : "bg-blue-400 text-gray-800 hover:shadow-custom hover:shadow-black"
                            }`}
                        onClick={() => handleTabChange(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="flex justify-center max-900:flex-col max-900:items-cente">
                {activeTab === "event" && (
                    <div className="flex justify-evenly max-900:flex-col max-900:items-center">
                        <TeamCard
                            imgSrc={teamMembers[0].imgSrc}
                            name={teamMembers[0].name}
                            designation={teamMembers[0].designation}
                            contactLinks={teamMembers[0].contactLinks}
                        />
                    </div>
                )}
                {activeTab === "editorial" && (
                    <div className="flex justify-evenly max-900:flex-col max-900:items-center">
                        <TeamCard
                            imgSrc={teamMembers[0].imgSrc}
                            name={teamMembers[0].name}
                            designation={teamMembers[0].designation}
                            contactLinks={teamMembers[0].contactLinks}
                        />
                    </div>
                )}
                {activeTab === "newconnection" && (
                    <div className="flex justify-evenly max-900:flex-col max-900:items-center">
                        <TeamCard
                            imgSrc={teamMembers[0].imgSrc}
                            name={teamMembers[0].name}
                            designation={teamMembers[0].designation}
                            contactLinks={teamMembers[0].contactLinks}
                        />
                    </div>
                )}
                {activeTab === "media" && (
                    <div className="flex justify-evenly max-900:flex-col max-900:items-center">
                        <TeamCard
                            imgSrc={teamMembers[0].imgSrc}
                            name={teamMembers[0].name}
                            designation={teamMembers[0].designation}
                            contactLinks={teamMembers[0].contactLinks}
                        />
                    </div>
                )}
                {activeTab === "development" && (
                    <div className="flex justify-evenly max-900:flex-col max-900:items-center">
                        <TeamCard
                            imgSrc={teamMembers[0].imgSrc}
                            name={teamMembers[0].name}
                            designation={teamMembers[0].designation}
                            contactLinks={teamMembers[0].contactLinks}
                        />
                    </div>
                )}
                {activeTab === "design" && (
                    <div className="flex justify-evenly max-900:flex-col max-900:items-center">
                        <TeamCard
                            imgSrc={teamMembers[0].imgSrc}
                            name={teamMembers[0].name}
                            designation={teamMembers[0].designation}
                            contactLinks={teamMembers[0].contactLinks}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamMembers;
