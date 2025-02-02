"use client";

export default function CylinderLevel({level, onClick}) {
return (
   <div
      className="w-24 h-32 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 rounded-t-full rounded-b-full shadow-lg transform flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
    >
      <span className="text-white font-bold text-xl">{level}</span>
    </div>
 );
}
