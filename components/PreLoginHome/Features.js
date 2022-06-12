import React from "react";
const Features = () => {
  return (
    <>
      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src="/assets/report.svg" alt="Reporting" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Trending</h4>
            <p className="text-gray-600 mb-8">
              Get an idea about current trending topics, domain, technology.
              What your peers are working on, etc.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Visibility Metric
            </h4>
            <p className="text-gray-600 mb-8">
              Showcase your best here, and Relax. We will take care of each and
              every minute you have spent. Get others opinion to improve on some
              point.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/assets/health.svg" alt="Monitoring" />
          </div>
        </div>

        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img src="/assets/hire_me.svg" alt="Syncing" />
          </div>
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Hire Me</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Monitoring system can connect with best recruiter of
              your preferred domain.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
