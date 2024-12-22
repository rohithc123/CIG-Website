import React from "react";

const Popup = ({ isVisible, onClose, name, image, description }) => {
  return isVisible ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-4/5 max-900:w-[90vw] max-w-2xl p-7 rounded shadow-lg relative">
      <div className="w-[100px] h-[36px] absolute top-7 right-4 cursor-pointer bg-[#3C4DC2] flex items-center shadow-custom
         justify-center">
          <button className="font-montserrat text-[12px] text-white" onClick={onClose}><i class="fas fa-times"></i>&nbsp; Close</button>
        </div>
      <h1 className="text-2xl font-montserrat text-[#3C4DC2] top-4 pb-8 max-900:pb-4">{name}</h1>
        <div className="flex justify-center my-3 mb-6">
          <img src={image} alt={name} className="w-[18vw] max-900:w-4/5" />
        </div>
        <p className="text-[#1f1f1f] font-poppins text-sm mb-3">{description}</p>
        
      </div>
    </div>
  ) : null;
};

export default Popup;
