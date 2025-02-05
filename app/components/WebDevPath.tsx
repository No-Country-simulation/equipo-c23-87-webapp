"use client";

import React, { useState, useEffect } from "react";
import '../ui/global.css';
import Image from 'next/image';
import Header from "./Header";
import CylinderLevel from "./CylinderLevel";
import { steps } from "../lib/steps";

export default function WebDevPath() {
  // Track the user´s current level with the state
  const [currentLevel, setCurrentLevel] = useState(1);

  useEffect(() => {
  }, [currentLevel]);

  const handleLevelClick = (level: number) => {
   // If the level is the current level, move to the next one
   if(level === currentLevel && level < 5) {
    setCurrentLevel((prevLevel) => {return prevLevel + 1});   
    alert(`Congrats! you have passed the level ${level}, You advance to the ${currentLevel + 1} level 🥳`);
   } else if(level > currentLevel) {
    alert(`Please, you must first beat to the level ${level - 1}`);
   }
   else { 
    alert(`You´ve already passed this level. You are currently in level ${currentLevel}`);
   }
  }

  return (
    <div className="flex flex-col items-center w-full px-4 min-h-screen bg-white">

      <Header />

      {/* Header Section */}
      <div className="w-full bg-green-100 p-4 text-center rounded-lg">
        <h1 className="text-xl font-bold">Web dev Path</h1>
        <p className="text-gray-600">
          Advance through different levels to enhance your technical English as a Web Developer!
        </p>
      </div>

      {/* Path Container */}
      <div className="relative flex flex-col items-center mt-10 space-y-10">
        {/* Dashed Line & Steps */}
        <div className="flex flex-col items-center gap-8 mt-8">
        {
          steps.map((step, index) => {
            // Determine zigzag pattern
            const isLeft = index % 2 === 0; // Alternate left and right positions
            // Determine the status of the level
            let status: "available" | "locked";
            if(step.id <= currentLevel) {
              status = "available";
            } else {
	      status = "locked";
	    }
 
            return (
             <div key={step.id} className={`flex w-full max-w-lg ${isLeft ? "justify-content" : "justify-end"}`}>
              <div className="relative flex flex-col items-center">
               {/* Dashed Line */}
               {index !== 0 && (
                <div
                 className={`absolute h-4 w-px bg-gray-400 transform ${isLeft ? "rotate-45 -translate-x-30 -translate-y-8" : "-rotate-45 translate-x-30 -translate-y-8"} style={{ borderLeft: "2px dashed gray" }}`}
                >
                </div>)}
               {/* Step Circle */}
               <CylinderLevel level={step.id} status={status} onClick={() => handleLevelClick(step.id)} />
               {/* Step Label */}
               <p className="mt-2 text-sm text-gray-700">{step.name}</p>

               {/* Avatar (Positioned next to the current level) */}
                  {step.id === currentLevel && (
                    <div
                      style={{
                        position: "absolute",
                        top: "50%", // Centers the avatar vertically
                        transform: "translateY(-50%)", // Ensures perfect centering
                        [isLeft ? "left" : "right"]: "4rem", // Pushes it next to the cylinder
                      }}
                    >
                      <Image
                        src="/character.png"
                        alt="Character"
                        className="rounded-full"
                        width={50} // Adjust size as needed
                        height={50}
                      />
                    </div>
                  )}

              </div>
             </div>);
           }

          )
         }
       </div>

      </div>
    </div>
  );
}

