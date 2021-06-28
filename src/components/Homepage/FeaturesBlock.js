import React from "react";
import {
  FaSave,
  FaStar,
  FaFileAlt,
} from "react-icons/fa";

function FeaturesBlocks() {

  return (
    <section className="relative">
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-secondary pointer-events-none" 
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-white transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="md:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter tracking-wide mb-4">
              Features
            </h2>
            <p className="text-xl text-gray-600 italic">"Make beautiful invoices in just one click!"</p>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-sm hover:shadow-md cursor-pointer">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-primary"
                    width="64"
                    height="64"
                    rx="32"
                  />

                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <g className="text-2xl text-white">
                      <FaFileAlt />
                    </g>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 py-2">
                Quick Easy Invoice
              </h4>
              <p className="text-gray-600 text-center">
                Create professional invoices instantly without any hassle of
                re-entering data the second time.
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-sm hover:shadow-md cursor-pointer">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-primary"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <g className="text-2xl text-white">
                      <FaStar />
                    </g>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 py-2">
                Add Custom Fields
              </h4>
              <p className="text-gray-600 text-center">
                Customizable invoice format to add more relevant information and
                columns. Every field is editable.
              </p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-sm hover:shadow-md cursor-pointer">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect
                    className="fill-current text-primary"
                    width="64"
                    height="64"
                    rx="32"
                  />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <g className="text-2xl text-white">
                      <FaSave />
                    </g>
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 py-2 text-center">
                Easy to Manage
              </h4>
              <p className="text-gray-600 text-center">
                Speed up the invoicing process by saving data on any device and
                reuse this data template later with a few clicks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
