"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface JobOpportunity {
  title: string;
  description: string;
  link: string;
}

interface JobOpportunitiesProps {
  opportunities: JobOpportunity[];
}

const AccordionJobOpportunities: React.FC<JobOpportunitiesProps> = ({
  opportunities,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <div className="bg-[#ffc501] text-white pb-28 pt-20 px-8 md:px-16 rounded-lg shadow-lg" id="joinus">
      <h2 className="text-4xl font-bold mb-12 text-center">Join Our Team</h2>
      <div className="flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center text-center">
          <img src="/logo massari systems.png" alt="logo"/>
        </div>
        <div className="w-1/2">
          {opportunities.map((opportunity, index) => {
            

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-4"
              >
                <div
                  className="cursor-pointer bg-[#cc9d00] p-4 rounded-lg shadow-md"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-[#cc9d00] rounded-b-lg">
                    <p className="mb-4">{opportunity.description}</p>
                    <a
                      href={opportunity.link}
                      className="text-blue-600 bg-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordionJobOpportunities;
