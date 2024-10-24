import React from "react";
import { Container } from "../../common/Container";

export const IncidentPage3 = () => {
  return (
    <section>
      <Container>
        <div className="font-onest">
          <h2 className="font-bold text-2xl text-Rich-Black ">
            Let’s give the incident a title?
          </h2>
          <p className="text-sm text-Gray pt-3 pb-6">
            Make a title that will easily identify the incidents
          </p>
          <input
            type="text"
            placeholder="Add title here"
            className="border border-Light-Gray rounded-[6px] py-3 px-[10px] text-[12px] leading-[15px] w-full focus:outline-none focus:ring-gray-500"
          />
        </div>

        <div className="pt-[25px]">
          <h2 className="font-bold text-2xl text-Rich-Black ">
            Describe what happened during the incident?
          </h2>
          <p className="text-sm text-Gray pt-3 pb-6">
            Share some information about the incident. The when, where, how.
          </p>
          <textarea
            className="w-full h-[127px] resize-none border border-Light-Gray rounded-[6px] px-[10px] py-5 text-Gray bg-[#f4f4f5] focus:outline-none focus:ring-gray-400"
            placeholder="Type here"
          ></textarea>
        </div>
      </Container>
    </section>
  );
};