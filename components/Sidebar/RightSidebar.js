import React from "react";
import { BiSearch } from "react-icons/bi";
import TopContributors from "../Users/TopContributors";

const RightSidebar = () => {
  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Top Contributors</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
        </div>
      </div>
      <TopContributors />
    </div>
  );
};

export default RightSidebar;
