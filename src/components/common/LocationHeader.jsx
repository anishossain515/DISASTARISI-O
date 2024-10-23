import React from "react";

export const LocationHeader = ({title,more, color}) => {
  return (
    <div className="font-onest text-[14px] flex justify-between items-center">
      <h3 className="font-bold text-black">{title}</h3>
      <p className=" underline" style={{color : color, textDecorationColor : color}}>{more}</p>
    </div>
  );
};
