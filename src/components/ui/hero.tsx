// components/Hero.tsx
import { Coffee, Lightning } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  //bg-[#ffc501]
  return (
    <section className="bg-center bg-cover to-slate-400  h-1/2 bg-[#ffc501] bg-no-repeat py-5" id="Home">
      <div className="max-w-7xl mx-auto py-10 mt-40 lg:mt-20 px-4  sm:py-16 sm:px-3 lg:px-8 lg:flex lg:flex-col lg:items-center lg:justify-between">
        <div className="flex flex-col items-center w-full justify-center">
          <h1 className="text-xl hidden lg:block md:block lg:text-6xl text-center font-normal tracking-tight text-gray-900 md:text-6xl drop-shadow-lg">
            <span className="block xl:inline capitalize">
              A Hedge fund that uses a proprietary algorithm for
            </span>
            &nbsp;
            <span className="block text-white xl:inline drop-shadow-lg">
              Trading Decisions
            </span>
          </h1>

          <h1 className="text-3xl -mt-24 md:hidden lg:hidden drop-shadow-lg text-center font-normal tracking-tight text-gray-900 md:text-6xl">
            <span className="xl:inline capitalize">
              A Hedge fund that uses a proprietary algorithm for
            </span>
            &nbsp;
            <span className=" text-white inline drop-shadow-lg">
              Trading Decisions
            </span>
          </h1>

          <div className="mt-8 flex items-center justify-center lg:py-28 lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="#contact"
                as="#contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#cc9d00] hover:bg-[#b28900]"
              >
                <Coffee size={22} className="mr-5" /> Let&apos;s Talk
              </Link>
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
    </section>
  );
};

export default Hero;
