import React from "react";
import { Search } from "../lib/Icon";

export const Input = () => {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 text-gray-400 size-[18px] " />{" "}

      <input
        type="text"
        placeholder="Search incident"
        className="py-2 px-[10px] pl-[35px] pr-[10px] border border-Light-gray w-[250px] sm:w-[190px] rounded-[6px] focus:outline-none focus:ring-gray-400" 
      />
    </div>
  );
};
