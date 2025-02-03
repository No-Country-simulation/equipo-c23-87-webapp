"use client";

import Image from "next/image";

interface CylinderLevelProps {
  level: number;
  status: "available" | "locked"; // Add a status prop
  onClick: () => void;
}

export default function CylinderLevel({ level, status, onClick }: CylinderLevelProps) {
  // Determine the image source based on the status
  let imageSrc: string;
  switch (status) {
    case "available":
      imageSrc = "drum";
      break;
    case "locked":
      imageSrc = "drum-disable";
      break;
    default:
      imageSrc = "drum-disable"; // Default to locked if status is invalid
  }

  return (
    <div
      className="cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={`/${imageSrc}.png`}
        alt={`Level ${level}`}
        className="hidden md:block"
        width={90}
        height={90}
      />
    </div>
  );
}
