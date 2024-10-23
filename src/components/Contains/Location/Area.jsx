import React from "react";
import { Disasters } from "../../CommonCotains/Disasters";
import LocationInfo from "../../Json Data/Data.json";
import { LocationHeader } from "../../common/LocationHeader";

export const Area = () => {
  return (
    <div className="pt-10">
      
      <LocationHeader title='Locations' more='see all' color='#A1A1AA'/>

      <div className="sm:pt-[15px] pt-5 w-full">
        <div className="flex md:justify-normal justify-center gap-[17.5px] flex-wrap">
        {LocationInfo.location.map(({ image, place, area, loss }, index) => (
          <Disasters
            image={image}
            height="177px" // set height for image
            width="214px" // set width for image 
            sizeP="12px" // set size for first p
            size="14px" // set size for h1 and 2nd p 
            place={place}
            area={area}
            loss={loss}
            key={index}
          />
        ))}
        </div>
      </div>
    </div>
  );
};
