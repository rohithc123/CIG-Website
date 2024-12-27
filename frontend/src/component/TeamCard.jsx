import React from "react";

const TeamCard = ({ imgSrc, name, designation, contactLinks }) => {
  return (
    <div className="flex flex-col items-center bg-[#3C4DC2] rounded-[3%] w-[15vw] my-5 max-900:w-3/4">
      <img
        src={imgSrc}
        alt={`${name}`}
        className="w-full object-cover rounded-t-[3%]"
      />
      <p className="text-white text-lg px-4 my-2 font-montserrat">{name}</p>
      <p className="text-white text-sm my-2 font-poppins">{designation}</p>
      <div className="flex w-full items-center pb-3 justify-evenly">
        <a
          href={contactLinks.call}
          className="text-white hover:text-blue-200 transition-colors"
        >
          <img src="../src/assets/call.png" alt="call" className="transition-opacity duration-100 hover:opacity-50 w-6 h-6" />
        </a>
        <a
          href={contactLinks.mail}
          className="text-white hover:text-blue-200 transition-colors"
        >
          <img src="../src/assets/mail.png" alt="mail" className="transition-opacity duration-100 hover:opacity-50 w-6 h-6" />
        </a>
        <a
          href={contactLinks.linkedin}
          className="text-white hover:text-blue-200 transition-colors"
        >
          <img src="../src/assets/linkedinw.png" alt="linkedin" className="transition-opacity duration-100 hover:opacity-50 w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
