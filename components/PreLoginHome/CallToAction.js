import React, { useState } from "react";
import LoginModal from "./Modal/LoginModal";

const CallToAction = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section style={{ backgroundColor: "#667eea" }}>
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Grow with market
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Get yourself engage with the Smart Project Sharing Platform!
          </h3>
          <button
            className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
            onClick={() => setShowModal(true)}
          >
            Login
          </button>
        </div>
        {showModal && <LoginModal setShowModal={setShowModal} />}
      </section>
    </>
  );
};

export default CallToAction;
