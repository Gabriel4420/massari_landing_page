"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Strategy() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0, x: isMobile ? 0 : -100 },
    hiddenRight: { opacity: 0, x: isMobile ? 0 : 100 },
    hiddenUp: { opacity: 0, y: isMobile ? 0 : 50 },
  };

  // Hook para detectar quando o elemento entra na visualização
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      className="container mx-auto py-20 px-4 md:px-8 lg:px-12"
      id="strategy"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-black">
        {" "}
        Our Strategy{" "}
      </h2>
      {/* Dobra 1 */}
      <motion.section
        ref={ref1}
        className="flex flex-col md:flex-row items-center mb-12"
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
      >
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src="/signal-based-intel.png"
            alt="Dobra 1"
            className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-gray-900">
            Signal Based Intel
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-4">
            Events that have historically preceded trading opportunities
          </p>
        </div>
      </motion.section>

      {/* Dobra 2 */}
      <motion.section
        ref={ref2}
        className="flex flex-col md:flex-row items-center mb-12"
        initial="hiddenRight"
        animate={inView2 ? "visible" : "hiddenRight"}
        variants={variants}
      >
        <div className="md:w-1/2 md:pr-8 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-gray-900">
            Signal Mining System
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-4">
            Basic Example: Moving Averages Crossover
          </p>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
          <img
            src="/graph-moving-average.png"
            alt="Dobra 2"
            className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 w-full h-auto object-cover"
          />
        </div>
      </motion.section>

      {/* Dobra 3 */}
      <motion.section
        ref={ref3}
        className="flex flex-col md:flex-row items-center mb-12"
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={variants}
      >
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/signals-are-filters.png"
            alt="Dobra 3"
            className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-gray-900">
            Signals Are Filters
          </h2>
          <p className="text-md md:text-lg text-gray-700 mb-4">
            We Want signals that filters huge returns.
          </p>
        </div>
      </motion.section>

      {/* Dobra 4 */}
      <motion.section
        ref={ref4}
        className="flex flex-col md:flex-row items-center my-12"
        initial="hidden"
        animate={inView4 ? "visible" : "hiddenRight"}
        variants={variants}
      >
        <div className="md:w-1/2 md:pr-8 text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-gray-900">
            Signals Quality Control
          </h2>
          <span className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
            Strong statistical evidence.
          </span>
          <p className="text-sm md:text-md text-gray-700 my-4">
            Patterns&#47;Signals with p-values below 0.01 are added to the model
          </p>
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2">
          <img
            src="/graph-2.png"
            alt="Dobra 2"
            className="rounded-xl shadow-lg transform transition duration-500 hover:scale-105 w-full h-auto object-cover"
          />
        </div>
      </motion.section>
    </section>
  );
}
