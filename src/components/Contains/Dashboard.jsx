// Dashboard.js
import React, { useState } from "react";
import { Disasters } from "../CommonCotains/Disasters";
import DisastersInfo from "../Json Data/Data.json";
import { Contains } from "./Contains";
import { CheatClose, CheatOpen } from "../lib/Icon";
import { Cheat } from "../common/Cheat";
import { CheatBox } from "./CheatBox";
import { cn } from "../lib/Cn";

export const Dashboard = () => {
  const [isCheatActive, setIsCheatActive] = useState(false);

  const toggleCheat = () => {
    setIsCheatActive((prev) => !prev);
  };

  return (
    <section className="mt-10">
    <Contains className="flex relative px-[50px] md:px-[70px] max-w-[1517px] flex-wrap    gap-[25px] justify-center xl:justify-start">
        {DisastersInfo.disasters.map(({ image, place, area, loss }, index) => (
          <Disasters
            key={index}
            image={image}
            place={place}
            area={area}
            loss={loss}
            width='306px'
            height='253px'
          />
        ))}
      </Contains>

      <div  className="absolute right-0 bottom-0  pr-5 md:pr-[60px] pb-5 md:pb-[30px] lg:pr-[77px] lg:pb-[40px] cursor-pointer">
        <Cheat className={isCheatActive ? "bg-white" : "bg-Saffron"} onClick={toggleCheat}>
          {isCheatActive ? <CheatClose /> : <CheatOpen />}
        </Cheat>
      </div>

      {isCheatActive && (
        <div className={cn('right-0 absolute bottom-0 sm:pr-[60px] pr-[2px] md:pr-[80px] lg:pr-[100px] pb-[65px] md:pb-[75px] lg:pb-[90px] cursor-pointer', )}>
          <CheatBox />
        </div> 
      )}
    </section>
  );
};
