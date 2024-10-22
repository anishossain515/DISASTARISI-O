import React from "react";
import { SecondButton } from "../common/SecondButton";
import { cn } from "../lib/Cn";

export const CheatBox = () => {
  return (
    <section className={cn("sm:w-[331px] w-[300px] h-[475px] m-2 z-50 ")}>
      <div className="font-onest rounded-[12px]">
        <h1 className="font-[700px] text-[18px] rounded-tr-[12px] rounded-tl-[12px] text-[#FAFAFA] bg-Saffron px-[15px] py-[20px]">
          Chat with Cypher
        </h1>

        {/* cheat option */}
        <div className="bg-[#F4F4F5] rounded-bl-[12px] rounded-br-[12px]">
         {/* first cheat */}
          <div className="pt-[27px] px-[15px] pb-[15px] pl-[82px] sm:pl-[88px]">
            <div className="bg-[#3f3f46] text-white text-[12px] w-[200px] sm:w-[213px] rounded-[7px] px-[13px] py-[5px] ">
              <p>Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
          </div>
           {/* first cheat */}

            {/* second , third cheat */}
          <div className=" space-y-[15px] px-[15px]">
            <div className="bg-[#f4f4f5] border border-Light-Gray text-Gray text-[12px]  sm:w-[213px] w-[200px] rounded-[7px] px-[13px] py-[5px] ">
              <p>Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
            <div className="bg-[#f4f4f5] border border-Light-Gray text-Gray text-[12px]  sm:w-[213px] w-[200px] rounded-[7px] px-[13px] py-[5px] ">
              <p>Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
          </div>
        {/* second , third cheat */}
        
          {/* fourth cheat */}
          <div className="pt-[15px]  pl-[82px] sm:pl-[88px]">
            <div className="bg-[#27272a] text-white text-[12px]  sm:w-[213px] w-[200px] rounded-[7px] px-[13px] py-[5px] ">
              <p>Lorem ipsum dolar sit general sac mascho werho</p>
            </div>
          </div>
        {/* fourth cheat */} 

          <div className="pt-[15px]">
            <div className="px-[15px]">
              <input
                type="text"
                placeholder="Enter your question..."
                className="border border-[#E5E7EB]  py-[12px] px-[10px] bg-transparent sm:w-[301px] w-[250px] h-[42px] text-[12px] focus:outline-none focus:ring-gray-400 "
              />
            </div>

            <div className="flex items-center justify-between px-2.5 sm:px-[15px] py-[15px]">
              <div className="flex items-center gap-[7px]">
                <img src="/camera.png" alt="camera" />
                <img src="/gallary.png" alt="gallary" />
                <img src="/info.png" alt="info" />
              </div>

              <button className="bg-Saffron text-white py-[5px] px-[25px] rounded-[20px]">
                Send
              </button>
            </div>
          </div>
        </div>
        {/* cheat option */}
      </div>
    </section>
  );
};
