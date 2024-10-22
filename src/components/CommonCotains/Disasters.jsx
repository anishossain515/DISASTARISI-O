import React from "react";
import disastersData from "../Json Data/Data.json";

export const Disasters = ({image,place,area,loss}) => {
  return (
    <div className="w-full max-w-[1300px] gap-[25px]">
      <div className="w-[306px]  rounded-lg">
          <img
            src='/disaster1.png'
            alt=''
            className=" rounded-[10px] w-[306px]  h-auto md:h-[253px] object-cover" // Adjust height as needed
          />

          <div className="space-y-[8px]">
            <h1 className="font-onest font-bold text-[16px] text-Rich Black pt-[10px]">
             Whitechapel Rd.
            </h1>
            <p className="text-Gray font-onest font-semibold text-[14px]">
            Tulare County,  Los Angles, CA 23415
            </p>
            <p className="text-Rich Black font-onest font-bold text-[16px]">
            $1,456,654.00
            </p>
          </div>
        </div>
    </div>
  );
};
