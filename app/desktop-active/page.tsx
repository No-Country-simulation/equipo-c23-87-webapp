"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import '../ui/global.css';

const InteractiveImage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define the type for the Modal component's props
  interface ModalProps {
    onClose: () => void; // onClose is a function that takes no arguments and returns void
  }

  // Function to handle modal close and navigation
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    router.push("/desktop-active"); // Navigate to /desktop-active
  };

  // Modal Component
  const Modal = ({ onClose }: ModalProps) => {
    return (
      <div
        className="relative inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={onClose} // Close modal when clicking outside
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Image
            src="/note_details.png"
            alt="Interactive Desk Setup"
            width={500}
            height={600}
            className="object-contain"
          />

          {/* 🔥 Clickable Areas */}
          <div
            className="absolute top-[6%] left-[49.5%] w-[5%] h-[5%] bg-red-500 opacity-50 cursor-pointer z-20"
          ></div>

          {/* Close Button */}
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

  return (
    <div className="relative w-screen h-screen">
      {/* ✅ Background Image - Using next/image */}
      <div className="fixed inset-0 -z-50">
        <Image
          src="/tail.png"
          alt="Interactive Desk Setup"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* 🖼️ Board Image - Top Left Corner */}
      <div className="absolute top-0 right-4 w-[400px] h-[300px] z-10">
        <Image
          src="/board.png"
          alt="Board"
          width={400}
          height={300}
          className="object-contain"
        />

        {/* 📄 Note Image - Top Left Corner of Board */}
        <div
          className="absolute top-[35%] left-16 w-[50px] h-[50px] z-20 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/note.png"
            alt="Note"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      {/* 🔙 Back Arrow - Always Visible */}
      <button
        className="absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
        onClick={() => router.back()}
      >
        <ArrowLeftCircleIcon className="w-10 h-10" />
      </button>

      {/* Render Modal Conditionally */}
      {isModalOpen && <Modal onClose={handleCloseModal} />}

      {/* 🔥 Clickable Areas */}
       <div
        className="absolute top-[18%] left-[33%] w-[35%] h-[35%] cursor-pointer z-20"
        onClick={() => alert("Dektop")}
       > 
       {/* 🎈 "Click Me" Notification */}
       <div className="absolute top-[1%] right-16 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full animate-bounce">
        Click Me!
       </div>
      </div>

      <div
        className="absolute top-[60%] left-[69.5%] w-[4%] h-[15%] cursor-pointer z-20"
        onClick={() => alert("Dictionary")}
       > 
       {/* 🎈 "Click Me" Notification */}
       <div className="absolute top-[20%] bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full animate-bounce">
        Click Me!
       </div>
      </div>

    </div>
  );
};

export default InteractiveImage;
