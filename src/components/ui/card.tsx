"use client";
import React, {useState} from "react";
import { Button, Modal } from 'flowbite-react';
import { X } from 'phosphor-react';
interface CardProps {
  imageUrl: string;
  altImageText: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Card({
  imageUrl,
  altImageText,
  title,
  description,
}: CardProps) {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  
  return (
    <>
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      <div className="relative cursor-pointer" onClick={openModal}>
        <img src={imageUrl} alt={altImageText} className="w-full h-96 object-contain" />
        {title && (
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-xl font-bold text-white">{title}</h2>
          </div>
        )}
      </div>
      <div className="p-4">
        {description && (
          <p className="text-gray-700 text-base">
            {description}
          </p>
        )}
      </div>
    </div>

    {/* Modal para Zoom */}
    <Modal show={isOpen} onClose={closeModal} size="3xl">
      <Modal.Body >
        <img src={imageUrl} alt={altImageText} className="w-full h-auto object-cover rounded-lg" />
      </Modal.Body>
      <Modal.Footer>
          <Button onClick={closeModal}>
            <X className="text-[#cc9d00]" size={32}/>
          </Button>
        </Modal.Footer>
    </Modal>
  </>
  );
}
