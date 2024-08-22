"use client";
import React, { useState } from "react";
import { Modal } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface JobApplicationModalProps {
  jobId: string;
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  jobId,
  title,
  description,
  isOpen,
  onClose,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch(`/api/apply/${jobId}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully!", {
          position: "top-right",
        });
        onClose();
        toast.success("Application submitted successfully!", {
          position: "top-right",
        }); // Fechar o modal após o sucesso
      } else {
        toast.error("Failed to submit application. Please try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <p className="mb-4 text-gray-800">{description}</p>
          <form
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="mt-4 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="resume"
                className="block text-sm font-medium text-gray-700"
              >
                Upload Resume (PDF or Word)
              </label>
              <input
                type="file"
                name="resume"
                id="resume"
                accept=".pdf,.doc,.docx"
                required
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default JobApplicationModal;
