import React from "react";
import { Disasters } from "../CommonCotains/Disasters";
import DisastersInfo from "../Json Data/Data.json";
import { Contains } from "./Contains";

export const Dashboard = () => {
  return (
    <section className="mt-10">
    <Contains className='flex relative px-[50px] md:px-[70px] max-w-[1517px] flex-wrap gap-[25px] justify-items-center '>
      {DisastersInfo.disasters.map(({ image, place, area, loss }, index) => (
        <Disasters
          key={index}
          image={image}
          place={place}
          area={area}
          loss={loss}
        />
      ))}
    </Contains>

       <div className="absolute right-0 bottom-0 pr-[77px] pb-[50px] shadow-cheat">
       <img src="/C.png" alt="" className="size-[77px] cursor-pointer" />
       </div>

  </section>
  );
};
