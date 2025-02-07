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

