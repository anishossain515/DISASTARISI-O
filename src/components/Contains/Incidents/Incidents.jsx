import React from "react";
import { Contains } from "../Contains";
import DisastersInfo from "../../Json Data/Data.json";
import { Disasters } from "../../CommonCotains/Disasters";
import { NavDetails } from "../../CommonCotains/Navber/NavDetails";
import { useNavigate } from "react-router-dom";

export const Incidents = () => {
   
  let Navigate = useNavigate()

  const handelNavigate = ()=>{
    Navigate("/IncidentPage1")
  }

  return (
    <>
      <NavDetails
        NavInfo="Home - Incidents"
        NavName="Incidents"
        FirstBtnInfo="Sort By: Date modified"
        SecondBtnInfo="New Incident"
        BtnSrc='/plus.png'
        P='text-[12px]'
        H='text-[26px]'
       SecondBtnClick={handelNavigate}
      />

      <section className="mt-10">
        <Contains className="flex relative px-[50px] md:px-[70px] max-w-[1517px] flex-wrap gap-[25px] justify-center xl:justify-normal">
          {DisastersInfo.disasters.map(
            ({ image, place, area, loss }, index) => (
              <Disasters
                key={index}
                image={image}
                place={place}
                area={area}
                loss={loss}
              />
            )
          )}
        </Contains>
      </section>
    </>
  );
};
