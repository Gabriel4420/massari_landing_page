"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const FractalLandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const openModal = (image: string) => {
    setModalImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
        ref={sectionRef}
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Understanding Fractals: Regular vs Irregular
        </h1>
        <p className="text-lg text-gray-800">
          Explore the world of fractals and their practical applications in
          market analysis.
        </p>
      </motion.section>

      {/* Images Section with Modal Trigger */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <img
          src="banner/regular-vs-irregular.png"
          alt="Regular vs Irregular Fractal"
          className="rounded-lg shadow-lg cursor-pointer"
          onClick={() => openModal("banner/regular-vs-irregular.png")}
        />
        <img
          src="banner/regular-vs-irregular-2.png"
          alt="Regular vs Irregular Fractal 2"
          className="rounded-lg shadow-lg cursor-pointer"
          onClick={() => openModal("banner/regular-vs-irregular-2.png")}
        />
      </motion.section>

      {/* Modal for Image Zoom */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.img
            src={modalImage}
            alt="Zoomed Fractal"
            className="rounded-lg shadow-lg w-2/3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      {/* Cards Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
      >
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Regular Fractals</h2>
          <p className="text-gray-800">
            Regular fractals are self-similar patterns that repeat at different
            scales. Learn how these patterns can be used to predict market
            trends.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Irregular Fractals</h2>
          <p className="text-gray-800">
            Irregular fractals, while less predictable, reveal complex behaviors
            in markets. Discover their role in identifying market anomalies.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      {/* <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Link href="#contact">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600">
            Learn How Fractals Can Benefit Your Investments
          </button>
        </Link>
      </motion.section> */}
    </div>
  );
};

export default FractalLandingPage;
