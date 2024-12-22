import React from 'react';

const PatronCard = ({ image, name, designation }) => {
  return (
    <div
      className="patronCard bg-[#3C4DC2] text-white flex flex-col items-center rounded-[3%] w-[20vw] max-900:w-[75vw] pb-3 my-6"
      data-aos="fade-up"
    >
      <img src={image} alt={name} className="w-full object-cover rounded-t-[3%]" />
      <p className="head text-lg font-montserrat px-4 my-3">{name}</p>
      <p className="des text-sm font-poppins my-3">{designation}</p>
    </div>
  );
};

export default PatronCard;
