import React from "react";

export const Disasters = ({image,place,area,loss}) => {
  return (
      <div className="w-[306px]  rounded-lg">
          <img
            src={image}
            alt={place}
            className=" rounded-[10px] w-[306px]  h-auto md:h-[253px] object-cover" // Adjust height as needed
          />

          <div className="space-y-[8px]">
            <h1 className="font-onest font-bold text-[16px] text-Rich Black pt-[10px]">
             {place}
            </h1>
            <p className="text-Gray font-onest font-semibold text-[14px]">
            {area}
            </p>
            <p className="text-Rich Black font-onest font-bold text-[16px]">
             {loss}
            </p>
          </div>
        </div>
  );
};
