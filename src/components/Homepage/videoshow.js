import React, { useState } from "react";
import YouTube from "react-youtube";
import Modal from "./utils/Modal";
import { HowitworkLottie } from "../Lottie";
import Lottie from "lottie-react-web";

function Creators() {
  let primaryThemeColor = "#0B7EE1";

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <section className="relative">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none "
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
              <stop stopColor="#1F488A  " offset="0%" />
              <stop stopColor={primaryThemeColor} offset="77.402%" />
              <stop stopColor={primaryThemeColor} offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1600" cy="150" r="128" />
            <circle cx="350" cy="350" r="98" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-20 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="md:text-5xl text-4xl font-extrabold leading-tighter tracking-tighter  tracking-wider mb-4 relative">
              How Invoicee works
            </h2>
            <p className="text-xl text-gray-600 relative">An explaination of how to use our application to make invoive.</p>
          </div>

          <div className="relative text-xl font-medium py-10 md:px-10  ">
            <div className="relative items-start ">
              <div className="text-center md:mx-0 ">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg
                    className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-primary"
                    viewBox="0 0 64 64"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                </div>
                <div className="flex justify-center mb-8 border-4 border-gray-200 rounded bg-white">
                  <div className="flex flex-col justify-center">
                    <div className="lg:max-w-lg lg:w-3/5 md:w-2/5 self-center m-10">
                      <Lottie options={{ animationData: HowitworkLottie }} />
                      {/* <img className="mx-auto" src={require('../../Images/Howitwork.svg').default} width="768" height="432" alt="Hero" /> */}
                    </div>
                  </div>
                  <button
                    className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setVideoModalOpen(true);
                    }}
                    aria-controls="modal"
                  >
                    <svg
                      className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                      <path d="M10 17l6-5-6-5z" />
                    </svg>
                    <span className="ml-3 text-md">Watch the demo video</span>
                  </button>
                </div>

                <Modal
                  id="modal"
                  ariaLabel="modal-headline"
                  show={videoModalOpen}
                  handleClose={() => setVideoModalOpen(false)}
                >
                  <div className="relative">
                    <YouTube
                      className="inline h-screen w-full p-20"
                      // videoId="sicTI_2pV6k"   // add video id here :)
                    />
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creators;
