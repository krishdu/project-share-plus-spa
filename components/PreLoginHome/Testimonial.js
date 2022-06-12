import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  As an Student, this is the perfect product for me. I choose to
                  showcase my all work here.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Jane Doe
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  Monitoring and tracking my improvement anywhere I go and on
                  any platform I use has never been easier.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  John Doe
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  I don't regret spending time with this product. One of the
                  best platform I use!.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">
                  Krishnendu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
