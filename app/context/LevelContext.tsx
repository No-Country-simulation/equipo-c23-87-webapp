// app/context/LevelContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";

interface LevelContextType {
  currentLevel: number;
  setCurrentLevel: (level: number) => void;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

export const LevelProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLevel, setCurrentLevel] = useState(1);

  return (
    <LevelContext.Provider value={{ currentLevel, setCurrentLevel }}>
      {children}
    </LevelContext.Provider>
  );
};

export const useLevel = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw new Error("useLevel must be used within a LevelProvider");
  }
  return context;
};
