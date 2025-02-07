"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import "../ui/global.css";

const InteractiveImage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Close functions
  const closeModal = () => setIsModalOpen(false);
  const closeResumeModal = () => setIsResumeModalOpen(false);

  // Modal for showing "Resume" word
  const ResumeModal = () => (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeResumeModal} // Close when clicking outside
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <h2 className="text-2xl font-bold">📖 Resume</h2>
        <p className="mt-2 text-lg">Saved word</p>
        <button
          onClick={closeResumeModal}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative w-screen h-screen">
      {/* ✅ Background Image */}
      <div className="fixed inset-0 -z-50">
        <Image src="/tail.png" alt="Interactive Desk Setup" fill priority style={{ objectFit: "cover" }} />
      </div>

      {/* 🖼️ Board Image */}
      <div className="absolute top-0 right-4 w-[400px] h-[300px] z-10">
        <Image src="/board.png" alt="Board" width={400} height={300} className="object-contain" />

        {/* 📄 Note Image - Click to Open Modal */}
        <div
          className="absolute top-[35%] left-16 w-[50px] h-[50px] z-20 cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <Image src="/note.png" alt="Note" width={50} height={50} className="object-contain" />
        </div>
      </div>

      {/* 🔙 Back Button */}
      <button
        className="absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600 transition"
        onClick={() => router.back()}
      >
        <ArrowLeftCircleIcon className="w-10 h-10" />
      </button>

      {/* 🔥 Clickable Areas - Open Resume Modal */}
      <div
        className="absolute top-[18%] left-[33%] w-[35%] h-[35%] cursor-pointer z-20"
        onClick={() => setIsResumeModalOpen(true)}
      >
        <div className="absolute top-[1%] right-16 bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full animate-bounce">
          Click Me!
        </div>
      </div>

      <div
        className="absolute top-[60%] left-[69.5%] w-[4%] h-[15%] cursor-pointer z-20"
        onClick={() => setIsResumeModalOpen(true)}
      >
        <div className="absolute top-[20%] bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full animate-bounce">
          Click Me!
        </div>
      </div>

      {/* 🏆 Render Modals Conditionally */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-lg">
            <Image src="/note_details.png" alt="Note Details" width={500} height={600} className="object-contain" />
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isResumeModalOpen && <ResumeModal />}
    </div>
  );
};

export default InteractiveImage;

