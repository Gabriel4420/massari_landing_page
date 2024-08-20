import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">
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
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Massari Systems. All rights
            reserved.{" "}
          </p>
          <div className="flex space-x-4">
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
            <Link href="/contact" as="/contact" passHref>
              <span className="text-sm hover:text-gray-400 cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
