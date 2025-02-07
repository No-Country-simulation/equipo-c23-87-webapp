"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"; 
import '../ui/global.css';

const InteractiveImage = () => {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen">
      {/* ✅ Background Image - Forced Behind Everything */}
      <div className="fixed inset-0 -z-50">
        <Image 
          src="/tail.png" 
          alt="Interactive Desk Setup" 
          fill 
          priority
          className="object-cover"
        />
      </div>

      {/* 🖼️ Board Image - Top Left Corner */}
      <div className="absolute top-0 right-4 w-[400px] h-[300px] z-10"> {/* Adjust size as needed */}
        <Image
          src="/board.png"
          alt="Board"
          width={400} // Adjust width to match the size of the board
          height={300} // Adjust height to match the size of the board
          className="object-contain" // Ensures the image fits within the container
        />
        {/* 📄 Note Image - Top Left Corner of Board */}
        <div className="absolute top-[35%] left-16 w-[50px] h-[50px] z-20"> {/* Adjust size as needed */}
          <Image
            src="/note.png"
            alt="Note"
            width={50} // Adjust width to match the size of the note
            height={50} // Adjust height to match the size of the note
            className="object-contain" // Ensures the image fits within the container
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

      {/* 🔥 Clickable Areas */}
      <div
        className="absolute top-[20%] left-[30%] w-[10%] h-[10%] bg-red-500 opacity-50 cursor-pointer z-20"
        onClick={() => router.push("/monitor-setup")}
      ></div>

      <div
        className="absolute top-[50%] left-[60%] w-[15%] h-[15%] bg-blue-500 opacity-50 cursor-pointer z-20"
        onClick={() => router.push("/keyboard-setup")}
      ></div>
    </div>
  );
};

export default InteractiveImage;

