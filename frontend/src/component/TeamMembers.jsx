import React, { useEffect, useState } from "react";

const TeamMembers = () => {
    const [teamData, setTeamData] = useState([]); // Initialize as an empty array
    const [selectedVertical, setSelectedVertical] = useState(null); // State to track selected vertical

    const fetchTeamData = async () => {
        try {
            const response = await fetch('/api/admin/getteamMembersV', {
                method: "GET",
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Team Data:', data.photos);  // Log the data to ensure vertical exists
                setTeamData(data.photos); // Assuming the data returned has a 'photos' array
            } else {
                console.error("Error fetching team data");
            }
        } catch (error) {
            console.error('Error fetching team data:', error);
        }
    };

    useEffect(() => {
        fetchTeamData();
    }, []);

    // Handle tab selection to filter team members by vertical
    const handleTabChange = (vertical) => {
        setSelectedVertical(vertical); // Set the selected vertical
    };

    // Filter team members by selected vertical
    const filteredTeamData = selectedVertical
        ? teamData.filter(member => member.vertical === selectedVertical)
        : teamData;

    return (
        <div className="overflow-hidden">
            {/* Tabs Section */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {teamData.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 rounded font-medium transition-colors
                        ${selectedVertical === tab.vertical
                            ? "bg-[#3C4DC2] text-white"
                            : "bg-blue-400 text-gray-800 hover:shadow-custom hover:shadow-black"
                        }`}
                        onClick={() => handleTabChange(tab.vertical)}
                    >
                        {tab.vertical}
                    </button>
                ))}
            </div>

            {/* Team Data Section */}
            <div className="font-bold font-poppins text-center text-[66px] text-[#BFBFBF]">
                <div className="w-[100%] gap-8 mx-auto mt-4 p-4 justify-center">
                    <div className="flex justify-center items-center h-auto w-[100%] bg-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto px-4 py-[80px]">
                            {/* Display filtered team data */}
                            {filteredTeamData.length > 0 ? (
                                filteredTeamData.map((data) => (
                                    <div
                                        key={data._id} // Ensure each member has a unique ID
                                        className="flex flex-row font-poppins gap-8 bg-white p-4 shadow-md rounded-lg"
                                    >
                                        <img
                                            className="rounded-xl w-[200px] h-[250px]"
                                            src={`http://localhost:3000/${data.path}`}
                                            alt={data.name}
                                        />
                                        <div className="flex flex-col justify-center">
                                            <div className="font-medium text-2xl">{data.name}</div>
                                            <div className="text-[#909090] bg-[#909090] w-full h-[2px] my-4"></div>
                                            <div className="text-[#ABABAB] font-medium text-base">Phone no.: {data.phone}</div>
                                            <div className="text-[#ABABAB] font-medium text-base">Email : {data.email}</div>
                                            <a href={data.Linkedin} target="_back" className="text-[#2f67f4] font-medium text-base">Linkedin</a>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center col-span-1 lg:col-span-2">
                                    No data available for this vertical.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
