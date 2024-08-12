import { CaretDoubleRight } from "@phosphor-icons/react/dist/ssr";
import React from "react";

// import { Container } from './styles';

const OurServices: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="services">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 flex text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <CaretDoubleRight className="mr-2" size={32} /> Signal-Based Intel
          </h2>
          <p className="mb-4">
            Our Artificial Intelligence is trained on strategy tatistically
            significant trading signals, or microscopic patterns that have
            repeated consistently over time.
          </p>
          <h2 className="mb-4 flex text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <CaretDoubleRight className="mr-2" size={32} /> Compute intensive
            mining
          </h2>
          <p>
            The signal research process is a comprehensive, multi-day journey,
            powered by state-of-the-art NVIDIA GPU&apos; Strategys. It
            rigorously tests over 2 billion pattern combinations, ensuring that
            only the most effective and reliable signals are selected.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="shadow w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="shadow mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};
export default OurServices;
