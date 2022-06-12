import React from "react";

const Jumbotron = () => {
  return (
    <>
      <div
        className="py-20"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Smart Project Sharing Platform!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Showcase your best to the WORLD.
          </h3>

          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Login Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
