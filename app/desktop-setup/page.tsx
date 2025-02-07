"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"; 
import '../ui/global.css';

const InteractiveImage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal Component
  const Modal = ({ onClose }) => {
    return (
      <div 
       className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
       onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Image 
           src="/note_details.png" 
           alt="Interactive Desk Setup" 
           width={400}
           height={300}
         />

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

          {/* 🎈 "Click Me" Notification */}
          <div className="absolute -top-[80%] -right-2 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full animate-bounce">
            Click Me!
          </div>
        </div>
      </div>

      {/* 🔙 Back Arrow - Always Visible */}
      <button 
        className="absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
        onClick={() => router.back()} 
      >
        <ArrowLeftCircleIcon className="w-10 h-10" />
      </button>

      {/* 🔥 Clickable Areas */}
      <div
        className="absolute top-[20%] left-[30%] w-[10%] h-[10%] bg-red-500 opacity-50 cursor-pointer z-20"
        onClick={() => router.push("/monitor-setup")}
      ></div>

      <div
        className="absolute top-[50%] left-[60%] w-[15%] h-[15%] bg-blue-500 opacity-50 cursor-pointer z-20"
        onClick={() => router.push("/keyboard-setup")}
      ></div>

      {/* Render Modal Conditionally */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default InteractiveImage;
