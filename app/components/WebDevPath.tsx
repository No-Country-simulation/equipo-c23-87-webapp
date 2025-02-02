import React from "react";
import '../ui/global.css';
import Image from 'next/image';
import Header from "./Header";

export default function WebDevPath() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">

      <Header />

      {/* Header Section */}
      <div className="w-full bg-green-100 p-4 text-center">
        <h1 className="text-xl font-bold">Web dev Path</h1>
        <p className="text-gray-600">
          Advance through different levels to enhance your technical English as a Web Developer!
        </p>
      </div>

      {/* Path Container */}
      <div className="relative flex flex-col items-center mt-10 space-y-10">
        {/* Application Submission */}
        <div className="flex items-center space-x-4">
          <Image src="/character.png" alt="Character" className="hidden md:block" width={90} height={90} />
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <button className="text-green-600 text-lg">▶</button>
            </div>
            <span className="text-lg font-semibold">Application Submission</span>
          </div>
        </div>
<div className="h-10 border-l-2 border-dashed border-gray-400"></div>

        {/* Dashed Line & Steps */}
        <div className="flex flex-col items-center space-y-10">
          {[
            "Screening Stage",
            "Technical Interview",
            "Behavioral and Cultural Fit Interviews",
            "Offer Stage",
            "Onboarding",
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Dashed Line */}
              {index !== 0 && <div className="h-10 border-l-2 border-dashed border-gray-400"></div>}
              {/* Step Circle */}
              <div className="w-16 h-8 bg-gray-700 rounded-lg shadow-md"></div>
              {/* Step Label */}
              <p className="mt-2 text-sm text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

