import React from "react";

export const IncidentsInfo = ({ image, type, details }) => {
  return (
    <div className="w-[235px] bg-[#F4F4F5] border border-Light-Gray rounded-[10px] px-[20px] py-[25px]">
      <img src={image} alt="Incidents" />

      <div className="font-onest pt-[68px]">
        <h1 className="font-bold text-xl text-Rich-Black">{type}</h1>
        <p className="text-[14px] pt-[10px] text-Gray">{details}</p>
      </div>
    </div>
  );
};
