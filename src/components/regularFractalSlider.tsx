import Carousel from "./carousel";

export const RegularFractalSlider = () => {
  const images = [
    "/banner/regular-vs-irregular-1.png",
    "/banner/fractal-view-of-market.png",
    "/banner/fractal-view-of-market-2.png",
    "/banner/risks.png",
  ];

  return (
    <div className="flex lg:px-14 bg-white pb-20 py-10 flex-col items-center justify-center max-w-7xl mx-auto">
      <span className="block mb-4 text-lg font-semibold text-[#cc9d00]">
        Market Analysis
      </span>
      <h2 className="mb-10 text-3xl font-bold text-[#000] sm:text-[40px]/[48px]">
        Regular VS Irregular Fractals
      </h2>
      <Carousel images={images} />
    </div>
  );
};
