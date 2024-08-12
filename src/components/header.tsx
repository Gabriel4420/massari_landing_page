"use client";
import { Bars3Icon, HomeModernIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#aboutUs" },
    { name: "Strategy", href: "#" },
    { name: "Books", href: "#" },
    { name: "Join Us", href: "#" },
  ];

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-20 transition-colors  duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-24">
          <div className="flex justify-between w-full">
            <div className="flex-shrink-0">
              <img
                className="h-20 w-52"
                src="/logo massari systems.png"
                alt="logo"
              />
            </div>
            <div className="hidden sm:mr-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleMenuItemClick(item.name)}
                  className={`${
                    selectedItem === item.name
                      ? "border-indigo-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } ${
                    isScrolled
                      ? "text-gray-900"
                      : "text-white hover:text-shadow"
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-[#cc9d00] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  } block h-6 w-6`}
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className={`${
                    isScrolled ? "text-black" : "text-white"
                  } block h-6 w-6`}
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block bg-white" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 text-right ">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleMenuItemClick(item.name)}
              className={`${
                selectedItem === item.name
                  ? "border-indigo-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
              } text-black flex flex-col items-end px-1 pt-1 border-b-2 text-sm font-medium"`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
