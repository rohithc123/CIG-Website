import React from "react";


const ResearchCard = ({ image, name, title, onClick }) => {
  return (
    <div
      className="shadow-md p-4 mb-10 transition-transform transform hover:scale-105"
      data-aos="fade-up"
    >
      <img src={image} alt={name} className="mb-4 w-72 h-auto" />
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg font-montserrat text-[#1f1f1f] mb-4">{name}</h5>
          <p className="text-[16px] font-poppins text-[#1f1f1f]">{title}</p>
        </div>
        <button
          onClick={onClick}
          className=""
        >
          <img src="../src/assets/send.png" alt="Details" className=" rounded-full h-9" />
        </button>
      </div>
    </div>
  );
};



export default ResearchCard;