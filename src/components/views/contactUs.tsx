"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "../ui/formContact";

const ContactUs: React.FC = () => {
  return (
    <motion.section
      className="bg-[#ffc501] text-white lg:py-24 py-16 px-24 md:px-16 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="contact"
    >
      <section
        className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-center"
        id="contact"
      >
        {/* Texto e Título */}
        <div className="md:w-full  mb-8 md:mb-0">
          <h2 className="text-xl text-center lg:text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="lg:text-lg text-sm text-center mb-6">
            Have questions or need help? Contact us via the form or through our
            support channels. We&apos;re here to help you!
          </p>
          <p className="lg:text-lg text-sm text-center ">
            Email us at{" "}
            <Link
              href="mailto:raphael.azevedo@massarisystems.com"
              className="text-black font-bold underline"
            >
              raphael.azevedo@massarisystems.com
            </Link>
          </p>
        </div>

        {/* Formulário de Contato */}
        {/*  <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg text-[#ffc501]"> */}
        {/* <form action="#">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc501]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc501]"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc501]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#ffc501] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form> */}
        {/*  <ContactForm /> */}
        {/* </div> */}
      </section>
    </motion.section>
  );
};

export default ContactUs;
