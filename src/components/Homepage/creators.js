import React, { useState } from "react";

function Creators() {
  let primaryThemeColor = "#0B7EE1";

  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor={primaryThemeColor} offset="77.402%" />
              <stop stopColor={primaryThemeColor} offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1600" cy="128" r="128" />
            <circle cx="350" cy="280" r="98" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="md:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter  tracking-wider mb-4 relative">
              How Invoicee works
            </h2>
            <p className="text-xl text-gray-600 relative">Short Description</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Creators;
