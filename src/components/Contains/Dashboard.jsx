import React, { useState } from "react";
import { Disasters } from "../CommonCotains/Disasters";
import DisastersInfo from "../Json Data/Data.json";
import { Contains } from "./Contains";
import { CheatClose, CheatOpen } from "../lib/Icon";
import { Cheat } from "../common/Cheat";
import { CheatBox } from "./CheatBox";
import { cn } from "../lib/Cn";
import { NavDetails } from "../CommonCotains/Navber/NavDetails";

export const Dashboard = () => {
  const [isCheatActive, setIsCheatActive] = useState(false);

  const toggleCheat = () => {
    setIsCheatActive((prev) => !prev);
  };



  return (
    <>
      <NavDetails
        NavInfo="Welcome back"
        NavName="Dashboard"
        FirstBtnInfo="Sort By: Date modified"
        SecondBtnInfo="Cypher AI"
        P='text-[12px]'
        H='text-[26px]'
      />

      <section className="mt-10">
        <Contains className="flex relative px-[50px] md:px-[70px] max-w-[1517px] flex-wrap    gap-[25px] justify-center xl:justify-start">
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

        <div className="fixed bottom-8 right-2 sm:bottom-10 sm:right-10">
          <Cheat
            className={isCheatActive ? "bg-white" : "bg-Saffron"}
            onClick={toggleCheat}
          >
            {isCheatActive ? <CheatClose /> : <CheatOpen />}
          </Cheat>
        </div>

        {isCheatActive && (
          <div
            className={cn(
              "fixed bottom-20 right-1 sm:bottom-24 sm:right-14"
            )}
          >
            <CheatBox />
          </div>
        )}
      </section>
    </>
  );
};
