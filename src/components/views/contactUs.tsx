'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
  return (
    <motion.section
      className="bg-white text-gray-800 py-24 px-8 md:px-16 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id='contact'
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Texto e Título */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-lg mb-6">
            Have questions or need help? Contact us via the form or through our support channels. We&apos;re here to help you!
          </p>
          <p className="text-lg">
            Email us at <a href="mailto:contact@massarisystems.com" className="text-[#ffc501] underline">contact@massarisystems.com</a>
          </p>
        </div>

        {/* Formulário de Contato */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg text-[#ffc501]">
          <form action="#">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc501]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc501]"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
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
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
