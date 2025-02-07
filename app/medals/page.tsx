"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "../ui/global.css";

const MedalsView = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-green-100 p-6 relative">
      <h1 className="text-3xl font-bold">Medals</h1>

      <div className="grid grid-cols-6 text-sm mt-4 border-b pb-2">
        <span>Application Submission</span>
        <span>Screening Stage</span>
        <span>Technical Interview</span>
        <span>Behavioral and Cultural Fit Interviews</span>
        <span>Offer Stage</span>
        <span>Onboarding</span>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-6 text-6xl">
        <span>🥚</span>
        <span>💬</span>
        <span>🤓</span>
        <span>👥</span>
        <span>✒️</span>
        <span>📄</span>
      </div>

      <div className="grid grid-cols-6 gap-6 mt-6 text-6xl">
        <span>⚫</span>
        <span>🎯</span>
        <span>🎯</span>
        <span>🎯</span>
        <span>🎯</span>
        <span>🎯</span>
      </div>

      <button className="absolute bottom-4 left-4 text-3xl" onClick={() => window.history.back()}>
        ↩️
      </button>
    </div>
  );
};

export default MedalsView;

