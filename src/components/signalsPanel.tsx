import React from "react";
import { ChartLine, Code, PiggyBank, QuestionMark, SketchLogo } from "@phosphor-icons/react/dist/ssr";


const ServiceCard = ({ icon, title, details }: any) => {
    return (
      <>
        <div className="w-full h-full flex items-stretch">
          <div className="mb-5 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
            <div className="mb-4 flex items-center justify-center ">
              {icon}
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
              {title}
            </h4>
            <p className="text-body-color dark:text-dark-6">{details}</p>
          </div>
        </div>
      </>
    );
  };

const SignalsPanel: React.FC = () => {
  return (
    <div className="overflow-hidden text-base h-screen bg-[#cc9d00] text-gray-800 w-full pl-3 pr-10 py-10 ">
        <h2 className="text-3xl font-bold mt-10 text-white text-center">About Our Job</h2>
      <div className="mx-4 grid grid-cols-4 text-center py-10 gap-2 w-full flex-wrap">
        <ServiceCard
          title="Signals"
          details="Massari developed an algorithm analyzing 25 years of US Stocks data at 5-minute intervals, identifying statistically significant patterns, or 'signals'"
          icon={<Code className="text-[#cc9d00]" size={40} />}
        />
        <ServiceCard
          title="What are signals?"
          details="Signals are patterns in stock prices, or event-driven trade opportunities"
          icon={<QuestionMark className="text-[#cc9d00]" size={40} />}
        />
        <ServiceCard
          title="Our Model"
          details="Signals that pass through a statistical threshold, showing they are strong enough, are added to our model."
          icon={<ChartLine className="text-[#cc9d00]" size={40} />}
        />
        <ServiceCard
          title="Billions of signals"
          details="Our system is ready to search for multiple billions of signals, but we cant afford it. Preliminary tests show very promising  signs"
          icon={<SketchLogo className="text-[#cc9d00]" size={40} />}
        />
        <ServiceCard
          title="Future"
          details="Our aim is to establish a hedge fund soon"
          icon={<PiggyBank className="text-[#cc9d00]" size={40} />}
        />
      </div>
    </div>
  );
};

export default SignalsPanel;
