"use client";

import React, { useState } from "react";
import '../ui/global.css';
import Image from 'next/image';
import Header from "./Header";
import CylinderLevel from "./CylinderLevel";
import { steps } from "../lib/steps";

export default function WebDevPath() {
  // Track the user´s current level with the state
  const [currentLevel, setCurrentLevel] = useState(1);

  const handleLevelClick = (level: number) => {
   // If the level is the current level, move to the next one
   if(level === currentLevel && level < 5) {
    setCurrentLevel((prevLevel) => {return prevLevel + 1});
   }
   alert(`Congrats! you have passed the ${level}, You are currently in ${currentLevel} level 🥳`);
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
         {
          steps.map((step) => {
            // Determine the status of the level
            let status: "available" | "locked";
            if(step.id <= currentLevel) {
              status = "available";
            } else {
	      status = "locked";
	    }
 
            return (
             <div key={step.id} className="flex flex-col items-center">
             {/* Dashed Line */}
             {step.id !== 1 && <div className="h-10 border-l-2 border-dashed border-gray-400"></div>}
             {/* Step Circle */}
             <CylinderLevel level={step.id} status={status} onClick={() => handleLevelClick(step.id)} />
             {/* Step Label */}
             <p className="mt-2 text-sm text-gray-700">{step.name}</p>
            </div>);
           }

          )
         }
       </div>

      </div>
    </div>
  );
}

