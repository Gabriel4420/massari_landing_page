import React from "react";

interface CardProps {
  imageUrl: string;
  altImageText: string;
}

export default function Card({ imageUrl, altImageText }: CardProps) {
  return (
    <div className="rounded-lg overflow-hidden border shadow-lg flex flex-col w-[250px]">
      <a href="#"></a>
      <div className="relative">
        <a href="#">
          <img className="w-full" src={imageUrl} alt={altImageText} />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        {/* <a href="#!">
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            Cooking
          </div>
        </a> */}
      </div>
      <div className="px-6 py-4 mb-auto bg-white    ">
        <a
          href="#"
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 text-gray-800"
        >
          Simplest Salad Recipe ever
        </a>
        <p className="text-gray-800 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
}
