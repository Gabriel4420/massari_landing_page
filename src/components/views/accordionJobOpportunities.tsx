"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { JobApplicationModal } from "@/components/ui";

interface JobOpportunity {
  id: string;
  title: string;
  description: string;
}

interface JobOpportunitiesProps {
  opportunities: JobOpportunity[];
}

const AccordionJobOpportunities: React.FC<JobOpportunitiesProps> = ({
  opportunities,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [selectedJob, setSelectedJob] = useState<{
    id: string;
    title: string;
    description: string;
  } | null>(null);

  const openModal = (job: JobOpportunity) => setSelectedJob(job);
  const closeModal = () => setSelectedJob(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="bg-white text-black pb-28 pt-20 px-8 md:px-5 rounded-lg shadow-lg"
      id="joinus"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Join Our Team</h2>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center">
        <div className="md:w-1/2 lg:w-1/2 w-full h-full mb-10 flex items-center justify-center text-center">
          <img
            src="/logo massari systems coruja.png"
            className="w-[250px] h-full object-cover lg:object-contain"
            alt="logo"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/2 w-full  lg:mt-0">
          {opportunities.map((opportunity, index) => {
            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-4 mt-0"
              >
                <div
                  className="cursor-pointer bg-[#ffc501] p-4 rounded-lg shadow-md"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-xl text-black font-semibold">
                    {opportunity.title}
                  </h3>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-[#cc9d00] rounded-b-lg">
                    <p className="mb-4">{opportunity.description}</p>
                    <a
                      href="#contact"
                      className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#ffc501] hover:bg-[#fcd967] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Details
                    </a>
                  </div>
                </div>
                {selectedJob && (
                  <JobApplicationModal
                    jobId={selectedJob.id}
                    title={selectedJob.title}
                    description={selectedJob.description}
                    isOpen={!!selectedJob}
                    onClose={closeModal}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AccordionJobOpportunities;
