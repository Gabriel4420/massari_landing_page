import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row lg:flex-row justify-between items-center">
          <p className="absolute lg:bottom-10 text-sm lg:mb-0 mb-4 lg:-mt-12 mt-4">
            Acelerated by{" "}
          </p>
          <div>
            <img
              src="/logo-google-startup.png"
              className="h-28 w-full object-contain p-0"
              alt="Google startup"
            />
          </div>
          <p className="text-sm lg:mb-0 mb-4 -mt-4">
            Development by{" "}
            <Link
              href="https://gabrielrodrigues.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="text-sm text-[#ffc501] underline hover:text-[#ffe387] cursor-pointer">
                Gabriel4420
              </span>
            </Link>
          </p>
          <p className="text-sm py-4 md:py-0 ld:py-0 ">
            &copy; {new Date().getFullYear()} Massari Systems. All rights
            reserved.{" "}
          </p>
          {/* <div className="flex space-x-4">
            <Link href="/privacy-policy" as="/privacy-policy" passHref>
              <span className="text-sm hover:text-gray-400 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-of-service" as="/terms-of-service" passHref>
              <span className="text-sm hover:text-gray-400 cursor-pointer">
                Terms of Service
              </span>
            </Link>
            <Link href="/#contact" as="/contact" passHref>
              <span className="text-sm hover:text-gray-400 cursor-pointer">
                Contact
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
