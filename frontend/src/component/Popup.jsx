import React from "react";

const Popup = ({ isVisible, onClose, name, image, description }) => {
  return isVisible ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-auto max-w-[90%] max-900:w-[90vw] p-7 rounded shadow-lg relative">
        <h1 className="text-2xl right-[120px] mr-[99px] font-montserrat text-[#3C4DC2] top-4 pb-8 max-900:pb-4 max-900:mr-[15px]">
          {name}
        </h1>
        <div
          onClick={onClose}
          className="w-[100px] max-900:w-[55px] h-[36px] max-900:h-[30px] absolute top-7 right-4 max-900:top-7 max-900:right-2 cursor-pointer bg-[#3C4DC2] flex items-center shadow-custom
          justify-center"
        >
          <button className="font-montserrat text-[12px] max-900:text-[9px] text-white">
            <i class="fas fa-times"></i>&nbsp; Close
          </button>
        </div>
        <div className="flex flex-wrap justify-center my-3 mb-6">
          <img src={image} alt={name} className="w-[18vw] max-900:w-4/5" />
        </div>
        <p className="text-[#1f1f1f] font-poppins text-sm mb-3">
          {description}
        </p>
      </div>
    </div>
  ) : null;
};

export default Popup;
