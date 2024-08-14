import React from "react";
import Bubble from "./bubble";
import SignalsPanel from "./signalsPanel";

const About1 = () => {
  return (
    <>
      <section
        className="overflow-hidden pt-20 px-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#f7f7f7]"
        
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-10 md:-mx-4 lg:-mx-4">
            <div className="lg:w-1/2 md:w-1/2 w-full lg:px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4 md:mx-0">
                <div className="w-full lg:px-3 px-3 sm:px-2 xl:w-1/2">
                  <div className="py-3 z-10 sm:py-4 md:py-5">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="shadow w-full rounded-2xl"
                    />
                  </div>
                  <div className="lg:py-3 z-10 sm:py-4 md:py-5">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="shadow w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full lg:px-3 sm:px-4 xl:w-1/2 md:py-5">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="shadow w-full rounded-2xl"
                    />
                    <Bubble />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center lg:px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                {/*  <span className="block mb-4 text-lg font-semibold text-[#cc9d00]">
                  About us
                </span> */}
                <h2 className="mb-5 text-3xl font-bold text-[#000] sm:text-[40px]/[48px]">
                  How We See The Market
                </h2>
                <p className="mb-5 text-base text-gray-800 ">
                  We view the market as a complex collection of irregular
                  fractals, comprising countless microscopic patterns that
                  emerge probabilistically. These individual elements intertwine
                  to create a highly intricate structure.
                </p>

                <a
                  href="#"
                  className="inline-flex items-center bg-[#ffc501] justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About1;
