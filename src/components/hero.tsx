// components/Hero.tsx
import { Coffee, Lightning } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-center h-1/2 lg:h-screen bg-2  bg-[#ffc501] bg-cover py-12">
      <div className="max-w-7xl mx-auto py-20 mt-20 px-4  sm:py-16 sm:px-3 lg:px-8 lg:flex lg:flex-col lg:items-center lg:justify-between">
        <h1 className="text-xl hidden lg:block md:block lg:text-6xl text-center font-normal tracking-tight text-gray-900 md:text-6xl">
          <span className="block xl:inline capitalize">
            A Hedge fund that uses a proprietary algorithm for
          </span>
          &nbsp;
          <span className="block text-white xl:inline">Trading Decisions</span>
        </h1>

        <h1 className="text-3xl lg:hidden  md:hidden text-center font-normal tracking-tight text-gray-900 md:text-6xl">
          <span className="xl:inline capitalize">
            A Hedge fund that uses a proprietary algorithm for
          </span>
          &nbsp;
          <span className=" text-white inline">Trading Decisions</span>
        </h1>
        <div className="mt-8 flex items-center justify-center lg:py-28 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#cc9d00] hover:bg-[#b28900]"
            >
              <Coffee size={22} className="mr-5" /> Let&apos;s Talk
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#services"
              className="inline-flex scroll-smooth capitalize items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#cc9d00] bg-white hover:bg-indigo-50"
            >
              <Lightning size={22} className="mr-2" /> Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
