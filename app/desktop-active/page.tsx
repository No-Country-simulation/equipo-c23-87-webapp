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
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);

  // Close functions
  const closeModal = () => setIsModalOpen(false);
  const closeResumeModal = () => setIsResumeModalOpen(false);
  const closeCongratsModal = () => setIsCongratsModalOpen(false);

  // Function to navigate to the root page
  const returnToHomePage = () => {
    router.push("/"); // Navigate to the root page
  };

  // Modal for showing "Resume" word
  const ResumeModal = () => (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeResumeModal} // Close when clicking outside
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
        className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full"
      >
        <h2 className="text-2xl font-bold">📖 Resume</h2>
        <p className="mt-2 text-lg">
          When referring to your CV in English, the most common terms are:
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2">
          <li>
            <strong>CV (Curriculum Vitae):</strong> Widely understood in British English and in
            academic or research contexts worldwide.
            <br />
            <em>Example:</em> "I am attaching my CV for your review."
          </li>
          <li>
            <strong>Résumé (or Resume):</strong> Primarily used in American English and more common
            in business, corporate, and industry roles.
            <br />
            <em>Example:</em> "Please find my résumé attached."
          </li>
        </ul>
        <p className="mt-4 text-lg">
          <strong>Which Should You Use?</strong>
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>CV:</strong> Use this if you are applying for roles in academia, research, or
            in countries where British English is common (e.g., the UK, Europe, Australia).
          </li>
          <li>
            <strong>Résumé:</strong> Use this for most business, corporate, or non-academic job
            applications, particularly in the United States or Canada.
          </li>
        </ul>
        <button
          onClick={closeResumeModal}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );

  // Modal for showing congratulatory message and return button
  const CongratsModal = () => (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closeCongratsModal} // Close when clicking outside
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
        className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md w-full"
      >
        <h2 className="text-2xl font-bold">Resume</h2>
        <p className="mt-2">Congrats for trying this very first version of the techen flow.</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={returnToHomePage} // Navigate to the root page
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Return to Home Page
          </button>
        </div>
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

      {/* 🔥 Clickable Areas - Open Congrats Modal */}
      <div
        className="absolute top-[18%] left-[33%] w-[35%] h-[35%] cursor-pointer z-20"
        onClick={() => setIsCongratsModalOpen(true)}
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
          <div onClick={(e) => e.stopPropagation()}>
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
      {isCongratsModalOpen && <CongratsModal />}
    </div>
  );
};

export default InteractiveImage;
