"use client";

import React from "react";
import '../ui/global.css';
import Image from 'next/image';
import Header from "./Header";
import CylinderLevel from "./CylinderLevel";
import { steps } from "../lib/steps";

export default function WebDevPath() {
  const handleLevelClick = (level: number) => {
   alert(`Level ${level} clicked!`);
  }

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
        <div className="flex space-x-4">
          <Image src="/character.png" alt="Character" className="hidden md:block" width={90} height={90} />
        </div>

        {/* Dashed Line & Steps */}
        <div className="flex flex-col items-center space-y-10">
         {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
           {/* Dashed Line */}
           {step.id !== 1 && <div className="h-10 border-l-2 border-dashed border-gray-400"></div>}
           {/* Step Circle */}
           <CylinderLevel level={step.id} status="locked" onClick={() => handleLevelClick(step.id)} />
           {/* Step Label */}
           <p className="mt-2 text-sm text-gray-700">{step.name}</p>
          </div>
         ))}
       </div>

      </div>
    </div>
  );
}

