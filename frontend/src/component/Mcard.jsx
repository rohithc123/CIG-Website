import React from "react";

const Mcard = ({ image, heading, description }) => {
  return (
    <div className="mCard w-[20vw] max-900:w-[75vw] max-900:h-[426px] max-900:my-5 my-8 justify-center bg-[#F7F7F7] flex flex-col hover:shadow-xl hover:shadow-black/20 transition-all duration-100 ease-in-out" data-aos="fade-up">
      <img src={image} alt={heading} className="w-full" />
      <div className="p-4">
        <p className="head text-[24px] text-center font-montserrat my-3">{heading}</p>
        <p className="des text-[16px] text-center font-poppins mx-3">{description}</p>
      </div>
    </div>
  );
};

export default Mcard;
