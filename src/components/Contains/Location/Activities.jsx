import React from "react";
import { LocationHeader } from "../../common/LocationHeader";
import ActivitiesInfo from "../../Json Data/Data.json";
import { ADN } from "../../CommonCotains/ADN";

export const Activities = () => {
  return (
    <div className="pt-10">
      <LocationHeader title="Activities" more="see all" color="#0A0A0A" />

      <div className="pt-[15px]">
        {ActivitiesInfo.Activities.map(
          ({ image, name, locationName, loss }, index) => (
            <div key={index} className="space-y-[15px]">
              {Array.from(Array(2).keys()).map((el) => (
                <ADN
                  image={image}
                  name={name}
                  locationName={locationName}
                  loss={loss}
                 key={el}
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};
