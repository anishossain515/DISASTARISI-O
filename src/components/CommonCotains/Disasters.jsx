import React from "react";

export const Disasters = ({image,place,area,loss,width , height,size,sizeP}) => {
  return (
      <div className="rounded-lg">
          <img
            src={image}
            alt={place}
            style={{width,height}}
            className=" rounded-[10px]  h-auto md:h-[253px] object-cover" 
          />

          <div className="space-y-[8px] font-onest">
            <h1 className=" font-bold  text-Rich Black pt-[10px]" style={{ fontSize :size}}>
             {place}
            </h1>
            <p className="text-Gray  font-semibold " style={{fontSize :sizeP}}>
            {area}
            </p>
            <p className="text-Rich Black font-bold" style={{fontSize:size}}>
             {loss}
            </p>
          </div>
        </div>
  );
};
