// app/components/WebDevPath.tsx
"use client";

import React from "react";
import "../ui/global.css";
import Image from "next/image";
import Header from "./Header";
import CylinderLevel from "./CylinderLevel";
import { steps } from "../lib/steps";
import { useRouter } from "next/navigation";
import { useLevel } from "../context/LevelContext"; // Import the context

export default function WebDevPath() {
  const { currentLevel, setCurrentLevel } = useLevel(); // Use global state
  const router = useRouter();

  const handleLevelClick = (level: number) => {
    if (level === currentLevel && level < 5) {
      setCurrentLevel(currentLevel + 1);
      alert(`Congrats! You have passed level ${level}. You advance to level ${currentLevel + 1} 🥳`);
    } else if (level > currentLevel) {
      alert(`Please, you must first beat level ${level - 1}`);
    } else {
      alert(`You've already passed this level. You are currently in level ${currentLevel}`);
    }
  };

  const handleLevelEvent = (levelId: number) => {
    if (levelId === 1) {
      router.push("/desktop-setup"); // Ensure the correct path
    } else {
      alert(`This level is locked. Please, go to level ${levelId - 1} first`);
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 min-h-screen bg-white">
      <Header />

      {/* Header Section */}
      <div className="w-full bg-green-100 p-4 text-center rounded-lg">
        <h1 className="text-xl font-bold">Web Dev Path</h1>
        <p className="text-gray-600">
          Advance through different levels to enhance your technical English as a Web Developer!
        </p>
      </div>

      {/* Path Container */}
      <div className="w-full relative flex flex-col items-center">
        {/* Dashed Line & Steps */}
        <div className="w-full flex flex-col items-center gap-8 mt-[3%]">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0; // Alternate left and right positions
            const status = step.id <= currentLevel ? "available" : "locked"; // Determine status

            return (
              <div key={step.id} className={`flex w-full max-w-lg ${isLeft ? "justify-start" : "justify-end"}`}>
                <div className="w-[70%] relative flex flex-col items-center">
                  {/* Dashed Line */}
                  {index !== 0 && (
                    <div
                      className={`absolute h-4 w-px bg-gray-400 transform ${
                        isLeft ? "rotate-45 -translate-x-30 -translate-y-8" : "-rotate-45 translate-x-30 -translate-y-8"
                      }`}
                      style={{ borderLeft: "2px dashed gray" }}
                    ></div>
                  )}

                  {/* Step Circle */}
                  <CylinderLevel level={step.id} status={status} onClick={() => handleLevelEvent(step.id)} />

                  {/* Step Label */}
                  <p className="mt-1 text-sm text-gray-700">{step.name}</p>

                  {/* Avatar (Positioned next to the current level) */}
                  {step.id === currentLevel && (
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        isLeft ? "left-8" : "right-8"
                      } transition-all duration-500`}
                    >
                      <Image
                        src="/character.png"
                        alt="Character"
                        className="rounded-full pb-16"
                        width={75} // Adjust size as needed
                        height={75}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
