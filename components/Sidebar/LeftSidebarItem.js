import React from "react";

const LeftSidebarItem = ({ Icon, Value }) => {
  return (
    <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
      <Icon className="h-8 w-8 text-orange-500" />
      <p className="hidden sm:inline-flex font-medium"> {Value} </p>
    </div>
  );
};

export default LeftSidebarItem;
