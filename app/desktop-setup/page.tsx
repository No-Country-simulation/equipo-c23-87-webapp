"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import '../ui/global.css';

const InteractiveImage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  interface ModalProps {
    onClose: () => void;
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    router.push("/desktop-active");
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const Modal = ({ onClose }: ModalProps) => {
    return (
      <div
        className="relative inset-0 flex items-center justify-center"
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Image
            src="/note_details.png"
            alt="Interactive Desk Setup"
            width={500}
            height={600}
            className="object-contain"
          />
          <div
            className="absolute top-[6%] left-[49.5%] w-[5%] h-[5%] bg-red-500 opacity-50 cursor-pointer z-20"
            onClick={() => setIsResumeModalOpen(true)}
          ></div>
          <div className="flex justify-center mt-4">
            <button
              onClick={onClose}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ResumeModal = ({ onClose }: ModalProps) => {
    return (
      <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose} // Close when clicking outside
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-2xl font-bold">📖 Resume</h2>
        <p className="mt-2 text-lg">Saved word</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
    );
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="fixed inset-0 -z-50">
        <Image src="/tail.png" alt="Interactive Desk Setup" fill priority style={{ objectFit: "cover" }} />
      </div>
      <div className="absolute top-0 right-4 w-[400px] h-[300px] z-10">
        <Image src="/board.png" alt="Board" width={400} height={300} className="object-contain" />
        <div
          className="absolute top-[35%] left-16 w-[50px] h-[50px] z-20 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image src="/note.png" alt="Note" width={50} height={50} className="object-contain" />
          <div className="absolute -top-[80%] -right-2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full animate-bounce">
            Click Me!
          </div>
        </div>
      </div>
      <button
        className="absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
        onClick={() => router.back()}
      >
        <ArrowLeftCircleIcon className="w-10 h-10" />
      </button>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      {isResumeModalOpen && <ResumeModal onClose={handleCloseResumeModal} />}
    </div>
  );
};

export default InteractiveImage;

