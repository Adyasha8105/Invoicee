import React from "react";
import Lottie from "lottie-react-web";
import { useHistory } from "react-router";
import { LandingLottie } from "../Lottie";

function HeroHome() {
  const history = useHistory();

  const handleInvoice = (e) => {
    e.preventDefault();
    history.push("/invoice");
  };

  return (
    <section className="text-gray-700 body-font ">
      <div className="container mx-auto flex px-5 md:py-20 max-w-7xl md:flex-row flex-col items-center md:mt-10 py-40">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 sm:mt-15 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <button className="inline-flex text-gray-100 text-white bg-primary border-0 py-2 px-4 font-semibold rounded-full text-xs opacity-50">
            Alpha version
          </button>
          <h1 className="title-font sm:text-6xl text-4xl mb-2 font-extrabold leading-tighter tracking-tighter text-gray-900 tracking-wide mt-4">
            Create Fast{" "}
          </h1>
          <h1 className="title-font sm:text-6xl text-4xl mb-4 font-extrabold leading-tighter tracking-tighter text-gray-900 tracking-wide">
            invoices online{" "}
          </h1>
          <p className="leading-relaxed text-md text-gray-600">
            Our application allows you rapidly to make invoices with our
            attractive invoice templates for various fields. The invoices you
            make can be saved and downloaded as a PDF.
          </p>
          <p className="font-bold mt-2 mb-8 text-xl">
            Did we say its free of cost!
          </p>
          <div className="flex md:flex-row flex-col md:space-x-7">
            <button
              onClick={handleInvoice}
              className="inline-flex text-white bg-primary border-0 py-3 px-12 font-semibold focus:outline-none rounded text-lg hover:opacity-75"
            >
              Create Now
              <span className="inline-block pt-2">
                <svg
                  className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fillRule="nonzero"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-2/5">
          <Lottie options={{ animationData: LandingLottie }} width={590} />
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
