import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-800 opacity-75 flex flex-row items-center justify-center">
      <div
        key="1-dot"
        className="bg-blue-600 p-4  w-4 h-4 m-2 rounded-full animate-bounce blue-circle"
      ></div>
      <div
        key="2-dot"
        className="bg-green-600 p-4 w-4 h-4 m-2 rounded-full animate-bounce green-circle"
      ></div>
      <div
        key="3-dot"
        className="bg-red-600 p-4  w-4 h-4 m-2 rounded-full animate-bounce red-circle"
      ></div>
    </div>
  );
};

export default Loader;
